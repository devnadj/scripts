# -*- coding: utf-8 -*-
"""
Created on Sat Jun 15 19:41:19 2024

@author: nadjim
"""

import sqlite3

connection = sqlite3.connect('test.db')


connection.execute('DROP TABLE IF EXISTS actor;')
connection.execute(
    '''CREATE TABLE actor (
        actorID INTEGER PRIMARY KEY AUTOINCREMENT,
        firstname CHAR(50)  NOT NULL,
        lastname CHAR(50) NOT NULL, 
        birthday DATE NOT NULL,
        address CHAR(50),
        cp CHAR(5),
        city CHAR(50) );
    ''');
    
connection.execute(
    '''
    INSERT INTO actor(firstname, lastname, birthday, address, cp, city)
    VALUES
    ('Kaabache', 'nadjim', '2000-04-25', '4 chemin de la borie', '42400', 'Saint-Chamond'),
    ('Kaabache', 'farid', '2000-01-01', '4 chemin de la borie', '42400', 'Saint-Chamond'),
    ('Kaabache', 'karim', '2000-01-01', '4 chemin de la borie', '42400', 'Saint-Chamond'),
    ('Kaabache', 'zahir', '2000-01-01', '4 chemin de la borie', '42400', 'Saint-Chamond')
    ;''');
    
cursor = connection.cursor()
cursor.execute('select * from "actor";')
rows = cursor.fetchall()


for row in rows:
   print(row)

print ("Table created successfully")

connection.close()