window.onload = function(){
	var div = document.getElementById("show");
	div.style.backgroundColor='red';
	div.style.position="relative";
	div.style.width='100px';
	div.style.height='100px';
	div.innerHTML = "this is a block";
	div.onmouseover = function(){
		div.style.backgroundColor = 'darkcyan';
	}
	div.onmouseleave = function(){
		div.style.backgroundColor = 'red';
	}

	var link = document.getElementById("link");
	link.onmouseover = function(){
		link.style.border = 'solid';
		link.style.borderColor = "black";
		link.style.borderWidth = '1px';
	}
	link.onmouseleave = function(){
		link.style.border = 'none';
	}
}