jQuery(document).ready(function() {
	$('#whiteButton').css('background-color','white');
	$('#greyButton').css('background-color','grey');
	$('#greyButton').click(function() {
		console.log('background to grey')
		$('body').css({
			'background-color':'grey',
			'color':'white'
		});
	})
	$('#whiteButton').click(function() {
		console.log('background to white')
		$('body').css({
			'background-color':'white',
			'color':'black'
		});
		$('#whiteButton').css('background-color','white');
		$('#greyButton').css('background-color','grey');
	})
})