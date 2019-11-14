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
		this.size = 1;
		this.color = '#FF0000';
		this.speed = 5;
		this.lifespan = 5000;
		this.nutritionalValue = 1000;

	}

	divide() {

		Game.props.push(new plankton({
			x: this.coords.x,
			y: this.coords.y
		}));

		console.log('plankton born');

	}

	grow() {
		if (this.lifetime >= 1000)
			this.size = 2;
		if (this.lifetime >= 2000)
			this.size = 3;
		if (this.lifetime >= 3000)
			this.size = 4;
	}

	turn() {

		super.turn();
		this.grow();
		
		if ((Math.floor(Math.random() * 50) == 0)) {
			this.idle();
		} else {
			if ((Math.floor(Math.random() * 2000) == 0))
				this.divide();
		}

	}

}