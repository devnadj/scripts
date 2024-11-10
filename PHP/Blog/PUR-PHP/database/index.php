<?php

function getPdo(): PDO
{
    $dns = 'mysql:host=cl1-sql10;dbname=mahvu1;';
    try {
        return new PDO($dns, 'mahvu1', 'fVnTwku0sjxR', [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        ]);
    } catch (PDOException $e) {
        echo 'Erreur de connexion : ' . $e->getMessage();
        exit;
    }
}

$dns = 'mysql:host=cl1-sql10;dbname=mahvu1;port=3306';
$dns = 'mysql:host=cl1-sql10;dbname=mahvu1;';

try {
    $pdo = new PDO($dns, 'mahvu1', 'fVnTwku0sjxR', [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    echo 'Erreur de connexion : ' . $e->getMessage();
    exit;
}