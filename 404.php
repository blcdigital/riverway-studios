<?php
/**
 * The template for displaying 404 pages (Not Found).
 *
 * @package WordPress
 * @subpackage black_label_creative
 * @since black label creative 1.0
 */

get_header(); ?>

	<div id="container">
		<div id="content" role="main">

			<article id="post-0" class="post error404 not-found">
				<h1 class="entry-title"><?php _e( 'Not Found', 'blc' ); ?></h1>
				<p><?php _e( 'Apologies, but the page you requested could not be found. Perhaps searching will help.', 'blc' ); ?></p>
				<?php //get_search_form(); ?>
			</article><!-- #post-0 -->

		</div><!-- #content -->
	</div><!-- #container -->
	<script type="text/javascript">
		// focus on search field after it has loaded
		//document.getElementById('s') && document.getElementById('s').focus();
	</script>

<?php get_footer(); ?>