<?php
    require_once 'partials/head.php';
    require_once 'partials/header.php';

    require_once ('database/index.php');
        

    $query = $pdo->prepare("SELECT * FROM wp_posts WHERE post_status = 'publish' AND post_type = 'page';");
    $query->execute();
    $articles = $query->fetchAll();


    require_once('render/render.php');

    //var_dump($articles);
    foreach ($articles as $article) {
        echo '<hr style="border: 10px solid green;border-radius: 5px;">';
        echo '<article>';
        echo '<h2 style="color:red;">' . $article['post_title'] . '</h2>';
        echo '<p>' . $article['post_content'] . '</p>';
        echo '</article>';
    }

    require_once 'partials/footer.php';
    require_once 'partials/end.php';
?>