export default class Game {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private height: number = window.innerHeight;
	private width: number = window.innerWidth;

	//fps vars
	private fps: number = 0;
	private lastCalledTime: number;
	private lastDisplay:number;

	constructor() {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext("2d");
	}

	public render(): void {
		this.ctx.clearRect(0, 0, this.width, this.height);//clear old rendered content
		this.calcFps();
	}

	private calcFps(): void{
		 let delta = (performance.now() - this.lastCalledTime)/1000;
		 this.lastCalledTime = performance.now();
		 if (!this.lastDisplay || new Date().getTime() - 1000 > this.lastDisplay){
			this.fps = 1/delta || 0;
			this.lastDisplay = new Date().getTime();
		 }
		 if (this.fps !== 0)
		 	this.showFPS();
	}

	private showFPS(){
		this.ctx.fillStyle = "White";
        this.ctx.font      = "normal 20pt Consolas";
        this.ctx.fillText(this.fps.toFixed(0) + " fps", this.width - 110, 40);
	}

	public setup(){
		document.addEventListener('keydown', this.keyboardInput);
		document.addEventListener('keyup', this.keyboardInput);
		document.addEventListener("mousedown", this.mouseInput, false);
	}

	private mouseInput(event: MouseEvent){
		let x: number = event.x;
		let y: number = event.y;
	 
		console.log('x:' + x + ' y:' + y + ", " + event.type);
	}

	//something to test: while event.repeat == true/false
	private keyboardInput(event: KeyboardEvent) {
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
}