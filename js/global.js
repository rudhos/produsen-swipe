$(document).ready(function() {

	$.material.init();
    $('.sidebar').slideAndSwipe();

	/*-----------------------------------/
	/*	TOP NAVIGATION AND LAYOUT
	/*----------------------------------
	var $body = $('body');
	var $overlay = $('.overlay');

	$('.btn-burger').on('click', function() {
		if(!$body.hasClass('sidebar-show')) {
			$body.addClass('sidebar-show');
			$overlay.fadeIn();
		} else {
			$body.removeClass('sidebar-show');
			$body.removeClass('layout-default'); 
			$overlay.fadeOut();
		}
	});
	$overlay.on('click', function() {
		$(this).fadeOut();
		$body.removeClass('sidebar-show');
	});
*/
});