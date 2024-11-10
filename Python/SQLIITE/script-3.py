# -*- coding: utf-8 -*-
"""
Created on Mon Jun 17 14:48:50 2024

@author: nadjim
"""

import sqlite3

connection = sqlite3.connect('example.db')

cursor = connection.cursor()
cursor.execute('DROP TABLE IF EXISTS users');
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        firstname TEXT NOT NULL,
	    lastname TEXT NOT NULL,
        age INTEGER );
''')

cursor.execute('''
    INSERT INTO users (firstname, lastname, age)
    VALUES (?, ?, ?)''', ('Alice', 'Caroll', 30))

connection.commit()

users = [
    ('Patrick', 'Étoile', 25),
    ('Carlo', 'Tentacule', 35),
    ('Sheldon', 'Plankton', 21),
    ('Bob', "L'Éponge", 25),
    ('Sandy', 'Écureuil', 28)
]
cursor.executemany('INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)', users)
#connection.commit()

cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()

for row in rows:
    print(row)

connection.close()