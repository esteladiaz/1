jQuery(document).ready(function() {
	$('.shadow').toggle();

	$('.button').on('click', function() {
		$('.me').toggleClass('animation');
		console.log("click");
	})
})