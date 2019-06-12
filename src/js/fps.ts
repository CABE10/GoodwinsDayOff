export default class FPS {
	private ctx: CanvasRenderingContext2D;
	private x: number;
    private y: number;
    private width: number;
    private size: number;

	//fps vars
	private fps: number = 0;
	private lastCalledTime: number;
    private lastDisplay:number;
    public showFPS: boolean;

	constructor(context:CanvasRenderingContext2D, x:number, y:number, fontSize:number = 20, showFPS:boolean = true) {
        this.ctx = context;
        this.x = x;
        this.y = y;
        this.showFPS = showFPS;
        this.size = fontSize;
    }

    public clearFps():void {
        this.ctx.clearRect(this.x - this.width, this.y - this.size, this.x, this.size + 10);
    }

	public calcFps(): void{
		 let delta = (performance.now() - this.lastCalledTime)/1000;
		 this.lastCalledTime = performance.now();
		 if (!this.lastDisplay || new Date().getTime() - 1000 > this.lastDisplay){
			this.fps = 1/delta || 0;
			this.lastDisplay = new Date().getTime();
		 }
		 if (this.fps !== 0)
		 	this.displayFPS();
	}

	private displayFPS(){
        if (!this.showFPS) return;
		this.ctx.fillStyle = "White";
		this.ctx.font      = "normal " + this.size + "pt Consolas";
        this.ctx.textAlign = "right";
        let text = this.fps.toFixed(0) + " fps";
        this.width = this.ctx.measureText(text).width;
        this.ctx.fillText(text, this.x, this.y);
	}
}