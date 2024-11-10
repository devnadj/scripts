<?php
    require_once 'partials/head.php';
    require_once 'partials/header.php';

    require_once ('database/index.php');
    $pdo->prepare("SELECT * FROM wp_posts WHERE post_status = 'publish' AND post_type = 'page';");
    require_once 'partials/footer.php';
    require_once 'partials/end.php';
?>