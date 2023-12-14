const particle = require('./particle.class');

module.exports = class amoeba extends particle {

	constructor(coords) {

		if (!coords) {
			coords = {
				x: Math.floor(Math.random() * document.getElementById('canvas').width) + 1,
				y: Math.floor(Math.random() * document.getElementById('canvas').height) + 1
			}
		}

		super('amoeba', coords);
		this.size = 10;
		this.color = '#e6e6e6';
		this.selectedCharacter = "◌";
		this.speed = 2;
		this.lifespan = 50000;
		this.foodState = 2000;
		this.foodNeeded = 2000;
		this.health = 2000;
		this.target = false;
	}

	grow() {
		this.size = this.size + 5;
		this.nutritionalValue = 1000 * this.size;
	}

	isHungry() {
		return this.foodState < this.foodNeeded;
	}

	eat(target) {
		this.foodState += target.nutritionalValue;
		this.size += target.size;
		this.target.die();
		this.target = false;
	}

	divide() {
		Game.props.push(new amoeba({
			x: this.coords.x,
			y: this.coords.y
		}));
	}

	turn() {

		super.turn();
		this.foodState--;

		if (this.isHungry() && !this.target) {
				this.target = this.findNearest('plankton');
		}
		else {
			if (this.target) {
				if (this.isInRadius(this.target)) {
					this.eat(this.target);
				}
				else {
					this.moveToTarget();
				}
			}
			else {
				if ((Math.floor(Math.random() * 1500) == 0) && Game.props.length < 100)
					this.divide();
				else
					this.idle();
			}
			
		}

		if(this.foodState <= 0)
			this.health--;

		if(this.health <= 0)
			this.die();

	}

}