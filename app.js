(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

const canvas = require('./canvas');
const particle = require('./particle.class');
const plankton = require('./plankton.class');

var lastRender = 0;

function init() {

	for (let i = 0; i < 5; i++) {
		let p = new plankton();
		canvas.props.push(p);
	}
	
	window.requestAnimationFrame(loop)

}

function update(progress) {
	for(let i in canvas.props)
		canvas.props[i].move();
}

function draw() {

	canvas.ctx.clearRect(0, 0, canvas.canvas.width, canvas.canvas.height);

	for(let i in canvas.props)
		canvas.props[i].draw();

}

function loop(timestamp) {
	
	let progress = timestamp - lastRender;

	update(progress);
	draw();

	lastRender = timestamp;
	window.requestAnimationFrame(loop);

}

init();
},{"./canvas":2,"./particle.class":3,"./plankton.class":4}],2:[function(require,module,exports){
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = 1500;
canvas.height = 500;

module.exports = {
	canvas: canvas,
	ctx: ctx,
	props: [],
}
},{}],3:[function(require,module,exports){
const canvas = require('./canvas');

module.exports = class particle {

	constructor(type, coords) {
		this.type = type;
		this.size = 2;
		this.id = '_' + Math.random().toString(36).substr(2, 9);
		this.coords = coords;
	}

	draw() {
		canvas.ctx.fillStyle = this.color;
		canvas.ctx.beginPath();
		canvas.ctx.arc(this.coords.x, this.coords.y, this.size, 0, 2 * Math.PI);
		canvas.ctx.stroke();
	}

}
},{"./canvas":2}],4:[function(require,module,exports){
const particle = require('./particle.class');
const canvas = require('./canvas');

module.exports = class plankton extends particle {

	constructor() {
		super('vegetal', {
			x: Math.floor(Math.random() * canvas.canvas.width) + 1,
			y: Math.floor(Math.random() * canvas.canvas.height) + 1
		});
		this.color = '#9BCD9B';
		this.speed = 1;
		this.nutritionalValue = 12;
	}

	divide() {
		let p = new plankton('vegetal', {
			x: this.x,
			y: this.y
		});
		canvas.props.push(p);
	}

	move() {

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
		}
		else {
			let isDividing = (Math.floor(Math.random() * 2000) == 0);
			if(isDividing) {
				this.divide();
			}
		}

	}

}
},{"./canvas":2,"./particle.class":3}]},{},[1,2,3,4]);
