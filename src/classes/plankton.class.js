const particle = require('./particle.class');

class plankton extends particle {

	constructor(coords) {

		console.log(Game);

		if (!coords) {
			coords = {
				x: Math.floor(Math.random() * document.getElementById('canvas').width) + 1,
				y: Math.floor(Math.random() * document.getElementById('canvas').height) + 1
			}
		}

		super('plankton', coords);
		this.size = 1;
		this.color = '#9BCD9B';
		this.speed = 10;
		this.lifespan = 1200;
		this.lifetime = 0;
	}

	divide() {

		let p = new plankton({
			x: this.x,
			y: this.y
		});

		Game.props.push(p);

	}

	grow() {
		if(this.lifetime >= 1000)
			this.size = 2;
		if(this.lifetime >= 2000)
			this.size = 3;
		if(this.lifetime >= 3000)
			this.size = 4;
	}

	move() {

		this.lifetime++;

		this.grow();

		if(this.lifespan == this.lifetime)
			this.die();

		// move
		if ((Math.floor(Math.random() * 100) == 0)) {
			let selectedOperatorx = Math.floor(Math.random() * Game.operators.length);
			let selectedOperatory = Math.floor(Math.random() * Game.operators.length);
			this.coords.x = Game.operators[selectedOperatorx].method(this.coords.x, this.speed);
			this.coords.y = Game.operators[selectedOperatory].method(this.coords.y, this.speed);
		// divide
		} else {
			if ((Math.floor(Math.random() * 2000) == 0))
				this.divide();
		}

	}

}

module.exports = plankton;