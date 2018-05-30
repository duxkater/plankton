#!C:\sftp\test node
'use strict';

const program = require('commander');
const particle = require('./particle.class');
const plankton = require('./plankton.class');

program
	.version('0.0.1')
	.option('-o, --option', 'option description')
	.parse(process.argv);

let items = [];

for (let i = 0; i < 5; i++) {
	let p = new plankton('a', 2, 0, {
		x: 20,
		y: 20
	}, 2, 10000, '#ff0000', '10');
	items.push(p);
}