window.onload = function(){
	$(".layer1 .toolbar a").fadeOut(0);
	$(".layer1 .toolbar a").fadeIn(1000);
	$(".layer1 .toolbar p").slideUp(0);
	$(".layer1 .toolbar p").slideDown(1000);
	$(".layer1 .toolbar .cover").fadeOut(0);
	self.setTimeout(function() {
		$(".layer1 .toolbar .cover").fadeIn(1500);
	}, 500);
}