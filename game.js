const particle = require('./particle.class');
const plankton = require('./plankton.class');

var Game = {};

Game.canvas = document.getElementById('canvas');
Game.ctx = Game.canvas.getContext('2d');
Game.props = [];
Game.canvas.width = 1500;
Game.canvas.height = 500;
Game.lastRender = 0;

Game.init = function() {

	for (let i = 0; i < 5; i++) {
		let p = new plankton();
		Game.props.push(p);
	}
	
	window.requestAnimationFrame(Game.loop)

}

Game.update = function(progress) {
	for(let i in Game.props)
		Game.props[i].move();
}

Game.draw = function() {

	Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height);

	for(let i in Game.props)
		Game.props[i].draw();

}

Game.loop = function(timestamp) {
	
	let progress = timestamp - Game.lastRender;

	Game.update(progress);
	Game.draw();

	Game.lastRender = timestamp;
	// window.requestAnimationFrame(Game.loop);

}

module.exports = Game;