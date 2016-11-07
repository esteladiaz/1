jQuery(document).ready(function() {
	$('#stopButton').click(function() {
		console.log('stop button clicked');
		$('div#stopLight').css('background-color','red');
		$('div#slowLight').css('background-color','black');
		$('div#goLight').css('background-color','black');
	})
	$('#slowButton').click(function() {
		console.log('slow button clicked');
		$('div#slowLight').css('background-color','yellow');
		$('div#stopLight').css('background-color','black');
		$('div#goLight').css('background-color','black');
	})
	$('#goButton').click(function() {
		console.log('go button clicked');
		$('div#goLight').css('background-color','green');
		$('div#stopLight').css('background-color','black');
		$('div#slowLight').css('background-color','black');
	})
})