module.exports = class particle {

	constructor(type, coords) {
		this.type = type;
		this.id = '_' + Math.random().toString(36).substr(2, 9);
		this.coords = coords;
	}

	draw() {
		Game.ctx.fillStyle = this.color;
		Game.ctx.beginPath();
		Game.ctx.arc(this.coords.x, this.coords.y, this.size, 0, 2 * Math.PI);
		Game.ctx.stroke();
	}

	die() {
		for(let i in Game.props)
			if(Game.props[i].id == this.id)
				Game.props.splice(i, 1);

		console.log(this.type + ' died');
	}

}