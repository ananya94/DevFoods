from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin
import sqlite3


app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def connection():
    conn = sqlite3.connect('restaurants.db')
    c = conn.cursor()
    s= {}
    for record in c.execute('''SELECT cuisine_name,dish_id,dish_name, dish_price,quantity FROM cuisine_dish'''):
        if record[0] in s:
            s[record[0]].append({
                'dish_id':record[1],
                'dish_name': record[2],
                'dish_price': record[3],
                'quantity': record[4]
            })
        else:
            s[record[0]] = [{
                'dish_id': record[1],
                'dish_name': record[2],
                'dish_price': record[3],
                'quantity': record[4]
            }]
    print(s)
    conn.close()

    return jsonify(s)
