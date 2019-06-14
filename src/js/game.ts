import FPS from './fps';
import Input from './input';
import Map from './map';
export default class Game {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private height: number = window.innerHeight;
	private width: number = window.innerWidth;
	private fps: FPS;
	private input: Input;
	private map: Map;

	// resources: 
	// https://opengameart.org/content/platformer-sprites
	// https://opengameart.org/content/classic-hero
	// https://opengameart.org/content/micro-character-bases-basics
	//
	// algorithms: (npm)
	// https://www.npmjs.com/package/astar-typescript
	// https://www.npmjs.com/package/random-dungeon-generator

	constructor() {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext("2d");

		this.input = new Input();
		document.addEventListener('keydown', this.input.keyboardInput);
		document.addEventListener('keyup', this.input.keyboardInput);
		document.addEventListener("mousedown", (e) => {this.input.mouseInput(e, this.input)}, true);

		this.fps = new FPS(this.ctx, this.width - 30, 40);
		this.input.setCursor();
		this.map = new Map(this.ctx).genMap();
	}

	public render(): void {
		this.ctx.clearRect(0, 0, this.width, this.height);//clear old rendered content globally
		this.fps.clearFps();
		this.fps.calcFps();
		this.map.displayMap();
		this.map.colorTile(this.input.ClickCoords);
	}
}