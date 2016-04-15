<?php

require 'inc/angular-enqueue.php';

require 'inc/custom-routes.php';


class angularjs_wp_theme {

	function init() {

		$angularScripts = new angular_enqueue();
		$angularScripts->init();

        $angularThemeRoutes = new angular_theme_routes();
        $angularThemeRoutes->__init();

	}

}

$angularJStheme = new angularjs_wp_theme();
$angularJStheme->init();

?>
