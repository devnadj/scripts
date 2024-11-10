# -*- coding: utf-8 -*-
"""
Created on Sun Jun 30 13:26:11 2024

@author: nadjim
"""

import heapq

class Personnage:
    def __init__(self, nom, vitesse):
        self.nom = nom
        self.vitesse = vitesse
        self.temps_action = 0

    def agir(self):
        print(f"{self.nom} agit maintenant.")

    def calculer_temps_action(self, temps_courant):
        self.temps_action = temps_courant + (1 / self.vitesse)

# Initialisation des personnages
personnages = [
    Personnage("Guerrier", 10),
    Personnage("Mage", 7),
    Personnage("Archer", 8)
]

# File de priorité
file_de_priorité = []

# Initialisation de la file de priorité
for personnage in personnages:
    personnage.calculer_temps_action(0)
    heapq.heappush(file_de_priorité, (personnage.temps_action, personnage))

# Rotation des tours
temps_courant = 0
while not jeu_termine:  # Définir une condition pour terminer le jeu
    temps_courant, personnage_courant = heapq.heappop(file_de_priorité)
    personnage_courant.agir()
    personnage_courant.calculer_temps_action(temps_courant)
    heapq.heappush(file_de_priorité, (personnage_courant.temps_action, personnage_courant))