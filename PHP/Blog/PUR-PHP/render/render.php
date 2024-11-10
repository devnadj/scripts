<?php
    function render(string $path, array $variables = []) {
        extract($variables);
        ob_start();
        require('views/' . $path . '.php');
        $pageContent = ob_get_clean();
        require('views/layout.php');
    }