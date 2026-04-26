CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    price INTEGER NOT NULL,
    description TEXT,
    stock INTEGER DEFAULT 0
);

INSERT INTO products (name, category, price, description, stock) VALUES
('iPhone 15 Pro', 'Смартфоны', 549990, 'Флагманский смартфон Apple', 10),
('Samsung Galaxy S24', 'Смартфоны', 489990, 'Мощный Android-смартфон', 8),
('MacBook Air M2', 'Ноутбуки', 699990, 'Легкий ноутбук для учебы и работы', 5),
('AirPods Pro 2', 'Наушники', 129990, 'Беспроводные наушники с шумоподавлением', 15),
('Apple Watch Series 9', 'Смарт-часы', 229990, 'Смарт-часы для здоровья и уведомлений', 7);
