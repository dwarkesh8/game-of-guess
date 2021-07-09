$(document).ready(function(){
	$("#loader").fadeOut(1000);
	$("#main").fadeIn(1000);
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
});