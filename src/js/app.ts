declare var require: any;
require('../css/main.css');

/////////including images///////////////
function importAll(r:any) {
	let imgs:any = {};
	r.keys().map((item: string, index:number) => { imgs[item.replace('./', '')] = r(item); });
	return imgs;
  }
  
const images: object = importAll(require.context('../assets/imgs', false, /\.(png|jpe?g|svg)$/));
////////////////////////////////////////

import Game from './game';

class App {
	private _game: Game;

	constructor(game: Game) {
		this._game = game;
	}

	public setup(): void {
		// Any setup that is required that only runs once before game loads goes here
		this.gameLoop();
	}

	private gameLoop(): void {
		requestAnimationFrame(this.gameLoop.bind(this));
		this._game.getInput();
		this._game.render();
	}
}

window.onload = () => {
	let app = new App(new Game(images));

	app.setup();
}