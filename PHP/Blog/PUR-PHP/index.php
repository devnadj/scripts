<?php

    if(!empty($_GET['id']) && ctype_digit($_GET['id'])) {
        $id = $_GET['id'];
    }

    if(! isset($id)) {
        die('Vous devez préciser un paramètre `id` dans l\'URL pour que cette page fonctionne.');
    }

    require_once 'database/index.php';    

    require_once ('views/home.php');

    $routes = [
        'home' => 'home',
        'articles' => 'articles',
        'article' => 'article'
    ];

    $pdo->prepare("SELECT * FROM wp_posts WHERE ID = :id;");
    render('article', ['article' => $article]);
    render('articles', ['articles' => $articles]);
?>

