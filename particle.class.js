module.exports = class particle {

	constructor(type, sprite, size, direction, coords, speed, lifespan) {
		this.type = type;
		this.id = '_' + Math.random().toString(36).substr(2, 9);
		this.sprite = sprite;
		this.size = size;
		this.direction = direction;
		this.coords = coords;
		this.speed = speed;
		this.lifespan = lifespan;
		this.lifetime = 0;
	}

	move(coords) {

	}

}