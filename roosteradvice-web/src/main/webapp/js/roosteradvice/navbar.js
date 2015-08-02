$(document).scroll(
		function(e) {
			var scrollTop = $(document).scrollTop();
			if (scrollTop > $('#header').height() - $('.navbar').height()) {
				$('.navbar').removeClass('navbar-static-top').addClass(
						'navbar-fixed-top');
				$('#header').css('margin-bottom',
						$('.navbar').css('marginBottom'));
			} else {
				$('.navbar').removeClass('navbar-fixed-top').addClass(
						'navbar-static-top');
				$('#header').css('margin-bottom', -$('.navbar').height());
			}
		});