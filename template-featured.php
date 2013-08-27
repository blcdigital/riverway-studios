<?php
/**
* Template Name: Featured Band
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
	<?php
		$args = array( 'numberposts' => 1 );
		$lastposts = get_posts( $args );

		foreach($lastposts as $post) :
			setup_postdata($post);

			the_post_thumbnail();
	?>
			<h1 class="post-title"><span><?php the_title(); ?></span></h1>
			<article id="post-<?php the_ID(); ?>" class="grid_3 post">
				<p class="post-intro">Each month we put the spotlight on one of Riverway Studios regular customers.<br /> This month we speak to <b><?php the_title(); ?></b></p>
				<?php the_content(); ?>
			</article>
	<?php
		endforeach;
	?>

	<aside class="grid_1 post-archive">
		<h2>Archive</h2>

		<?php
			$args = array( 'offset' => 1 );
			$lastposts = get_posts( $args );

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