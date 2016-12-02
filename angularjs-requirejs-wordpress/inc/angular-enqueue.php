<?php

class angular_enqueue {

	function init() {

		add_action( 'wp_enqueue_scripts', array( $this, 'angular_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'angular_styles' ) );

	}

	function angular_scripts() {

		wp_enqueue_script( 'app', get_template_directory_uri().'/dist/bundle.js', null, null, false );

		wp_localize_script( 'app', 'ajaxInfo',
			array(

				'api_url'			 => rest_get_url_prefix() . '/wp/v2/',
				'template_directory' => get_template_directory_uri() . '/',
				'nonce'				 => wp_create_nonce( 'wp_rest' ),
				'is_admin'			 => current_user_can('administrator')

			)
		);

	}

	function angular_styles() {

	}

}


?>
