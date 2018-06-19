const particle = require('./particle.class');
const plankton = require('./plankton.class');

var Game = {
	canvas: document.getElementById('canvas'),
	ctx: this.canvas.getContext('2d'),
	props: []
};

Game.canvas.width = 1500;
Game.canvas.height = 500;

Game.init = function() {

	for (let i = 0; i < 5; i++) {
		let p = new plankton();
		game.props.push(p);
	}
	
	window.requestAnimationFrame(Game.loop)

}

Game.update = function(progress) {
	for(let i in game.props)
		game.props[i].move();
}

Game.draw = function() {

	game.ctx.clearRect(0, 0, game.canvas.width, game.canvas.height);

	for(let i in game.props)
		game.props[i].draw();

}

Game.loop = function(timestamp) {
	
	let progress = timestamp - lastRender;

	update(progress);
	Game.draw();

	lastRender = timestamp;
	window.requestAnimationFrame(Game.loop);

}

module.exports = Game;