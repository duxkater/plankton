const particle = require('./particle.class');

class plankton extends particle {

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
		this.lifetime = 0;
	}

	divide() {

		let p = new plankton({
			x: this.coords.x,
			y: this.coords.y
		});

		console.log('plankton born');
		Game.props.push(p);

	}

	grow() {
		if (this.lifetime >= 1000)
			this.size = 2;
		if (this.lifetime >= 2000)
			this.size = 3;
		if (this.lifetime >= 3000)
			this.size = 4;
	}

	move() {

		this.lifetime++;

		this.grow();

		if (this.lifespan == this.lifetime)
			this.die();

		// move
		if ((Math.floor(Math.random() * 50) == 0)) {
			let selectedOperatorx = Math.floor(Math.random() * Game.operators.length);
			let selectedOperatory = Math.floor(Math.random() * Game.operators.length);
			if (Math.floor(Math.random() * 2) == 0)
				this.coords.x = Game.operators[selectedOperatorx].method(this.coords.x, this.speed);
			if (Math.floor(Math.random() * 2) == 0)
				this.coords.y = Game.operators[selectedOperatory].method(this.coords.y, this.speed);
			// divide
		} else {
			if ((Math.floor(Math.random() * 2000) == 0))
				this.divide();
		}

	}

}

module.exports = plankton;