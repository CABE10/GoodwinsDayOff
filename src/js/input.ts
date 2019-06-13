export default class Input {

	public mouseInput(event: MouseEvent){
		let x: number = event.x;
		let y: number = event.y;
	 
		console.log('x:' + x + ' y:' + y + ", " + event.type);
	}

	//something to test: while event.repeat == true/false
	public keyboardInput(event: KeyboardEvent) {
		// PRESS LEFT ARROW OR 'A' KEY
		if (event.keyCode == 37 || event.keyCode == 65) {
		   console.log("[🠘] " + event.type);
		}
		// PRESS UP ARROW OR 'W' KEY
		else if (event.keyCode == 38 || event.keyCode == 87) {
			console.log("[🠙] " + event.type);
		}
		// PRESS RIGHT ARROW OR 'D' KEY
		else if (event.keyCode == 39 || event.keyCode == 68 ) {
			console.log("[🠚] " + event.type);
		}
		// PRESS DOWN ARROW OR 'S' KEY
		else if (event.keyCode == 40 || event.keyCode == 83 ) {
			console.log("[🠛] " + event.type);
		}
		// PRESS SPACE BAR
		else if (event.keyCode == 32) {
			console.log("[_] " + event.type);
		}
	}

	public setCursor(){
		let canvas = document.createElement("canvas");
		canvas.width = 30;
		canvas.height = 30;
		let ctx = canvas.getContext("2d");
		ctx.fillStyle = "#000000";
		ctx.font = "30px FontAwesome";
		ctx.fillStyle = "White";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillText("\uf05b", 12, 12);
		let dataURL = canvas.toDataURL('image/png');
		document.body.style.cursor = 'url(' + dataURL + '), auto';
		//console.log('url(' + dataURL + '), auto');
	}
}