<?php
    class Router {
        /**
         * @param string $url
         */
        function get(string $url, callable $fn) {
            // if ($_SERVER['REQUEST_METHOD'] === 'GET' && $_GET['url'] === $url) {
            //     $fn();
            // }
            echo $_SERVER['REQUEST_URI'];

        }

        function post() {
            echo $_SERVER['REQUEST_POST'];

        }
        // private $ctrl;
        // public function routeReq() {
        //     try {
        //         //Chargement automatique des classes
        //         spl_autoload_register(function($class) {
        //             require_once('models/'.$class.'.php');
        //         });
        //         $url = '';
        //         if (isset($_GET['url'])) {
        //             $url = explode('/', filter_var($_GET['url'], FILTER_SANITIZE_URL));
        //             $controller = ucfirst(strtolower($url[0]));
        //             $controllerClass = "Controller".$controller;
        //             $controllerFile = "controllers/".$controllerClass.".php";
        //             if (file_exists($controllerFile)) {
        //                 require_once($controllerFile);
        //                 $this->ctrl = new $controllerClass($url);
        //             } else {
        //                 throw new Exception('Page introuvable');
        //             }
        //         } else {
        //             require_once('controllers/ControllerAccueil.php');
        //             $this->ctrl = new ControllerAccueil($url);
        //         }
        //     } catch (Exception $e) {
        //         $errorMsg = $e->getMessage();
        //         require_once('views/viewError.php');
        //     }
        // }
    }