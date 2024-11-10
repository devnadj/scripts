<?php
    require_once 'partials/head.php';
    require_once 'partials/header.php';
    
    require_once ('database/index.php');
    require_once 'render/render.php';

    echo '<h2>' . $article['post_title'] . '</h2>';
    echo $article['post_content'];
 
    
    require_once ('partials/footer.php');
    require_once ('partials/end.php');
?>