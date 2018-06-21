
class particle {

	constructor(type, coords) {
		this.Game = require('../game')
		this.type = type;
		this.id = '_' + Math.random().toString(36).substr(2, 9);
		this.coords = coords;
	}

	draw() {
		this.Game.ctx.fillStyle = this.color;
		this.Game.ctx.beginPath();
		this.Game.ctx.arc(this.coords.x, this.coords.y, this.size, 0, 2 * Math.PI);
		this.Game.ctx.stroke();
	}

	die() {
		for(let i in this.Game.props)
			if(this.Game.props[i].id == this.id)
				this.Game.props.splice(i, 1);

		console.log(this.type + ' died');
	}

}

module.exports = particle;