<?php

    //подключение стилей
    function my_theme_styles(){
        // wp_register_style('bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css', array(), '1', 'all');
        // wp_enqueue_style('bootstrap');
        // wp_register_style('bootstrap-theme', get_template_directory_uri() . '/assets/css/bootstrap-theme.min.css', array(), '1', 'all');
        // wp_enqueue_style('bootstrap-theme');
        // wp_register_style('magnific', get_template_directory_uri() . '/assets/css/magnific.css', array(), '1', 'all');
        // wp_enqueue_style('magnific');
        // wp_register_style('slick', get_template_directory_uri() . '/assets/css/slick.css', array(), '1', 'all');
        // wp_enqueue_style('slick');
        // wp_register_style('slick-theme', get_template_directory_uri() . '/assets/css/slick-theme.css', array(), '1', 'all');
        // wp_enqueue_style('slick-theme');
        // wp_register_style('first-slyle', get_template_directory_uri() . '/assets/css/first-slyle.css', array(), '1', 'all');
        // wp_enqueue_style('first-slyle');
        wp_register_style('style', get_template_directory_uri() . '/assets/css/main.min.css', array(), '1', 'all');
        wp_enqueue_style('style');
        // wp_register_style('mediaqueries', get_template_directory_uri() . '/assets/css/mediaqueries.css',array(), '1', 'all');
        // wp_enqueue_style('mediaqueries');
    }
    add_action('wp_enqueue_scripts', 'my_theme_styles');

    // подключение скриптов
    function my_theme_scripts(){
        // wp_enqueue_script('google-maps', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD3q9ElXkQ_iW7tT24yWufEvhFM_Rclbiw&callback=initMap', '', '',true);
        // wp_enqueue_script('jquery');
        // wp_register_script('bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array(), '1', true);
        // wp_enqueue_script('bootstrap');
        // wp_register_script('magnific', get_template_directory_uri() . '/assets/js/magnific.js', array(), '1', true);
        // wp_enqueue_script('magnific');
        // wp_register_script('slick', get_template_directory_uri() . '/assets/js/slick.min.js', array(), '1', true);
        // wp_enqueue_script('slick');
        // wp_register_script('jquery.inputmask', get_template_directory_uri() . '/assets/js/jquery.inputmask.bundle.min.js', array(), '1', true);
        // wp_enqueue_script('jquery.inputmask');
        wp_register_script('js', get_template_directory_uri() . '/assets/js/main.js', array(), '1', true);
        wp_enqueue_script('js');
    }
    add_action('wp_enqueue_scripts', 'my_theme_scripts');


    // add_action( 'init', 'create_post_type' );
	// function create_post_type() {	
	// 	register_post_type( 'our_services',array('labels' => array('name' => __( 'Наш сервис' ),'singular_name' => __( 'Unit' ),'add_new' => 'Add new unit' ,'add_new_item' => 'New unit',), 'rewrite' => true,'public' => true,'has_archive' => true,'supports' => array('title', 'thumbnail'),));
	// }