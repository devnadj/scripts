# Menu configurable

## Cahier des charges

Fournir à l'utilisateur un moyen d'ajouter un menu réctractable et complètement configurable et qui s'adapte à plusieurs tailles d'écrans.

- En mode large (ordinateurs), le menu horizontal affiche les liens et les icônes
  - l'icône du burger est cachée
- en mode reduit (tablette ou téléphone) :
  - les liens du menu horizontal disparaisse
  - l'icône du burger apparaît
- Par défaut, le menu vertical n'est pas visible.
- Lorsque l'on clique sur le menu burger, le menu vertical change de statut. S'il est caché, il apparait, s'il est affiché il disparait.
- Pour cacher le menu, nous n'utilisons pas le `display: none` qui n'est pas adapté à notre cas
- Le menu vertical peut apparaitre à gauche ou à droite selon sa configuration
- animation d
- le fichier de configuration par défaut permet de déterminer l'allure du menu au démarrage.
- fournir trois boutons pour choisir entre mode réduit, mode intermédiaire et mode large.

Le menu utilise une position fixe, ` position: fixed` est fixé de manière à s'afficher par dessus le contenu


1. charger le fichier de configuration du menu et afficher le menu en conséquence
2. État initial
2.1. Le menu vertical est caché 

Ce qui apparait de ce cahier des charges :

Tout d'abord on va partir 

```css
```

