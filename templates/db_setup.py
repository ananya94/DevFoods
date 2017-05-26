import sqlite3
conn = sqlite3.connect('restaurants.db')
c = conn.cursor()
#c.execute('''CREATE TABLE cuisine_dish (
#    cuisine_id integer, cuisine_name text, dish_id integer, dish_name text, dish_price real, quantity integer)''')
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

cus_id = {'1':'Indian','2':'Mexican','3':'Pizza','4':'Italian','5':'Greek'}
inv_map = dict((v,k) for k, v in cus_id.items())
       

for each_record in s:
    for item in s[each_record]:
            item['quantity']= 0
            record = (int(inv_map[each_record]),each_record,int(item['dish_id']),item['dish_name'],float(item['dish_price'][:-1]),item['quantity'])
            print(c.execute('INSERT INTO cuisine_dish VALUES (?,?,?,?,?,?)',record))
#            c.commit()
conn.commit()
c.close()
