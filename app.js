(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

const Game = require('./game');

Game.init();
},{"./game":2}],2:[function(require,module,exports){
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
},{"./particle.class":3,"./plankton.class":4}],3:[function(require,module,exports){
const Game = require('./game');

class particle {

	constructor(type, coords) {
		this.type = type;
		this.id = '_' + Math.random().toString(36).substr(2, 9);
		this.coords = coords;
	}

	draw() {
		Game.Game.ctx.fillStyle = this.color;
		Game.Game.ctx.beginPath();
		Game.Game.ctx.arc(this.coords.x, this.coords.y, this.size, 0, 2 * Math.PI);
		Game.Game.ctx.stroke();
	}

	die() {
		for(let i in Game.props)
			if(Game.Game.props[i].id == this.id)
				Game.Game.props.splice(i, 1);
	}

}

module.exports = particle;
},{"./game":2}],4:[function(require,module,exports){
const particle = require('./particle.class');
const Game = require('./game');

class plankton extends particle {

	constructor(coords) {

		if (!coords) {
			coords = {
				x: Math.floor(Math.random() * document.getElementById('canvas').width) + 1,
				y: Math.floor(Math.random() * document.getElementById('canvas').height) + 1
			}
		}

		super('vegetal', coords);
		this.size = Math.floor(Math.random() * 4) + 1;
		this.color = '#9BCD9B';
		this.speed = 1;
		this.lifespan = 12000;
	}

	divide() {

		let p = new plankton('vegetal', {
			x: this.x,
			y: this.y
		});

		Game.Game.props.push(p);

	}

	move() {

		if(this.lifespan == this.lifetime)
			this.die();

		let isMoving = (Math.floor(Math.random() * 2) == 0);

		if (isMoving) {

			let operators = [{
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

			let selectedOperatorx = Math.floor(Math.random() * operators.length);
			let selectedOperatory = Math.floor(Math.random() * operators.length);
			this.coords.x = operators[selectedOperatorx].method(this.coords.x, this.speed);
			this.coords.y = operators[selectedOperatory].method(this.coords.y, this.speed);
		} else {
			let isDividing = (Math.floor(Math.random() * 2000) == 0);
			if (isDividing) {
				this.divide();
			}
		}

	}

}

module.exports = plankton;
},{"./game":2,"./particle.class":3}]},{},[1,2,3,4]);
