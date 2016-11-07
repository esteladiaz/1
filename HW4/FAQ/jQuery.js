jQuery(document).ready(function() {
// hide all answers
	$('p#answer1').hide();
	$('p#answer2').hide();
	$('p#answer3').hide();
// functions to show and hide answers
	function showAnswer1() {
		$('p#answer1').slideToggle();
	}
	function showAnswer2() {
		$('p#answer2').slideToggle();
	}
	function showAnswer3() {
		$('p#answer3').slideToggle();
	}
// apply functions to show and hide answers
	$('h2#question1').click(showAnswer1);
	$('h2#question2').click(showAnswer2);
	$('h2#question3').click(showAnswer3);
})