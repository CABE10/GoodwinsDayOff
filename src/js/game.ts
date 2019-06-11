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
}