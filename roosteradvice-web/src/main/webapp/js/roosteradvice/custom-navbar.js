/**
 * Load the requested page in the page-content
 * 
 * @param page
 */
navigateTo = function(page) {
	$("#page-content").load(page + ".html");
};

/**
 * Change active item
 */
$('.nav li a').not('.dropdown-toggle').click(function(e) {

	$('.nav li').removeClass('active');

	var $parent = $(this).parent();
	if (!$parent.hasClass('active')) {
		$parent.addClass('active');
	}
	e.preventDefault();
});