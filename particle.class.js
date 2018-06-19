const game = require('./game');

module.exports = class particle {

	constructor(type, coords) {
		this.type = type;
		this.id = '_' + Math.random().toString(36).substr(2, 9);
		this.coords = coords;
	}

	draw() {
		game.ctx.fillStyle = this.color;
		game.ctx.beginPath();
		game.ctx.arc(this.coords.x, this.coords.y, this.size, 0, 2 * Math.PI);
		game.ctx.stroke();
	}

}