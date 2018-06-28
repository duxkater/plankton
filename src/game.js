const plankton = require('./classes/plankton.class');

Game = {};
Game.plankton = plankton;
Game.canvas = document.getElementById('canvas');
Game.ctx = Game.canvas.getContext('2d');
Game.props = [];
Game.canvas.width = 1500;
Game.canvas.height = 500;
Game.lastRender = 0;

Game.operators = [{
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

Game.init = function() {

	for (let i = 0; i < 5; i++) {
		let p = new Game.plankton();
		Game.props.push(p);
	}

	requestAnimationFrame(Game.loop);

}

Game.update = function(progress) {

	for (var i in this.props)
		this.props[i].move();

}

Game.draw = function() {

	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

	for (var i in this.props)
		this.props[i].draw();

}

Game.loop = function(timestamp) {

	let progress = timestamp - this.lastRender;

	this.props = Game.props;

	Game.update(progress);
	Game.draw();

	this.lastRender = timestamp;
	requestAnimationFrame(Game.loop);

}

module.exports = Game;