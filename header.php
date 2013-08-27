<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package WordPress
 * @subpackage black_label_creative
 * @since black label creative 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<title><?php
	/*
	 * Print the <title> tag based on what is being viewed.
	 * We filter the output of wp_title() a bit -- see
	 * twentyten_filter_wp_title() in functions.php.
	 */
	wp_title( '-', true, 'right' );

	?></title>
<meta name="desciption" content="Recording and rehearsal studio in Harlow, Essex." />
<meta name="keywords" content="recording, reheashal, reheashal room, hertfordshire, essex, bishops stortford, harlow, hertford, epping, london, stansted, studio, music, band, bands" />
<link rel="profile" href="http://gmpg.org/xfn/11" />
<link rel="stylesheet" media="all" href="<?php bloginfo( 'template_url' ); ?>/reset.css" />
<link rel="stylesheet" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
<link rel="stylesheet" href="<?php bloginfo( 'template_url' ); ?>/jquery.fancybox-1.3.4.css" />
<link rel="stylesheet" media="all" href="<?php bloginfo( 'template_url' ); ?>/mediaelementplayer.css" />

<!--[if lte IE 9]>
	<link rel="stylesheet" media="all" href="<?php bloginfo( 'template_url' ); ?>/ie9.css" />
<![endif]-->
<!--[if lte IE 8]>
	<link rel="stylesheet" media="all" href="<?php bloginfo( 'template_url' ); ?>/ie8.css" />
<![endif]-->
<!--[if lte IE 7]>
	<link rel="stylesheet" media="all" href="<?php bloginfo( 'template_url' ); ?>/ie7.css" />
<![endif]-->
<!--[if lte IE 6]>
	<link rel="stylesheet" media="all" href="<?php bloginfo( 'template_url' ); ?>/ie6.css" />
<![endif]-->

<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<!--[if lt IE 9]>
	<script src="//html5shim.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->

<?php
	/* We add some JavaScript to pages with the comment form
	 * to support sites with threaded comments (when in use).
	 */
	if ( is_singular() && get_option( 'thread_comments' ) )
		wp_enqueue_script( 'comment-reply' );

	/* Always have wp_head() just before the closing </head>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to add elements to <head> such
	 * as styles, scripts, and meta tags.
	 */
	wp_head();
?>
</head>
<body <?php body_class(); ?>>
<!-- Start Facebook garb -->
<div id="fb-root"></div>
<!--<script>(function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {return;}
	js = d.createElement(s); js.id = id;
	js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=265690460132917";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>-->
<!-- End Facebook garb -->

<div id="pageWrapper">
	<header id="header">
		<?php $heading_tag = ( is_home() || is_front_page() ) ? 'h1' : 'div'; ?>
		<<?= $heading_tag ?> id="site-title">
			<a href="<?php echo home_url( '/' ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home">	<img src="/wp-content/themes/rws/images/riverway-studios.png" alt="<?php bloginfo( 'name' ); ?>" />
			</a>
		</<?= $heading_tag ?>>

		<?php /*  Allow screen readers / text browsers to skip the navigation menu and get right to the good stuff */ ?>
		<a class="skipLink" href="#content" title="<?php esc_attr_e( 'Skip to content', 'blc' ); ?>"><?php _e( 'Skip to content', 'blc' ); ?></a>

		<?php //get_search_form(); ?>

		<nav>
			<?php
				/* Our navigation menu. If one isn't filled out, wp_nav_menu falls back to wp_page_menu. The menu assiged to the primary position is the one used. If none is assigned, the menu with the lowest ID is used.  */ 
				wp_nav_menu( array(
					'container' => '',
					'menu_class' => '',
					'theme_location' => 'primary'
				) );
			?>
		</nav><!-- #navigation -->
	</header><!-- #header -->