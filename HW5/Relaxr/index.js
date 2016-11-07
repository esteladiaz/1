$(document).ready(function() {
	// prevent link from opening
	$('a').click(function(event) {
		event.preventDefault();
	});

	// expand read more text
	$('.readmore').click(function() {
		$('p').slideDown();
		$('.readmore').hide();
		$('readless').show();
	})

	// hide readmore, readless action
	$('readless').click(function() {
		$('#show-this-on-click').slideUp();
		$('readless').hide();
		$('readmore').show();
	})

	// learn more
	$('.learnmore').click(function() {
		$('#learnmoretext').slideDown();
		$('.learnmore').hide();
	})
})