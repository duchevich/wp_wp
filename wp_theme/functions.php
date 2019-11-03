<?php

    //подключение стилей
    function my_theme_styles(){
        wp_register_style('style', get_template_directory_uri() . '/assets/bundles/main.css', array(), '1', 'all');
        wp_enqueue_style('style');
    }
    add_action('wp_enqueue_scripts', 'my_theme_styles');

    // подключение скриптов
    function my_theme_scripts(){
        wp_register_script('js', get_template_directory_uri() . '/assets/bundles/bundle.js', array(), '1', true);
        wp_enqueue_script('js');
    }
    add_action('wp_enqueue_scripts', 'my_theme_scripts');


    // add_action( 'init', 'create_post_type' );
	// function create_post_type() {	
	// 	register_post_type( 'our_services',array('labels' => array('name' => __( 'Наш сервис' ),'singular_name' => __( 'Unit' ),'add_new' => 'Add new unit' ,'add_new_item' => 'New unit',), 'rewrite' => true,'public' => true,'has_archive' => true,'supports' => array('title', 'thumbnail'),));
	// }