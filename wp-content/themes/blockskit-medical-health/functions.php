<?php

/**
 * Blockskit Medical Health functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Blockskit Medical Health
 */

define( 'BLOCKSKIT_MEDICAL_HEALTH_URL', trailingslashit( get_stylesheet_directory_uri() ) );

if ( ! function_exists( 'blockskit_medical_health_setup' ) ) {

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	function blockskit_medical_health_setup() {

		// Make theme available for translation.
		load_theme_textdomain( 'blockskit-medical-health', get_stylesheet_directory() . '/languages' );
	}
}
add_action( 'after_setup_theme', 'blockskit_medical_health_setup' );

/**
 * Enqueue scripts and styles
 */
function blockskit_medical_health_scripts() {
	$version = wp_get_theme( 'blockskit-medical-health' )->get( 'Version' );
	// enqueue parent style
	wp_enqueue_style('blockskit-medical-health-parent-style', get_template_directory_uri() . '/style.css');
}
add_action( 'wp_enqueue_scripts', 'blockskit_medical_health_scripts' );

/**
 * Label update filter.
 */
function blockskit_medical_health_block_pattern_categories_filter( $block_pattern_categories ){
	$block_pattern_categories['theme']['label'] = __( 'Theme Patterns', 'blockskit-medical-health' );
	return $block_pattern_categories;
}
add_filter( 'blockskit_base_block_pattern_categories', 'blockskit_medical_health_block_pattern_categories_filter' );

die;