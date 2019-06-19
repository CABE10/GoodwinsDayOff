import FPS from './fps';
import Input from './input';
import Map from './map';
import Player from './player';

export default class Game {
	private canvas: HTMLCanvasElement;
	private ctx: CanvasRenderingContext2D;
	private height: number = window.innerHeight;
	private width: number = window.innerWidth;
	private fps: FPS;
	private input: Input;
	private map: Map;
	private player:Player;
	private image:HTMLImageElement;
	private imageHead:HTMLImageElement;
	private countX:number = 0;
	private countY:number = 0;

	// resources: 
	// https://opengameart.org/content/platformer-sprites
	// https://opengameart.org/content/classic-hero
	// https://opengameart.org/content/micro-character-bases-basics
	//
	// algorithms: (npm)
	// https://www.npmjs.com/package/astar-typescript
	// https://www.npmjs.com/package/random-dungeon-generator

	constructor(images:any) {
		this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.ctx = this.canvas.getContext("2d");

		this.ctx.imageSmoothingEnabled = false;

		this.input = new Input();
		document.addEventListener('keydown', (e) => {this.input.keyboardInput(e, this.input)});
		document.addEventListener('keyup', (e) => {this.input.keyboardInput(e, this.input)});
		document.addEventListener("mousedown", (e) => {this.input.mouseInput(e, this.input)}, true);

		this.fps = new FPS(this.ctx, this.width - 30, 40);
		this.input.setCursor();
		this.map = new Map(this.ctx).genMap();
		this.player = new Player(images, this.ctx);
	}

	public render(): void {
		this.clearScreen();
		this.fps.update();
		this.map.update(this.input);
		this.player.draw(this.input);
        this.input.KeyCodes = [];
	}

	public clearScreen(): void {
		this.ctx.clearRect(0, 0, this.width, this.height);//clear old rendered content globally
	}

	public getInput(): void {
	}
}