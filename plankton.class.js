const particle = require('./particle.class');
const game = require('./game');

module.exports = class plankton extends particle {

	constructor() {
		if (!this.coords)
			var coords = {
				x: Math.floor(Math.random() * game.canvas.width) + 1,
				y: Math.floor(Math.random() * game.canvas.height) + 1
			}
		super('vegetal', coords);
		this.size = Math.floor(Math.random() * 4) + 1;
		this.color = '#9BCD9B';
		this.speed = 1;
		this.nutritionalValue = 12;
	}

	divide() {
		let p = new plankton('vegetal', {
			x: this.x,
			y: this.y
		});
		game.props.push(p);
	}

	move() {

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