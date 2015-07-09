<?php
/**
* Template Name: Gallery
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
	<?php if ( have_posts() ) while ( have_posts() ) : the_post();
		the_post_thumbnail(); ?>
		<h1 class="page-title"><span><?php the_title(); ?></span></h1>
		<article class="grid_3 content-page" id="post-<?php the_ID(); ?>">
			<?php the_content(); ?>

			<div id="gallery">
				<?php
					$gallery_shortcode = '[gallery id="' . intval( $post->ID ) . '", link="file"]';
					print apply_filters( 'the_content', $gallery_shortcode );
				?>
			</div>

			<?php edit_post_link( __( 'Edit', 'blc' ), '<p class="edit-link">', '</p>' ); ?>
		</article><!-- #post-## -->

		<aside id="albumList" class="grid_1">
			<h2>Select gallery</h2>
		</aside>

		<?php //comments_template( '', true ); ?>
	<?php endwhile; ?>
</section><!-- #container -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>