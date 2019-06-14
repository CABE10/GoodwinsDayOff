export class Input {

    public KeyCodes:Array<{key:Input.Type, type:Input.KeyboardEvent}>;
    public ClickCoords:ClickCodes;

    constructor(){
        this.ClickCoords = new ClickCodes();
        this.KeyCodes = new Array<{key:Input.Type, type:Input.KeyboardEvent}>();
    }

	public mouseInput(event: MouseEvent, that:Input){
        that.ClickCoords.X = event !== null? event.x || 0 : 0;
        that.ClickCoords.Y = event !== null? event.y || 0 : 0;
        console.log('x:' + event.x + ' y:' + event.y + ", " + event.type);
	}

	//something to test: while event.repeat == true/false
	public keyboardInput(event: KeyboardEvent, that:Input) {
		// PRESS LEFT ARROW OR 'A' KEY
		if (Input.Left.indexOf(event.keyCode) !== -1) {
           console.log("[🠘] " + event.type);
           that.KeyCodes.push({key:Input.Type.LEFT, type:(<any>Input.KeyboardEvent)[event.type.toUpperCase()]});
		}
		// PRESS UP ARROW OR 'W' KEY
		if (Input.Up.indexOf(event.keyCode) !== -1) {
			console.log("[🠙] " + event.type);
            that.KeyCodes.push({key:Input.Type.UP, type:(<any>Input.KeyboardEvent)[event.type.toUpperCase()]});
		}
		// PRESS RIGHT ARROW OR 'D' KEY
		if (Input.Right.indexOf(event.keyCode) !== -1) {
			console.log("[🠚] " + event.type);
            that.KeyCodes.push({key:Input.Type.RIGHT, type:(<any>Input.KeyboardEvent)[event.type.toUpperCase()]});
		}
		// PRESS DOWN ARROW OR 'S' KEY
		if (Input.Down.indexOf(event.keyCode) !== -1) {
			console.log("[🠛] " + event.type);
            that.KeyCodes.push({key:Input.Type.DOWN, type:(<any>Input.KeyboardEvent)[event.type.toUpperCase()]});
		}
		// PRESS SPACE BAR
		if (event.keyCode == Input.Space) {
			console.log("[_] " + event.type);
            that.KeyCodes.push({key:Input.Type.SPACE, type:(<any>Input.KeyboardEvent)[event.type.toUpperCase()]});
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
    export const Left:Array<number>  = [37, 65];
    export const Up:Array<number>    = [38, 87];
    export const Right:Array<number> = [39, 68];
    export const Down:Array<number>  = [40, 83];
    export const Space:number  = 32;
    export enum Type{
        LEFT,
        UP,
        RIGHT,
        DOWN,
        SPACE
    }
    export enum KeyboardEvent{
        KEYUP = "keyup",
        KEYDOWN = "keydown"
    }
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