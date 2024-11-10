<h1>Exercice - Créer un routeur</h1>
<?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        echo '<h2>Méthode GET - liste des variables transmises' . '</h2>';
        var_dump($_GET);
    }
    else if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo '<h2>Méthode POST - liste des variables transmises' . '</h2>';
        var_dump($_POST);
    }

    echo '<h2>route: ' . $_SERVER['REQUEST_URI'] . '</h2>';
    $uri = explode('/', $_SERVER['REQUEST_URI']);
    var_dump($uri);
    // /?toto=10 ou index.php?toto=10
    // echo '<h2>GET: ' . $_GET['toto'] . '</h2>';
