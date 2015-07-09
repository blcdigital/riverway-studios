<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the wordpress construct of pages
 * and that other 'pages' on your wordpress site will use a
 * different template.
 *
 * @package WordPress
 * @subpackage black_label_creative
 * @since black label creative 1.0
 */

get_header(); ?>

<section id="container" role="main">
	<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<?php if ( is_front_page() ) { ?>
			<h2 class="entry-title"><?php the_title(); ?></h2>
		<?php } else { 
			the_post_thumbnail(); ?>
			<h1 class="entry-title page-title"><span><?php the_title(); ?></span></h1>
		<?php } ?>
		<article class="grid_3 content-page" id="post-<?php the_ID(); ?>">
			<?php the_content(); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'blc' ), 'after' => '</div>' ) ); ?>
			<?php edit_post_link( __( 'Edit', 'blc' ), '<p class="edit-link">', '</p>' ); ?>
		</article><!-- #post-## -->
		<aside class="grid_1 page-aside"></aside>

		<?php //comments_template( '', true ); ?>
	<?php endwhile; ?>
</section><!-- #container -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>