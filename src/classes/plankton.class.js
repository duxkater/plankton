const particle = require('./particle.class');
const Game = require('./game');

module.exports = class plankton extends particle {

	constructor(coords) {

		if (!coords) {
			coords = {
				x: Math.floor(Math.random() * document.getElementById('canvas').width) + 1,
				y: Math.floor(Math.random() * document.getElementById('canvas').height) + 1
			}
		}

		super('vegetal', coords);
		this.size = Math.floor(Math.random() * 4) + 1;
		this.color = '#9BCD9B';
		this.speed = 1;
		this.lifespan = 12000;
	}

	divide() {

		let p = new plankton('vegetal', {
			x: this.x,
			y: this.y
		});

		Game.props.push(p);
		
	}

	move() {

		if(this.lifespan == this.lifetime)
			this.die();

		let isMoving = (Math.floor(Math.random() * 2) == 0);

		if (isMoving) {

			let operators = [{
				sign: "+",
				method: function(a, b) {
					return a + b;
				}
			}, {
				sign: "-",
				method: function(a, b) {
					return a - b;
				}
			}];

			let selectedOperatorx = Math.floor(Math.random() * operators.length);
			let selectedOperatory = Math.floor(Math.random() * operators.length);
			this.coords.x = operators[selectedOperatorx].method(this.coords.x, this.speed);
			this.coords.y = operators[selectedOperatory].method(this.coords.y, this.speed);
		} else {
			let isDividing = (Math.floor(Math.random() * 2000) == 0);
			if (isDividing) {
				this.divide();
			}
		}

	}

}