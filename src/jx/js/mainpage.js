window.onload = function(){
	$(".layer1 .toolbar a").fadeOut(0);
	$(".layer1 .toolbar a").fadeIn(1000);
	$(".layer1 .toolbar p").slideUp(0);
	$(".layer1 .toolbar p").slideDown(1000);
	$(".layer1 .toolbar .cover").fadeOut(0);
	
	$(".layer2").fadeOut(0);
	self.setTimeout(function(){
		$(".layer2").fadeIn(1000);
	},0);
	self.setTimeout(function() {
		$(".layer1 .toolbar .cover").fadeIn(1500);
	}, 500);
	
	//$(".layer3 .model").css("height", "0px");
	
	$(".layer3").slideUp(0);
	$(".layer3 h1").fadeOut(0);
	self.setTimeout(function(){
		$(".layer3").slideDown(1000);
		$(".layer3 h1").fadeIn(2000);
	},1000);
	
	$(".layer3 .model").css("float", "left");
	$(".layer3 .model").slideUp(0);
	self.setTimeout(function(){
		$(".layer3 .jigou").slideDown(1000);
	}, 1500);
	self.setTimeout(function(){
		//$(".layer3 .shijue").animate({height: '400px'},1000);
		$(".layer3 .shijue").slideDown(1000);
	}, 2000);
	self.setTimeout(function(){
		//$(".layer3 .kongzhi").animate({height: '400px'},1000);
		$(".layer3 .kongzhi").slideDown(1000);
	}, 2500);
	self.setTimeout(function(){
		//$(".layer3 .donghua").animate({height: '400px'},1000);
		$(".layer3 .donghua").slideDown(1000);
	}, 3000);
	
	$(".achievement").slideUp(0);
	self.setTimeout(function(){
		$(".achievement").slideDown(1000);
	}, 4000);
	
	$(".events").slideUp(0);
	self.setTimeout(function(){
		$(".events").slideDown(1000);
	}, 5000);
	/*
	self.setTimeout(function(){
		$(".layer3 .model").css("float", "none");
	}, 4000);
	*/
}