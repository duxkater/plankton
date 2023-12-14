const plankton = require('./classes/plankton.class');
const amoeba = require('./classes/amoeba.class');

Game = {};
Game.isPaused = false;
Game.canvas = document.getElementById('canvas');
Game.ctx = Game.canvas.getContext('2d');
Game.props = [];
Game.canvas.width = window.innerWidth;
Game.canvas.height = window.innerHeight;
Game.mousedown = false;

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

	for (let i = 0; i < 10; i++)
		this.props.push(new plankton());

	for(let i = 0; i < 5; i++)
		this.props.push(new amoeba());

	requestAnimationFrame(this.loop);

}

Game.update = function() {

	for (let i in this.props)
		this.props[i].turn();

}

document.addEventListener("keypress", function (event) {
	if (event.keyCode == 32) {
		event.preventDefault()
		Game.isPaused = !Game.isPaused;
		requestAnimationFrame(Game.loop);
	}
});

document.addEventListener("mouseup", function (event) {
	Game.props.push(new plankton(Game.getMousePos(event)));
});

Game.getMousePos = function (event) {
	var rect = Game.canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}

Game.draw = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	Game.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
	Game.ctx.fillStyle = "#000000";
	Game.ctx.fill();
	Game.drawUI();

	for (let i in this.props) {
		this.props[i].draw();
	}
}

Game.drawUI = function() {
	Game.ctx.fillStyle = '#FFFFFF';
	Game.ctx.font = "10px Arial";
	Game.ctx.fillText(Game.props.length + ' props', 20, 20);
	Game.ctx.fillText(Game.props.filter((el) => el.type == 'amoeba').length + ' amoebas', 20, 30);
	Game.ctx.fillText(Game.props.filter((el) => el.type == 'plankton').length + ' planktons', 20, 40);
}

Game.loop = function() {

	if (Game.isPaused) {
		return true;
	}

	Game.update();
	Game.draw();
	requestAnimationFrame(Game.loop);

}

module.exports = Game;