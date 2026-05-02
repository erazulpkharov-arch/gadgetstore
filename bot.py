import os
import requests
import psycopg2
from dotenv import load_dotenv
from telegram import Update, ReplyKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, MessageHandler, ContextTypes, filters

load_dotenv()

BOT_TOKEN = "8719181624:AAEz5nBojn6q9MlcedrJgQtgaBI1L_qeC4M"

DB_HOST = os.getenv("DATABASE_HOST", "db")
DB_NAME = os.getenv("DATABASE_NAME", "gadgetstore")
DB_USER = os.getenv("DATABASE_USER", "gadget_admin")
DB_PASSWORD = os.getenv("DATABASE_PASSWORD", "Admin12345")

keyboard = ReplyKeyboardMarkup(
    [
        ["📊 Состояние сайта"],
        ["📦 Данные товаров"],
        ["🗄 Состояние БД"]
    ],
    resize_keyboard=True
)

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text(
        "GadgetStore monitoring bot запущен ✅\nВыберите действие:",
        reply_markup=keyboard
    )

async def site_status(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        response = requests.get("http://web:5000/api/products", timeout=5)
        if response.status_code == 200:
            await update.message.reply_text("✅ Сайт работает. API /api/products отвечает успешно.")
        else:
            await update.message.reply_text(f"⚠️ Сайт отвечает, но код: {response.status_code}")
    except Exception as e:
        await update.message.reply_text(f"❌ Сайт недоступен: {e}")

async def products_data(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD
        )
        cur = conn.cursor()
        cur.execute("SELECT name, category, price, stock FROM products LIMIT 10;")
        rows = cur.fetchall()
        cur.close()
        conn.close()

        if not rows:
            await update.message.reply_text("Товаров в базе нет.")
            return

        text = "📦 Товары в базе:\n\n"
        for item in rows:
            text += f"• {item[0]} | {item[1]} | {item[2]} ₸ | остаток: {item[3]}\n"

        await update.message.reply_text(text)

    except Exception as e:
        await update.message.reply_text(f"❌ Ошибка при чтении БД: {e}")

async def db_status(update: Update, context: ContextTypes.DEFAULT_TYPE):
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            database=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD
        )
        cur = conn.cursor()
        cur.execute("SELECT COUNT(*) FROM products;")
        count = cur.fetchone()[0]
        cur.close()
        conn.close()

        await update.message.reply_text(f"✅ База данных работает.\nКоличество товаров: {count}")

    except Exception as e:
        await update.message.reply_text(f"❌ База данных недоступна: {e}")

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):
    text = update.message.text

    if text == "📊 Состояние сайта":
        await site_status(update, context)
    elif text == "📦 Данные товаров":
        await products_data(update, context)
    elif text == "🗄 Состояние БД":
        await db_status(update, context)
    else:
        await update.message.reply_text("Выберите кнопку ниже 👇", reply_markup=keyboard)

app = ApplicationBuilder().token(BOT_TOKEN).build()

app.add_handler(CommandHandler("start", start))
app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, handle_message))

app.run_polling()
