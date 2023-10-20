module.exports = class particle {

	constructor(type, coords) {
		
		this.type = type;
		this.id = '_' + Math.random().toString(36).substr(2, 9);
		this.coords = coords;
		this.lifetime = 0;
		
	}

	draw() {

		Game.ctx.fillStyle = this.color;
		Game.ctx.font = this.size + "px Arial";
		Game.ctx.fillText(this.selectedCharacter, this.coords.x, this.coords.y);

	}

	distSquared(pt1, pt2) {
		var diffX = pt1.x - pt2.x;
		var diffY = pt1.y - pt2.y;
		return (diffX*diffX+diffY*diffY);
	}

	findNearest(findType = false) {

		let nearestDist = null;
		let nearest = null;

		for(let i in Game.props) {
			let point = Game.props[i];
			
			if (point.id == this.id)
				continue;
			
			if (findType && point.type != findType)
				continue;

			let pointDist = this.distSquared(this.coords, point.coords);
			if (!nearestDist || pointDist < nearestDist) {
				nearestDist = pointDist;
				nearest = point;
			}
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
	}

	moveToTarget() {
		let targetCoords = this.target.coords;
		let newCoords = this.coords;
		newCoords.x = (this.coords.x < targetCoords.x) ? this.coords.x + this.speed : this.coords.x - this.speed;
		newCoords.y = (this.coords.y < targetCoords.y) ? this.coords.y + this.speed : this.coords.y - this.speed;
		this.coords = newCoords;
	}

	turn() {

		this.lifetime++;

		if (this.lifespan <= this.lifetime)
			this.die();

	}

}