from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def cuisine():
    s = { 
		'Indian': [{
						'dish_id':'1',
						'dish_name':'Chicken tandoori',
						'dish_price':'7.99$'
						}, {
						'dish_id':'2',
						'dish_name':'navratan kurma',
						'dish_price':'5.99$'}, {
						'dish_id':'3',
						'dish_name':'fried rice',
						'dish_price':'8.99$'}],
		'Mexican': [{
						'dish_id':'1',
						'dish_name':'Quesedillas',
						'dish_price':'7.99$'},{
						'dish_id':'2',
						'dish_name':'Enchilladas',
						'dish_price':'5.99$'},{
						'dish_id':'3',
						'dish_name':'Burritos',
						'dish_price':'8.99$'}],
		'Pizza': [{
						'dish_id':'1',
						'dish_name':'Margarita Slice',
						'dish_price':'2.99$'},{
						'dish_id':'2',
						'dish_name':'Spinach and Ricotta Slice',
						'dish_price':'2.99$'},{
						'dish_id':'3',
						'dish_name':'Ham and Pineapple Slice',
						'dish_price':'3.99$'}],
		'Italian': [{
                        'dish_id':'1',
                        'dish_name':'Mushroom Risotto',
                        'dish_price':'10.99$'},{
                        'dish_id':'2',
                        'dish_name':'Chicken Lasangna',
                        'dish_price':'9.99$'},{
                        'dish_id':'3',
                        'dish_name':'Chicken Tetrazzini',
                        'dish_price':'12.99$'}],
		'Greek': [{
                        'dish_id':'1',
                        'dish_name':'Spanakorizo',
                        'dish_price':'10.99$'},{
                        'dish_id':'2',
                        'dish_name':'Gyros',
                        'dish_price':'9.99$'},{
                        'dish_id':'3',
                        'dish_name':'Chicken Moussaka',
                        'dish_price':'12.99$'}]
		};
		return jsonify(s)

