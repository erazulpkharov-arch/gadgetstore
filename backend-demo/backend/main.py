from fastapi import FastAPI
from pydantic import BaseModel
from psycopg import connect

app = FastAPI(
    title="GadgetStore API",
    description="Backend API для интернет-магазина гаджетов (демонстрационный проект)",
    version="1.0.0"
)
conn = connect(
    host="localhost",
    dbname="postgres",   # или твоя база
    user="postgres",
    password="Erbas05",
    port=5432
)
class Auth(BaseModel):
    email: str
    password: str

@app.get("/health")
def health():
    return {"ok": True}

@app.post("/auth/register")
def register(data: Auth):
    return {"ok": True, "message": "registered (demo)", "accessToken": "demo-token"}

@app.post("/auth/login")
def login(data: Auth):
    return {"ok": True, "message": "logged in (demo)", "accessToken": "demo-token"}

@app.post("/auth/refresh")
def refresh():
    return {"ok": True, "accessToken": "demo-token-refreshed"}

@app.post("/auth/logout")
def logout():
    return {"ok": True}

@app.get("/auth/me")
def me():
    return {"email": "demo@example.com", "role": "user"}

@app.post("/auth/change-password")
def change_password():
    return {"ok": True, "message": "password changed (demo)"}

@app.post("/auth/forgot-password")
def forgot_password():
    return {"ok": True, "message": "reset link sent (demo)"}

@app.get("/db-test")
def db_test():
    with conn.cursor() as cur:
        cur.execute("SELECT version();")
        v = cur.fetchone()[0]
    return {"postgres_version": v}

@app.get("/products")
def products():
    with conn.cursor() as cur:
        cur.execute("""
            SELECT p.id, p.title, p.price, p.rating, p.stock, c.name
            FROM products p
            LEFT JOIN categories c ON c.id = p.category_id
            ORDER BY p.id DESC
            LIMIT 50
        """)
        rows = cur.fetchall()

    return [
        {
            "id": r[0],
            "title": r[1],
            "price": float(r[2]),
            "rating": float(r[3]),
            "stock": int(r[4]),
            "category": r[5],
        }
        for r in rows
    ]