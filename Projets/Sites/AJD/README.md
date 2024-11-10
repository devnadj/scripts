# Outil de gestion de planning

Ce projet est une application de gestion de planning destinée à une petite structure, développée avec Symfony 7, HTML, CSS et JavaScript. L'objectif est de permettre aux utilisateurs de visualiser, planifier et gérer des événements ou des tâches de manière intuitive et structurée.

## Fonctionnalités principales

- **Gestion du planning** : Création, modification, et suppression d'événements ou de tâches directement depuis l'interface.
- **Authentification et rôles utilisateurs** : Utilisation des fonctionnalités d’authentification de Symfony pour gérer les droits d’accès des utilisateurs.
- **Interface interactive** : Intégration de JavaScript pour des interactions sans rechargement de page, offrant une expérience utilisateur dynamique.
- **Structure MVC** : Symfony organise le code de manière claire et modulaire, facilitant la maintenance et les futures évolutions.

## Prérequis

Avant de démarrer, assurez-vous d'avoir installé les éléments suivants :

- **PHP >= 8.2** : requis pour la compatibilité avec Symfony 7.
- **Composer** : gestionnaire de dépendances PHP pour installer et gérer les packages.
- **MySQL** ou un autre système de gestion de base de données compatible avec Doctrine ORM.
- **Node.js et npm (optionnel)** : Si vous souhaitez utiliser des packages front-end ou compiler des fichiers CSS/JavaScript.

## Installation

1. Clonez le dépôt sur votre machine locale.
2. Assurez-vous que votre environnement dispose de PHP, Composer et d’une base de données (par exemple, MySQL).
3. Si ce n’est pas déjà fait, créez un nouveau projet Symfony :

   ```bash
   composer create-project symfony/skeleton:"7.1.*" NomDuProjet
   ```

   Cette commande va automatiquement créer le dossier correspondant, et installer les différentes dépendances nécessaires au projet.
4. Ensuite tapez les commandes :

   ```bash
   cd NomDuProjet
   ```

   pour se rendre à la racine du projet.

   pour ouvrir l'éditeur de code dans la racine du projet, tapez l'une des commandes suivantes

   ```bash
   code ./
   ```

   pour VSCode

   ```bash
   phpstorm ./
   ```

   pour PHPStorm ...

5. Le squelette de Symfony est maintenant installé, qui ne contient encore aucun module. La commande suivante installera un ensemble de dépendances supplémentaires qui seront utiles à la création de notre application web.

   ```bash
   composer require webapp
   ```

## Création d'une première page
Dansa la console tapez la commande suivate :
```bash
php bin/console make:controler Home
```
Deux fichiers sont générés automatiquement qui sont :

```
 src/Controller/HomeController.php
 templates/home/index.html.twig
```

### Le contrôleur

Le contrôleur est une classe qui contient des méthodes, chacune de ces méthodes permettant de gérer une page.

```php
class HomeController extends AbstractController
{
    #[Route('/home', name: 'app_home', method: 'get', toto:'szdfsdf')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig', [
            'controller_name' => 'HomeController',
        ]);
    }
}
```
### La vue

6. Configurez les paramètres de connexion à la base de données dans le fichier `.env`.
7. Exécutez les migrations avec `php bin/console doctrine:migrations:migrate` pour créer la structure de base de données.
8. Lancez le serveur Symfony avec `symfony server:start` (ou `php bin/console server:start` si `symfony` n'est pas installé globalement).
9. Accédez à l'application depuis votre navigateur pour commencer à l'utiliser.

## À venir

- **Notifications** : Système de notifications pour rappeler les tâches planifiées.
- **Partage de planning** : Possibilité de partager des plannings entre utilisateurs.
- **Exports et rapports** : Génération de rapports d’activité sous forme de fichiers téléchargeables (PDF, CSV).