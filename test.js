window.onload = function(){
	/*
	$(".testdiv").width = "100$";
	$(".testdiv").height = "50px";
	$(".testdiv").backgroundColor = "green";
	*/
	console.log($(window).height());
	console.log($(window).scrollTop());
	console.log($(".infobar").offset().top);
	
	$("h1").fadeOut(1);
	$("h1").fadeIn(1000);
	
	$("img").slideUp(0);
	$("img").slideDown(1000);
	
	$(".infobar").fadeOut(10);
	window.onscroll = function(){
		if($(".infobar").offset().top <= $(window).height()+$(window).scrollTop())
			$(".infobar").fadeIn(1500);
	};
	var toolbar = document.getElementById("toolbar");
	toolbar.style.width="100%";
	toolbar.style.height="50px";
	toolbar.style.backgroundColor = "black";
	toolbar.style.lineHeight = '50px';
	var button1 = document.createElement("a");
	button1.innerHTML = "link1";
	button1.style.textDecoration = "none";
	button1.style.color = 'white';
	button1.style.margin = "0px";
	button1.onmouseover = function(){
		button1.style.border = 'solid';
		button1.style.borderColor = 'white';
		button1.style.borderWidth = '2px';
		button1.height = '100%';
		button1.width = '20%';
	}
	button1.onmouseleave = function(){
		button1.style.border = 'none';
	}
	var button2 = button1.cloneNode();
	button2.innerHTML = "link2";
	toolbar.appendChild(button1);
	toolbar.appendChild(button2);
}