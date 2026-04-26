# 🛒 GadgetStore — DevOps Fullstack Project

## 📌 Описание проекта

GadgetStore — это полнофункциональное веб-приложение интернет-магазина, разработанное с применением современных DevOps-практик.

Проект демонстрирует полный цикл разработки:
- от создания backend и базы данных
- до контейнеризации, мониторинга и автоматизации инфраструктуры

---

## 🎯 Цель проекта

Цель — показать навыки:
- Backend разработки
- DevOps инженерии
- Контейнеризации
- Мониторинга
- Интеграции AI
- Автоматизации инфраструктуры

---

## 🏗️ Архитектура системы

Пользователь → Flask API → PostgreSQL
↓
Prometheus → Grafana
↓
Telegram Bot
↓
Jenkins

## 🧱 Технологии

| Компонент | Технология |
|----------|-----------|
| Backend | Flask (Python) |
| Frontend | HTML, CSS, JS |
| База данных | PostgreSQL |
| Контейнеризация | Docker, Docker Compose |
| Мониторинг | Prometheus, Grafana |
| Метрики | Node Exporter |
| CI/CD | Jenkins |
| Автоматизация | Bash |
| AI | OpenAI API |
| Уведомления | Telegram Bot |

---

## ⚙️ Основной функционал

### 🌐 Веб-приложение
- Просмотр товаров
- Динамическая загрузка данных из БД
- API-интерфейс


### 🔌 API

GET /api/products
POST /api/assistant
GET /metrics
### 🔌 APIGET /api/products
POST /api/assistant
GET /metrics


## 🤖 AI-ассистент

Позволяет:
- рекомендовать товары
- отвечать на вопросы пользователя

Пример запроса:

```bash
curl -X POST http://localhost:5000/api/assistant \
-H "Content-Type: application/json" \
-d '{"question":"Посоветуй смартфон"}'


📊 Мониторинг
Prometheus
сбор метрик с Node Exporter
сбор метрик с Flask (/metrics)
Grafana
визуализация:
CPU
RAM
состояние сервисов
📩 Telegram бот

Функции:

📊 Проверка состояния сайта
📦 Получение данных товаров
🗄 Проверка базы данных
🔐 Безопасность
SSH доступ
Firewall (UFW)
Fail2Ban
Nginx Reverse Proxy
SSL (самоподписанный сертификат)
🐳 Контейнеризация

Все сервисы запускаются через Docker Compose:

sudo docker compose up --build

Сервисы:

web (Flask)
db (PostgreSQL)
prometheus
grafana
node-exporter
jenkins
telegram bot
⚙️ CI/CD (Jenkins)
Jenkins развернут в Docker
используется для автоматизации сборки
🧠 Автоматизация (IaC)

Скрипт setup.sh:

устанавливает зависимости
настраивает сервер
запускает инфраструктуру
делает резервную копию

📁 Структура проекта
gadgetstore/
├── app.py
├── bot.py
├── docker-compose.yml
├── Dockerfile
├── requirements.txt
├── setup.sh
├── monitoring/
│   └── prometheus.yml
├── index.html
├── products.html
├── style.css
├── script.js
└── README.md
🚀 Запуск проекта
git clone https://github.com/erazulpkharov-arch/gadgetstore.git
cd gadgetstore

Доступ к сервисам
| Сервис     | URL                                            |
| ---------- | ---------------------------------------------- |
| Web        | [http://localhost:5000](http://localhost:5000) |
| Grafana    | [http://localhost:3000](http://localhost:3000) |
| Prometheus | [http://localhost:9090](http://localhost:9090) |
| Jenkins    | [http://localhost:8080](http://localhost:8080) |



📌 Особенности проекта
Полный DevOps pipeline
Микросервисная архитектура
Контейнеризация всех компонентов
Реальная интеграция AI
Мониторинг в реальном времени
Интерактивный Telegram бот
