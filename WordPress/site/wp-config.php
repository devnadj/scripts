<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link https://fr.wordpress.org/support/article/editing-wp-config-php/ Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'site' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'site' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', 'site' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9!r;?xVpYk7G/G_J&Ti|CzWL!K3^:JH-/UK1Sq9d ._e_e7KLEA3kg_?5Bsb^Ve)' );
define( 'SECURE_AUTH_KEY',  '3K;5:o/d;2.#&vYpR$v*F$^&pHcbj`PEi~?Y}%{j],F.=`Q7dIQi_&Lb,+ar__)7' );
define( 'LOGGED_IN_KEY',    '3Yt^a}oC`)](,Y1AKg0|,UwLh!g<3Ele8*qVAo}$ #fd+i-J*r)0AT:f7a![@b=3' );
define( 'NONCE_KEY',        '8^)[MXDKQwrt9bZ#=y#tV|3>`c*%MuN<f$F>Y1h}re_z)_$e2L[< Tl+-QgWVQ:7' );
define( 'AUTH_SALT',        '47.WiMPvx}Oi_/+vC{etx`9EL5#<FT58VU4]..!Vs#5giJ[~2L|Kg0dqx#-F>}YT' );
define( 'SECURE_AUTH_SALT', 'f8id|K#xc?0}mC15.x295DiXkM]~/)jV^P?jtXw]E0&m2tIsYK6LCEjt$_[c`WB9' );
define( 'LOGGED_IN_SALT',   '(*._WX}sI,} !:>qC0O8=?BaxYM)o@~eoh3|p>UXC@N~OUnrjwpN8M|AT3HSsLEo' );
define( 'NONCE_SALT',       '_m0d$Mq(j~paaY#Ow6#@:f<$R,NDNH$237Drl.U$yp9_:WeyUI^G,ySHq%y$nTe4' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs et développeuses : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs et développeuses d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur la documentation.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
