<?php

require 'inc/angular-enqueue.php';


class angularjs_wp_theme {

	function init() {

		$angularScripts = new angular_enqueue();
		$angularScripts->init();

	}

}

$angularJStheme = new angularjs_wp_theme();
$angularJStheme->init();

?>
