# Définition des besoins du projet

- Interface pour ajouter un mot inexistant dans la base
- Interface pour ajouter un verbe inexistant dans la base

# Formulaire

Recherche d'un mot

<div style="border:solid 1px; ">
<form style="padding:5px">
    <input placeholder="mot à rechercher">
    <input value="rechercher" type="submit">
</form>
</div>
<br>

Ajouter un mot

<form>
    <label>Mot</label><input placeholder="ajouter un mot"><br>
    <label>Phonétique</label><input placeholder="phonétique">
    <input style="width:100%;" value="ajouter" type="submit">
</form>
<br>

Ajouter un verbe


<form>
    <div class="frm_container">
        <label>Verbe</label><input placeholder="ajouter un verbe">
        <label>Groupe</label>
        <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
        <label>Auxilaire</label>
        <select>
            <option>avoir</option>
            <option>être</option>
            <option>avoir/être</option>
        </select>
        <label>Transitif</label><input type="checkbox">
        <label>Intransitif</label><input type="checkbox">
        <label>Transitif indirect</label><input type="checkbox">
        <label>Pronominal</label><input type="checkbox">
        <label>Exclusivement pronominal</label><input type="checkbox">
        <label>Défectif</label><input type="checkbox">
        <label>Impersonnel</label><input type="checkbox">
    </div>
    <input style="width:100%" value="ajouter" type="submit">
</form>


Le verbe doit avoir une correspondance dans la table words

# ressources

- Fichier brut words.txt qui contient l'ensemble des mots de la langue française. À chaque ligne, un nouveau mot.
- Fichier words.csv qui contient l'ensemble des mots de la langue française avec la phonétique. Le format est le suivant : 

```CSV
mot;phonétique;
```

Peupler la table word avec le fichier words.csv
Peupler la table verb avec le fichier verbs.csv

<style>
    .frm_container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        padding: 5px;
        margin: 3px;
    }

    form {
        background-color: #ccc;
        color: black;
    }

    label {
    }
</style>