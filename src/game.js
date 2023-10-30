const plankton = require('./classes/plankton.class');
const amoeba = require('./classes/amoeba.class');

Game = {};
Game.isPaused = false;
Game.canvas = document.getElementById('canvas');
Game.ctx = Game.canvas.getContext('2d');
Game.props = [];
Game.canvas.width = window.innerWidth;
Game.canvas.height = window.innerHeight;

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

	for (let i = 0; i < 10; i++) {
		let item = new plankton();
		item.setCharacter();
		this.props.push(item);
	}

	for(let i = 0; i < 5; i++)
		this.props.push(new amoeba());

	requestAnimationFrame(this.loop);

}

Game.update = function(progress) {

	for (let i in this.props)
		this.props[i].turn();

}

Game.draw = function() {

	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	Game.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
	Game.ctx.fillStyle = "#000000";
	Game.ctx.fill();

	Game.ctx.fillStyle = '#FFFFFF';
	Game.ctx.font = "10px Arial";
	Game.ctx.fillText(Game.props.length + ' props', 20, 20);
	Game.ctx.fillText(Game.props.filter((el) => el.type == 'amoeba').length + ' amoebas', 20, 30);
	Game.ctx.fillText(Game.props.filter((el) => el.type == 'plankton').length + ' planktons', 20, 40);

	for (let i in this.props) {
		this.props[i].draw();
	}
		

}

Game.loop = function(timestamp) {

	if (Game.isPaused) {
		return true;
	}

	let progress = timestamp - this.lastRender;

	Game.update(progress);
	Game.draw();

	this.lastRender = timestamp;
	requestAnimationFrame(Game.loop);

}

document.addEventListener('keydown', (event) => {
	if (event.code == 32)
		Game.isPaused = !Game.isPaused;
}, false);

module.exports = Game;