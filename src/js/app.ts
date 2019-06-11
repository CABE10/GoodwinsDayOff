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
		document.addEventListener('keydown', this.keyboardInput);
		this.gameLoop();
	}

	private gameLoop(): void {
		requestAnimationFrame(this.gameLoop.bind(this));

		this._game.render();
	}

	private keyboardInput(event: KeyboardEvent) {
		// PRESS LEFT ARROW OR 'A' KEY
		if (event.keyCode == 37 || event.keyCode == 65) {
		   console.log("LEFT ARROW OR 'A' KEY");
		}
		// PRESS UP ARROW OR 'W' KEY
		else if (event.keyCode == 38 || event.keyCode == 87) {
			console.log("UP ARROW OR 'W' KEY");
		}
		// PRESS RIGHT ARROW OR 'D' KEY
		else if (event.keyCode == 39 || event.keyCode == 68 ) {
			console.log("RIGHT ARROW OR 'D' KEY");
		}
		// PRESS DOWN ARROW OR 'S' KEY
		else if (event.keyCode == 40 || event.keyCode == 83 ) {
			console.log("DOWN ARROW OR 'S' KEY");
		}
	 }
}

window.onload = () => {
	let app = new App(new Game());

	app.setup();
}