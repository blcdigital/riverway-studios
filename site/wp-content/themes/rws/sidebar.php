<?php
/**
 * The Sidebar containing the primary and secondary widget areas.
 *
 * @package WordPress
 * @subpackage black_label_creative
 * @since black label creative 1.0
 */
?>
<section id="sidebar" class="grid_2">
	<!--<section class="widget-container portfolio-widget">
		<h3 class="widget-title">
			<span>Portfolio</span>
			<a href="/portfolio" title="">hear more</a>
		</h3>
		<p>Music widget</p>
	</section>-->

	<!--<section class="widget-container facebook-widget">
		<div class="fb-like-box" data-href="http://www.facebook.com/pages/Riverway-Studios/174545145921555" data-width="277" data-height="200" data-show-faces="false" data-stream="true" data-header="false"></div>
	</section>-->

	<!--<section class="widget-container featured-widget">
		<?php
			$args = array( 'numberposts' => 1 );
			$lastposts = get_posts( $args );

			foreach($lastposts as $post) :
				setup_postdata($post);

				the_post_thumbnail();
		?>
				<h3 class="widget-title">
					<span>Featured Band</span>
				</h3>
				<p>This month we talk to <b><?php the_title(); ?></b>. <a class="widget-more" href="<?php the_permalink(); ?>" title="">Read more</a></p>
		<?php
			endforeach;
		?>
	</section>-->

	<?php
		/* When we call the dynamic_sidebar() function, it'll spit out
		 * the widgets for that widget area. If it instead returns false,
		 * then the sidebar simply doesn't exist, so we'll hard-code in
		 * some default sidebar stuff just in case.
		 */
		if ( !dynamic_sidebar( 'primary-widget-area' ) ) :
			//do nothing
		endif; // end primary widget area
	?>
</section>