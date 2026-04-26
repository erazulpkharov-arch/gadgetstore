from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import psycopg2

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

def get_db_connection():
    return psycopg2.connect(
        host="db",
        database="gadgetstore",
        user="gadget_admin",
        password="Admin12345"
    )

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/products.html')
def products_page():
    return send_from_directory('.', 'products.html')

@app.route('/api/products')
def products():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT id, name, category, price, description, stock FROM products;")
    rows = cur.fetchall()
    cur.close()
    conn.close()

    products_list = []
    for row in rows:
        products_list.append({
            "id": row[0],
            "name": row[1],
            "category": row[2],
            "price": row[3],
            "description": row[4],
            "stock": row[5]
        })

    return jsonify(products_list)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
