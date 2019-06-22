var raycast = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

function drawScene(){
	var scene = new THREE.Scene();

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
	var material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0, 5, 0);
	scene.add(cube);
	
	var loader = new THREE.FontLoader();
	loader.load( './tools/threejs/fonts/helvetiker_regular.typeface.json', function ( font ) {
		var geometry = new THREE.TextGeometry( '这一部分正在开发哦', {
			font: font,
			size: 80,
			height: 5,
			curveSegments: 12,
			bevelEnabled: true,
			bevelThickness: 10,
			bevelSize: 8,
			bevelSegments: 5
		} );
	} );

	var lineGeo = new THREE.Geometry();
	var linemat = new THREE.LineBasicMaterial({color: 0x00ffff});
	lineGeo.vertices.push(new THREE.Vector3(-10, 0, 0));
	lineGeo.vertices.push(new THREE.Vector3(0, 10, 0));
	lineGeo.vertices.push(new THREE.Vector3(10, 0, 0));
	var line = new THREE.Line(lineGeo, linemat);
	scene.add(line);
	
	var planeGeo = new THREE.PlaneBufferGeometry(100, 100);
	var planeMat = new THREE.MeshBasicMaterial({color: 0x0000dd, side: THREE.DoubleSide});
	var plane = new THREE.Mesh(planeGeo, planeMat);
	plane.rotation.set(90, 0, 0);
	scene.add(plane);

	camera.position.set(0, 5, 10);
	//camera.lookAt(0, 0, 0);
	
	function onMouseMove( event ) {

		// 将鼠标位置归一化为设备坐标。x 和 y 方向的取值范围是 (-1 to +1)
		event = event || window.event;
		event.preventDefault();
		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
		
		//mouse.x = e.clientX * (event.clientX / window.innerWidth) - 1;
		//mouse.y = - e.clientY * (event.clientY / window.innerHeight) + 1;
	}
	
	window.addEventListener("mousemove", onMouseMove, false);
	window.onkeydown = function(event){
		event = event || window.event;
		console.log(event.keyCode);
		if(event.keyCode == 87)
			camera.position.y += 0.5;
		if(event.keyCode == 83)
			camera.position.y -= 0.5;
	}
	
	var animate = function () {

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
		 
		raycast.setFromCamera(mouse, camera);
		var intersects = raycast.intersectObjects(scene.children);
		for(var i=0;i<intersects.length;i++){
			if(intersects[i].object != plane)
				intersects[i].object.material.color.set(0xff0000);
		}
		
		renderer.render( scene, camera );
		window.requestAnimationFrame( animate );
	};

	animate();
}

window.onload = function(){
	drawScene();
}