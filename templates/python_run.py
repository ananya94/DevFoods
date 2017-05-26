import sqlite3
conn = sqlite3.connect('restaurants.db')
c = conn.cursor()
s= {}
for record in c.execute('''SELECT cuisine_name,dish_name, dish_price FROM cuisine_dish'''):
    print(record)

conn.close()