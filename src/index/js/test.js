function showInfobar(){
	if($(".infobar").offset().top <= $(window).height()+$(window).scrollTop())
		$(".infobar").fadeIn(1500);
}

window.onload = function(){
	console.log($(window).height());
	console.log($(window).scrollTop());
	console.log($(".infobar").offset().top);
	
	$("h1").fadeOut(0);
	$("h1").fadeIn(1000);
	
	$("img").slideUp(0);
	$("img").slideDown(1000);
	
	$(".infobar").fadeOut(0);
	
	window.setTimeout(function(){
		showInfobar();
		window.onscroll = showInfobar;
	}, 1000);
}