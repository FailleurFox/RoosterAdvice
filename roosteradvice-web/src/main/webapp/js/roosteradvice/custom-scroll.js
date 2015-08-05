/**
 * Moves the header background on scroll and fixes the navbar if it's at the top
 * of the screen
 */
$(window).scroll(
		function() {
			// Move the header background
			var yPos = -($(window).scrollTop() / $('#header').data('speed'));
			var coords = '0 ' + yPos + 'px';
			// Move the background
			$('#header').css({
				backgroundPosition : coords
			});

			// Edit the navbar
			var scrollTop = $(document).scrollTop();
			// If the navbar is at the top of the screen
			if (scrollTop > $('#header').height() - $('.navbar').height()) {
				// Fix the navbar at the top
				$('.navbar').removeClass('navbar-static-top').addClass(
						'navbar-fixed-top');
				// add margin bottom to the header in order to replace the
				// navbar with blank space
				$('#header').css('margin-bottom', 0);
			} else {
				$('.navbar').removeClass('navbar-fixed-top').addClass(
						'navbar-static-top');
				$('#header').css('margin-bottom', -$('.navbar').height());
			}
		});
