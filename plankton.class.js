const particle = require('./particle.class');

module.exports = class plankton extends particle {

	constructor(sprite, size, direction, coords, speed, lifespan, color, nutritionalValue) {
		super('vegetal', sprite, size, direction, coords, speed, lifespan);
		this.color = color;
		this.nutritionalValue = nutritionalValue;
	}

	divide() {
		
	}

}