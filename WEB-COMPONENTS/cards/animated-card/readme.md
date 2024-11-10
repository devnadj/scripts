
# Rappels

La hauteur d'une div en `position: relative;` ne s'adapte pas automatiquement à la hauteur des div enfant en `position: absolute;`. Les div `absolute` sont retirées du flux normal du document, ce qui signifie que la div parente ne voit pas ces éléments pour calculer sa hauteur ou sa largeur. Il est donc nécessaire de fournir des dimension à la boite parente.

Explication
- Une div enfant en `absolute` est positionnée par rapport à son ancêtre le plus proche en `relative`, `absolute`, `fixed`, ou `sticky`, mais elle ne prend plus de place dans le flux du document.
- La div parente en `relative` se comporte normalement dans le flux et calcule sa taille uniquement en fonction de son propre contenu (et non de la taille ou position des enfants en absolute).

# Structure du composant

Le composant est une carte qui affiche deux faces
- en mode normal, une face (le recto) est affichée
- lors du passage de la souris sur la carte la première face se réduit et disparait, et la seconde face (le verso) s'agrandit et s'affiche

il est nécessaire d'avoir un conteneur principal et deux coneteneurs enfants.

```html
<div class="card-container">
    <div class="card-side back"></div>
    <div class="card-side front"></div>
</div>
```

Les deux faces doivent s'afficher l'une sur l'autre, il est donc nécessaire que le conteneur parent soit en affichage relatif et les faces en affichage absolu. L'ordre d'apparition des div dans le code est ici important. La première div enfant sera recouverte par la seconde, la première div sera donc le verso (back) et la seconde div le recto (front).

```css
.card-container {
    position: relative;
}

.card-side {
    position: absolute;
}

.front {

}

.back {

}

```
