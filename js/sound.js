$(document).ready(function(){
	var typingSound = document.getElementById('typingSound');
	typingSound.play();
	$(".game-button").on("click", function(){
		var clickSound = document.getElementById('clickSound');
		clickSound.play();
	});
});