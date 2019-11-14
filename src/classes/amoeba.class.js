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
		this.size = 3;
		this.color = '#FF0000';
		this.speed = 2;
		this.lifespan = 50000;
		this.foodState = 3000;
		this.foodNeeded = 2000;
		this.health = 2000;
		this.target = false;
	}

	grow() {
		this.size++;
		this.nutritionalValue = 1000 * this.size;
	}

	isHungry() {
		return this.foodState < this.foodNeeded;
	}

	moveToTarget() {
		let targetCoords = this.target.coords;
		this.coords = targetCoords;
		this.eat(this.target);
	}

	eat(target) {
		this.foodState += target.nutritionalValue;
		this.size += target.size;
		this.target.die();
		this.target = false;
	}

	turn() {

		super.turn();
		this.foodState--;

		if(this.isHungry()) {
			if(this.target) {
				console.log('hungry');
				this.moveToTarget();
			}
			else {
				this.target = this.findNearest('plankton');
			}
		}
		else
			this.idle();

		if(this.foodState <= 0)
			this.health--;

		if(this.health <= 0)
			this.die();

	}

}