<?php
/**
 * The Template for displaying all single posts.
 *
 * @package WordPress
 * @subpackage black_label_creative
 * @since black_label_creative 1.0
 */

get_header(); ?>

<section id="container" role="main">
	<?php if ( have_posts() ) while ( have_posts() ) : the_post();
		the_post_thumbnail(); ?>
		<h1 class="post-title"><span><?php the_title(); ?></span></h1>
		<article id="post-<?php the_ID(); ?>" class="grid_3 post">
			<?php the_content(); ?>

			<div class="entry-utility">
				<?php edit_post_link( __( 'Edit', 'blc' ), '<span class="edit-link">', '</span>' ); ?>
			</div>
		</article>
	<?php endwhile; // end of the loop. ?>

	<aside class="grid_1 post-archive">
		<h2>Archive</h2>

		<?php
			$lastposts = get_posts();

			if (count($lastposts) > 0) {
				?><ul><?php
			}

			foreach($lastposts as $post):
				setup_postdata($post);
		?>
				<li>
					<a href="<?php the_permalink(); ?>" title=""><?php the_title(); ?></a>
				</li>
		<?php
			endforeach;

			if (count($lastposts) > 0) {
				?></ul><?php
			} else {
				?><p>No archives yet!</p><?php
			}
		?>
	</aside>
</section>

<?php get_sidebar(); ?>
<?php get_footer(); ?>