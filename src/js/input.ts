export class Input {

    public KeyCodes:Array<number>;
    public ClickCoords:ClickCodes;

    constructor(){
        this.ClickCoords = new ClickCodes();
        var that = this;
    }

	public mouseInput(event: MouseEvent, that:Input){
        that.ClickCoords.X = event !== null? event.x || 0 : 0;
        that.ClickCoords.Y = event !== null? event.y || 0 : 0;
        console.log('x:' + event.x + ' y:' + event.y + ", " + event.type);
        console.log("inner", that.ClickCoords);
	}

	//something to test: while event.repeat == true/false
	public keyboardInput(event: KeyboardEvent) {
		// PRESS LEFT ARROW OR 'A' KEY
		if (Input.LEFT.indexOf(event.keyCode) !== -1) {
           console.log("[🠘] " + event.type);
           this.KeyCodes.push(event.keyCode);
		}
		// PRESS UP ARROW OR 'W' KEY
		if (Input.UP.indexOf(event.keyCode) !== -1) {
			console.log("[🠙] " + event.type);
            this.KeyCodes.push(event.keyCode);
		}
		// PRESS RIGHT ARROW OR 'D' KEY
		if (Input.RIGHT.indexOf(event.keyCode) !== -1) {
			console.log("[🠚] " + event.type);
            this.KeyCodes.push(event.keyCode);
		}
		// PRESS DOWN ARROW OR 'S' KEY
		if (Input.DOWN.indexOf(event.keyCode) !== -1) {
			console.log("[🠛] " + event.type);
            this.KeyCodes.push(event.keyCode);
		}
		// PRESS SPACE BAR
		if (event.keyCode == Input.SPACE) {
			console.log("[_] " + event.type);
            this.KeyCodes.push(event.keyCode);
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
	}
}

export namespace Input {
    export const LEFT:Array<number>  = [37, 65];
    export const UP:Array<number>    = [38, 87];
    export const RIGHT:Array<number> = [39, 68];
    export const DOWN:Array<number>  = [40, 83];
    export const SPACE:number  = 32;
}

export class ClickCodes{
    public X:number;
    public Y:number;
    constructor(x:number = 0, y:number = 0) { 
        this.X = x;
        this.Y = y;
    }
}

export default Input;