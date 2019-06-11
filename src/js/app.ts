declare var require: any;
require('../css/main.css');

import Game from './game';

class App {
	private _game: Game;

	constructor(game: Game) {
		this._game = game;
	}

	public setup(): void {
		// Any setup that is required that only runs once before game loads goes here
		document.addEventListener('keydown', (e) => {this.keyboardInput(e, "keydown")});
		document.addEventListener('keyup', (e) => {this.keyboardInput(e, "keyup")});
		this.gameLoop();
	}

	private gameLoop(): void {
		requestAnimationFrame(this.gameLoop.bind(this));

		this._game.render();
	}

	private keyboardInput(event: KeyboardEvent, type: string) {
		// PRESS LEFT ARROW OR 'A' KEY
		if (event.keyCode == 37 || event.keyCode == 65) {
		   console.log("[🠘] " + type);
		}
		// PRESS UP ARROW OR 'W' KEY
		else if (event.keyCode == 38 || event.keyCode == 87) {
			console.log("[🠙] " + type);
		}
		// PRESS RIGHT ARROW OR 'D' KEY
		else if (event.keyCode == 39 || event.keyCode == 68 ) {
			console.log("[🠚] " + type);
		}
		// PRESS DOWN ARROW OR 'S' KEY
		else if (event.keyCode == 40 || event.keyCode == 83 ) {
			console.log("[🠛] " + type);
		}
		// PRESS SPACE BAR
		else if (event.keyCode == 32) {
			console.log("[_] " + type);
		}
	 }
}

window.onload = () => {
	let app = new App(new Game());

	app.setup();
}