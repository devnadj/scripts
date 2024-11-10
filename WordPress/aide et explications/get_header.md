```php
get_header( string $name = null, array $args = array() ): void|false
```


Loads header template.

Description
Includes the header template for a theme or if a name is specified then a specialized header will be included.

For the parameter, if the file is called "header-special.php" then specify "special".

Parameters
$name
string
optional
The name of the specialized header.
Default:null

$args
array
optional
Additional arguments passed to the header template.
Default:array()

Return
void|false Void on success, false if the template does not exist.
More Information
If the theme contains no header.php file then the header from the default theme wp-includes/theme-compat/header.php will be included.

Code source de la fonction ```get_header```

```php
function get_header( $name = null, $args = array() ) {
	/**
	 * Fires before the header template file is loaded.
	 *
	 * @since 2.1.0
	 * @since 2.8.0 The `$name` parameter was added.
	 * @since 5.5.0 The `$args` parameter was added.
	 *
	 * @param string|null $name Name of the specific header file to use. Null for the default header.
	 * @param array       $args Additional arguments passed to the header template.
	 */
	do_action( 'get_header', $name, $args );

	$templates = array();
	$name      = (string) $name;
	if ( '' !== $name ) {
		$templates[] = "header-{$name}.php";
	}

	$templates[] = 'header.php';

	if ( ! locate_template( $templates, true, true, $args ) ) {
		return false;
	}
}
```


```php
<?php
if ( is_home() ) :
	get_header( 'home' );
elseif ( is_404() ) :
	get_header( '404' );
else :
	get_header();
endif;
?>
```


```php
<?php
// in index.php or where you want to include header
get_header( '', array( 'name' => 'Ruhul Amin', 'age' => 23 ) ); 
?>
```
We will be able to use this in header.php
```php
<h2>This is a Header</h2>
<p>Hey, <?php echo $args['name']; ?>, You are <?php echo $args['age']; ?> years old</p>
```