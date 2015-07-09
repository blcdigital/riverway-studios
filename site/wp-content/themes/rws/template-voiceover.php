<?php
/**
* Template Name: Voiceover
*
* Custom page template
*
* The "Template Name:" bit above allows this to be selectable
* from a dropdown menu on the edit page screen.
*
* @package WordPress
* @subpackage black_label_creative
* @since black_label_creative 1.0
*/

get_header(); ?>

<section id="container" role="main">
	<?php if ( have_posts() ) while ( have_posts() ) : the_post(); ?>
		<div class="voiceover-player">
			<?php the_post_thumbnail(); ?>
			<audio controls="controls" id="voiceoverPlayer" src="<?php bloginfo( 'template_url' ); ?>/audio/Voice_Over_Example.mp3" type="audio/mp3"></audio>
		</div>
		<h1 class="entry-title page-title"><span><?php the_title(); ?></span></h1>
		<article class="grid_3 content-page" id="post-<?php the_ID(); ?>">
			<?php the_content(); ?>
			<?php wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'blc' ), 'after' => '</div>' ) ); ?>
			<?php edit_post_link( __( 'Edit', 'blc' ), '<p class="edit-link">', '</p>' ); ?>
		</article><!-- #post-## -->
	<?php endwhile; ?>
</section><!-- #container -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>