/**
* RWS script
*
* @version	1.0
* @author	Jasal Vadgama
* @require	jquery 1.6.2+ - http://jquery.com/
*			jquery.easing.1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*			jquery.hero.player - http://blacklabelcreatve.com/
*			jquery.fancybox-1.3.4 - http://fancybox.net/
*			mediaelement-and-player - http://mediaelementjs.com/
* @license	GPL v3
**/

var rws = rws || {};

rws = function () {
	return {
		gallery: function (gallery) {
			var albumList = [],
				albumNav = $('<ul class="album-nav" />'),
				imageList, i, j, k;

			if ($(gallery).length < 1) {
				return;
			}

			// get list of images
			imageList = $(gallery).find('img');

			for (i = 0; i < imageList.length; i += 1) {
				if ($.inArray($(imageList[i]).attr('title'), albumList) === -1) {
					albumList.push($(imageList[i]).attr('title'));
				}

				$(imageList[i]).parent().attr('rel', $(imageList[i]).parent().attr('title').replace(/( |&)/g, '_'));
			}
			// sort list
			albumList = albumList.sort();

			// hide all but first ablum type
			$(gallery).find('img[title!="' + albumList[0] + '"]').parent().parent().hide();

			// create gallery nav
			for (j = 0; j < albumList.length; j += 1) {
				var albumItem = $('<li />'),
					albumLink = $('<a href="#" />').bind('click', function(e) {
						e.preventDefault();

						// swap images
						$(gallery).find('img').parent().parent().hide();
						$(gallery).find('img[title="' + $(this).attr('rel') + '"]').parent().parent().show(0);

						// swap classes
						$('#albumList .active').removeClass('active');
						$(this).addClass('active');
					}).attr('rel', albumList[j]).appendTo(albumItem).html(albumList[j]);

				albumItem.appendTo(albumNav);

				$('a[rel="' + albumList[j].replace(/( |&)/g, '_') + '"]').fancybox();
			}

			albumNav.find('a:first').addClass('active');
			albumNav.appendTo($('#albumList'));
		},

		voiceoverPlayer: function (player) {
			var voiceoverPlayer = new MediaElementPlayer(player, {
					audioWidth: 639
				}),
				voicePlaying = false;

			$('.voiceover-player img').bind('click.voicePlay', function() {
				if (voicePlaying) {
					voiceoverPlayer.pause();
					voicePlaying = false;
				} else {
					voiceoverPlayer.play();
					voicePlaying = true;
				}
			});
		},

		portfolioPlayer: function (player) {
			var genreList = [],
				genreListNav = $('<ul />'),
				trackList, i, j,
				audioPlayer, currentTrack = '';

			// show the player
			$('#portfolioPlayer').css('display', 'block');

			// make genre list
			trackList = $('#portfolioPlaylist').find('li');
			for (i = 0; i < trackList.length; i += 1) {
				if ($.inArray($(trackList[i]).attr('data-genre'), genreList) === -1) {
					genreList.push($(trackList[i]).attr('data-genre'));
				}
			}
			// sort list
			genreList = genreList.sort();

			// add genre list to page
			for (j = 0; j < genreList.length; j += 1) {
				var genreItem = $('<li />'),
					genreLink = $('<a href="#" />').bind('click', function(e) {
						e.preventDefault();

						// swap classes
						$('#portfolioPlayer .genre-list a.active').removeClass('active');
						$(this).addClass('active');

						// swap track
						$('#portfolioPlayer .playlist li').hide();

						$('#portfolioPlayer .playlist li[data-genre="' + $(this).attr('data-genre') + '"]').show();
					}).attr('data-genre', genreList[j]).html(genreList[j]).appendTo(genreItem);

				genreItem.appendTo(genreListNav);
			}
			genreListNav.appendTo($('#portfolioPlayer .genre-list'));

			// move the playlist to the centre section of the player
			$('#portfolioPlaylist ul').appendTo($('#portfolioPlayer .playlist'));

			// attach play events
			$('#portfolioPlayer .playlist a').bind('click', function (e) {
				e.preventDefault();

				if (currentTrack !== $(this).attr('href')) {
					if (audioPlayer) {
						audioPlayer.pause();
						audioPlayer.setSrc($(this).attr('href'));
						audioPlayer.play();
					} else {
						$('audio#audioPlayer').attr('src', $(this).attr('href')).show();
						audioPlayer = new MediaElementPlayer('#audioPlayer', {
							audioWidth: 630,
							success: function (player) {
								player.play();
							}
						});
					}

					$('#portfolioPlayer .now-playing').show().find('span').remove();
					$('<span><strong>Artist</strong> ' + $(this).attr('data-artist') + '</span><span><strong>Track</strong> ' + $(this).attr('data-track') + '</span>').appendTo($('#portfolioPlayer .now-playing'));

					currentTrack = $(this).attr('href');
				}
			});

			// remove the track list
			$('#portfolioPlaylist').remove();

			// select the first genre
			$('#portfolioPlayer .genre-list a:last').click();
		},

		starPlayer: function (player) {
			var starPlayer, currentTrack = '';

			$('#starSamples').show();

			$('#starSamples .playlist a').bind('click', function (e) {
				e.preventDefault();

				if (currentTrack !== $(this).attr('href')) {
					if (starPlayer) {
						starPlayer.pause();
						starPlayer.setSrc($(this).attr('href'));
						starPlayer.play();
					} else {
						$(player).attr('src', $(this).attr('href')).show();
						starPlayer = new MediaElementPlayer(player, {
							audioWidth: 440,
							success: function (player) {
								player.play();
							}
						});
					}

					$('#starSamples .now-playing').show().find('span').remove();
					$('<span><strong>Artist</strong> ' + $(this).attr('data-artist') + '</span><span><strong>Track</strong> ' + $(this).attr('data-track') + '</span>').appendTo($('#starSamples .now-playing'));

					currentTrack = $(this).attr('href');
				}
			});
		},

		pageGallery: function (trigger) {
			if ($(trigger).length < 1) {
				return;
			}

			// move gallery to aside and add rel
			$(trigger).appendTo($('aside.page-aside')).show().find('a').attr('rel', 'gallery');

			// init fancybox
			$(trigger).find('a[rel="gallery"]').fancybox();
		}
	};
}();

$(function() {
	// hero player
	$("#heroPlayer").hero({
		animateSpeed: 1000,
		autoScroll: true,
		circular: false,
		easing: "easeInOutCubic",
		scrollInterval: 5000,
		showControls: true,
		showNav: true
	});

	// gallery
	rws.gallery('#gallery');

	// media elements player - voiceover
	if ($('audio').length > 0) {
		if ($('audio#voiceoverPlayer').length > 0) {
			rws.voiceoverPlayer('#voiceoverPlayer');
		}
		if ($('audio#masteringPlayer').length > 0) {
			$('audio#masteringPlayer').mediaelementplayer({
				audioWidth: 440
			});
		}
		if ($('audio#starPlayer').length > 0) {
			rws.starPlayer('#starPlayer');
		}
	}
	if ($('#portfolioPlayer').length > 0) {
		rws.portfolioPlayer('#audioPlayer');
	}

	// make page gallery
	rws.pageGallery('#pageGallery');
});

$(window).bind('load', function() {
	// make sure the container is full height
	//$('#container').css('min-height', $('#sidebar').outerHeight() + 'px');
});