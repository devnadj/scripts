# -*- coding: utf-8 -*-
"""
Created on Mon Jun 17 00:52:50 2024

@author: nadjim
"""

import sqlite3

# Connexion à la base de données exemple.db, si elle n'existe pas, elle est créée
connection = sqlite3.connect('exemple.db')

# Création d'un curseur
cursor = connection.cursor()

# Suppression de la table
connection.execute('DROP TABLE IF EXISTS users;');

# Création d'une table
connection.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        age INTEGER
    );
''')

request = 'INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)'

# Insertion de données
connection.execute(request, ('Alice', 'Merveille', 30))

connection.execute('INSERT INTO users (firstname, lastname, age) VALUES (?, ?, ?)', ('Bob', "L'éponge", 25))

# Commit des changements
connection.commit()

# Lecture des données
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()

for row in rows:
    print(row)

# Fermeture de la connexion
connection.close()