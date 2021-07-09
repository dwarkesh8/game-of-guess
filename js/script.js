$(document).ready(function(){
	$("#loader").fadeOut(1000);
	$("#main").fadeIn(1000);
	setCookie('totalAttempts',0,1);
	$("#next").on("click", function(){
		var playerName = $("input#playerName").val();
		if (playerName.length > 0 && playerName != '' && playerName != null) {
			$("#screen1").attr('hidden',true);
			$("#screen2").attr('hidden',false);
			$("#printPlayerName").text('Hi '+playerName);
			$("#next").attr('hidden',true);
			$("#start").attr('hidden',false);
			setTimeout(function(){
				var typingSound = document.getElementById('typingSound');
				typingSound.play();
			},200);
		}
		else {
			$("input#playerName").focus();
		}
	});
	$(".game-button").on("click", function(){
		var clickSound = document.getElementById('clickSound');
		clickSound.play();
	});
	$("#start").on("click", function(){
		var secreteNumber = Math.floor(Math.random()*100);
		setCookie('secreteNumber',secreteNumber,1);
		$("#loader").fadeIn(1000);
		$("#main").fadeOut(1000);

		setTimeout(function(){
			$("#loader").fadeOut(1000);
			$("#main").fadeIn(1000);

			$("#screen1").attr('hidden',true);
			$("#screen2").attr('hidden',true);
			$("#screen3").attr('hidden',false);

			$("#next").attr('hidden',true);
			$("#start").attr('hidden',true);
			$("#submitNumber").attr('hidden',false);
		}, 3000);
	});
	$("#submitNumber").on("click", function(){
		var userGuessed = $("input#answer").val();
		if (userGuessed != '' && userGuessed.length > 0 && userGuessed != null && userGuessed > 0) {
			var attempts = parseInt(getCookie('totalAttempts'));
			attempts++;
			setCookie('totalAttempts',attempts,1);
			var secreteNumber = parseInt(getCookie('secreteNumber'));
			if (secreteNumber == userGuessed) {
				$("#response").text('Wohoo! Correct Guess! Total attempts:'+ getCookie('totalAttempts'));
				$("#gifImage").attr('src','images/correct.gif');
				$("#next").attr('hidden',true);
				$("#start").attr('hidden',true);
				$("#submitNumber").attr('hidden',true);
				$("#restartGame").attr('hidden',false);
				setCookie('secreteNumber','',-1);
			}
			else if(secreteNumber > userGuessed){
				$("#response").text('Oops! Your guess is too small!');
			}
			else {
				$("#response").text('Oops! Your guess is too big!');
			}
		}
		else {
			$("input#answer").focus();
		}
	});
	$("#restartGame").on("click", function(){
		window.location = 'index.html';
	});
});