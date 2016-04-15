<?php
global $myplugin_api_mytype;

class angular_theme_routes {

    function __init() {

        global $myplugin_api_mytype;
        add_filter( 'rest_api_init', array( $this, 'register_routes' ) );
        add_filter( 'rest_api_init', array( $this, 'add_comments' ), 10, 3);

    }

    function register_routes( $routes ) {

        register_rest_route( 'wp/v2', 'user', array(
            'methods'   => 'GET',
            'callback'  => array( $this, 'get_user' ),
            'args'      => array(
                'name' => 'localhost'
            )
        ) );

    }

    function get_user( WP_REST_Request $request ) {

        $name = $request['name'];
        $return['name'] = $name;
        $return['password'] = '12345';
        $return['request'] = $request;

        $response = new WP_REST_Response( $return );
        return $response;

    }

    function add_comments() {

        register_api_field( 'post', 'comments', array(
            'get_callback'    => array( $this, 'get_comments' ),
            'update_callback' => null,
            'schema'          => null,
        ) );

    }

    function get_comments( $object, $field_name, $request ) {

        return get_comments( array( 'ID' => $object[ 'id' ] ) );

    }
}