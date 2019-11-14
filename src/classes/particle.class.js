module.exports = class particle {

	constructor(type, coords) {
		
		this.type = type;
		this.id = '_' + Math.random().toString(36).substr(2, 9);
		this.coords = coords;
		this.lifetime = 0;
		
	}

	draw() {

		Game.ctx.fillStyle = this.color;
		Game.ctx.beginPath();
		Game.ctx.arc(this.coords.x, this.coords.y, this.size, 0, 2 * Math.PI);
		Game.ctx.stroke();

	}

	distSquared(pt1, pt2) {
		var diffX = pt1.x - pt2.x;
		var diffY = pt1.y - pt2.y;
		return (diffX*diffX+diffY*diffY);
	}

	findNearest(type) {
		let nearest = Game.props[Game.props.length - 1];
		let nearestDist = this.distSquared(nearest.coords, this.coords);
		for(let i in Game.props) {
			let point = Game.props[i];
			if(point.type != type)
				continue;
			let dist = this.distSquared(this.coords, point.coords);
			if(dist < nearestDist)
				nearest = point;
		}
		return nearest;
	}

	idle() {
		let selectedOperatorx = Math.floor(Math.random() * Game.operators.length);
		let selectedOperatory = Math.floor(Math.random() * Game.operators.length);
		if (Math.floor(Math.random() * 2) == 0)
			this.coords.x = Game.operators[selectedOperatorx].method(this.coords.x, this.speed);
		if (Math.floor(Math.random() * 2) == 0)
			this.coords.y = Game.operators[selectedOperatory].method(this.coords.y, this.speed);
	}

	die() {

		for (let i in Game.props)
			if (Game.props[i].id == this.id)
				Game.props.splice(i, 1);

		console.log(this.type + ' died');

	}

	turn() {

		this.lifetime++;

		if (this.lifespan <= this.lifetime)
			this.die();

	}

}