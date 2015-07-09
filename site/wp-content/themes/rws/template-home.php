<?php
/**
* Template Name: Homepage
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
		<!-- change to gallery based thing -->
		<div id="heroPlayer" class="heroPlayer">
			<ul>
				<li>
					<img src="<?php bloginfo( 'template_url' ); ?>/images/carousel/item_1.png" alt="" />
				</li>
				<li>
					<img src="<?php bloginfo( 'template_url' ); ?>/images/carousel/item_2.png" alt="" />
				</li>
				<li>
					<img src="<?php bloginfo( 'template_url' ); ?>/images/carousel/item_3.png" alt="" />
				</li>
				<li>
					<img src="<?php bloginfo( 'template_url' ); ?>/images/carousel/item_4.png" alt="" />
				</li>
			</ul>
		</div>
		<!-- end -->

		<h2 class="page-title"><span><?php the_title(); ?></span></h2>
		<article class="grid_3 content-page" id="post-<?php the_ID(); ?>">
			<?php the_content(); ?>
			<?php edit_post_link( __( 'Edit', 'blc' ), '<p class="edit-link">', '</p>' ); ?>
		</article><!-- #post-## -->

		<?php //comments_template( '', true ); ?>
	<?php endwhile; ?>
</section><!-- #container -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>