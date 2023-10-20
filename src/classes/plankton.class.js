const particle = require('./particle.class');

module.exports = class plankton extends particle {

	constructor(coords) {

		if (!coords) {
			coords = {
				x: Math.floor(Math.random() * document.getElementById('canvas').width) + 1,
				y: Math.floor(Math.random() * document.getElementById('canvas').height) + 1
			}
		}

		super('plankton', coords);
		this.size = 10;
		this.color = '#008000';
		this.characters = ['°', '*', 'o', '.'];
		this.selectedCharacter = '';
		this.speed = 5;
		this.lifespan = 5000;
		this.nutritionalValue = 200;

	}

	setCharacter() {
		this.selectedCharacter = this.characters[(Math.floor(Math.random() * this.characters.length))];
	}

	divide() {
		let newItem = new plankton({
			x: this.coords.x,
			y: this.coords.y
		});
		newItem.setCharacter();
		Game.props.push(newItem);
	}

	grow() {
		if (this.lifetime == 1000) {
			this.size = 12;
			this.nutritionalValue = this.nutritionalValue * this.size;
		}
		if (this.lifetime == 2000) {
			this.size = 15;
			this.nutritionalValue = this.nutritionalValue * this.size;
		}
		if (this.lifetime == 3000) {
			this.size = 18;
			this.nutritionalValue = this.nutritionalValue * this.size;
		}
	}

	turn() {

		super.turn();
		this.grow();
		
		if ((Math.floor(Math.random() * 50) == 0)) {
			this.idle();
		} else {
			if ((Math.floor(Math.random() * 800) == 0)) {
				this.divide();
			}
				
		}

	}

}