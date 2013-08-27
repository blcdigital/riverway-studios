<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content
 * after.  Calls sidebar-footer.php for bottom widgets.
 *
 * @package WordPress
 * @subpackage black_label_creative
 * @since black label creative 1.0
 */
?>
	<footer id="footer" role="contentinfo">
		<section class="socialLinks">
			<h4>follow us</h4>
			<ul>
				<li><a href="http://www.facebook.com/pages/Riverway-Studios/174545145921555" title="">facebook</a></li>
				<li><a class="twitter" href="https://twitter.com/riverwaystudios" title="">twitter</a></li>
			</ul>
		</section>

		<section class="contactInfo">
			<h4 class="access">Contact Us</h4>
			<p>07760 160638 // <a href="mailto:mail@riverwaystudios.co.uk" title="Contact us by email">mail@riverwaystudios.co.uk</a></p>
		</section>

		<p class="copyright">&copy; 2011 Riverway Studios <span>Recording &amp; rehearsal studio serving Essex and Hertfordshire</span></p>
	</footer><!-- #footer -->
</div><!-- #wrapper -->

<script src="<?php bloginfo( 'template_url' ); ?>/js/jquery-latest.min.js"></script>
<script src="<?php bloginfo( 'template_url' ); ?>/js/jquery.easing.1.3.js"></script>
<script src="<?php bloginfo( 'template_url' ); ?>/js/jquery.hero.player.js"></script>
<script src="<?php bloginfo( 'template_url' ); ?>/js/jquery.mousewheel-3.0.4.pack.js"></script>
<script src="<?php bloginfo( 'template_url' ); ?>/js/jquery.fancybox-1.3.4.pack.js"></script>
<script src="<?php bloginfo( 'template_url' ); ?>/js/mediaelement-and-player.js"></script>
<script src="<?php bloginfo( 'template_url' ); ?>/js/rws.js"></script>

<script src="http://www.google-analytics.com/urchin.js"></script>
<script>
	_uacct = "UA-1627709-2";
	urchinTracker();
</script>

<?php
	/* Always have wp_footer() just before the closing </body>
	 * tag of your theme, or you will break many plugins, which
	 * generally use this hook to reference JavaScript files.
	 */
	wp_footer();
?>
</body>
</html>