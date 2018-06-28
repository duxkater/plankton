/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/aquarium.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/aquarium.js":
/*!*************************!*\
  !*** ./src/aquarium.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\r\nGame.init();\n\n//# sourceURL=webpack:///./src/aquarium.js?");

/***/ }),

/***/ "./src/classes/particle.class.js":
/*!***************************************!*\
  !*** ./src/classes/particle.class.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = class particle {\r\n\r\n\tconstructor(type, coords) {\r\n\t\tthis.type = type;\r\n\t\tthis.id = '_' + Math.random().toString(36).substr(2, 9);\r\n\t\tthis.coords = coords;\r\n\t}\r\n\r\n\tdraw() {\r\n\t\tGame.ctx.fillStyle = this.color;\r\n\t\tGame.ctx.beginPath();\r\n\t\tGame.ctx.arc(this.coords.x, this.coords.y, this.size, 0, 2 * Math.PI);\r\n\t\tGame.ctx.stroke();\r\n\t}\r\n\r\n\tdie() {\r\n\t\tfor(let i in Game.props)\r\n\t\t\tif(Game.props[i].id == this.id)\r\n\t\t\t\tGame.props.splice(i, 1);\r\n\r\n\t\tconsole.log(this.type + ' died');\r\n\t}\r\n\r\n}\n\n//# sourceURL=webpack:///./src/classes/particle.class.js?");

/***/ }),

/***/ "./src/classes/plankton.class.js":
/*!***************************************!*\
  !*** ./src/classes/plankton.class.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const particle = __webpack_require__(/*! ./particle.class */ \"./src/classes/particle.class.js\");\r\n\r\nclass plankton extends particle {\r\n\r\n\tconstructor(coords) {\r\n\r\n\t\tconsole.log(Game);\r\n\r\n\t\tif (!coords) {\r\n\t\t\tcoords = {\r\n\t\t\t\tx: Math.floor(Math.random() * document.getElementById('canvas').width) + 1,\r\n\t\t\t\ty: Math.floor(Math.random() * document.getElementById('canvas').height) + 1\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tsuper('plankton', coords);\r\n\t\tthis.size = 1;\r\n\t\tthis.color = '#9BCD9B';\r\n\t\tthis.speed = 10;\r\n\t\tthis.lifespan = 1200;\r\n\t\tthis.lifetime = 0;\r\n\t}\r\n\r\n\tdivide() {\r\n\r\n\t\tlet p = new plankton({\r\n\t\t\tx: this.x,\r\n\t\t\ty: this.y\r\n\t\t});\r\n\r\n\t\tGame.props.push(p);\r\n\r\n\t}\r\n\r\n\tgrow() {\r\n\t\tif(this.lifetime >= 1000)\r\n\t\t\tthis.size = 2;\r\n\t\tif(this.lifetime >= 2000)\r\n\t\t\tthis.size = 3;\r\n\t\tif(this.lifetime >= 3000)\r\n\t\t\tthis.size = 4;\r\n\t}\r\n\r\n\tmove() {\r\n\r\n\t\tthis.lifetime++;\r\n\r\n\t\tthis.grow();\r\n\r\n\t\tif(this.lifespan == this.lifetime)\r\n\t\t\tthis.die();\r\n\r\n\t\t// move\r\n\t\tif ((Math.floor(Math.random() * 100) == 0)) {\r\n\t\t\tlet selectedOperatorx = Math.floor(Math.random() * Game.operators.length);\r\n\t\t\tlet selectedOperatory = Math.floor(Math.random() * Game.operators.length);\r\n\t\t\tthis.coords.x = Game.operators[selectedOperatorx].method(this.coords.x, this.speed);\r\n\t\t\tthis.coords.y = Game.operators[selectedOperatory].method(this.coords.y, this.speed);\r\n\t\t// divide\r\n\t\t} else {\r\n\t\t\tif ((Math.floor(Math.random() * 2000) == 0))\r\n\t\t\t\tthis.divide();\r\n\t\t}\r\n\r\n\t}\r\n\r\n}\r\n\r\nmodule.exports = plankton;\n\n//# sourceURL=webpack:///./src/classes/plankton.class.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const plankton = __webpack_require__(/*! ./classes/plankton.class */ \"./src/classes/plankton.class.js\");\r\n\r\nGame = {};\r\nGame.plankton = plankton;\r\nGame.canvas = document.getElementById('canvas');\r\nGame.ctx = Game.canvas.getContext('2d');\r\nGame.props = [];\r\nGame.canvas.width = 1500;\r\nGame.canvas.height = 500;\r\nGame.lastRender = 0;\r\n\r\nGame.operators = [{\r\n\tsign: \"+\",\r\n\tmethod: function(a, b) {\r\n\t\treturn a + b;\r\n\t}\r\n}, {\r\n\tsign: \"-\",\r\n\tmethod: function(a, b) {\r\n\t\treturn a - b;\r\n\t}\r\n}];\r\n\r\nGame.init = function() {\r\n\r\n\tfor (let i = 0; i < 5; i++) {\r\n\t\tlet p = new Game.plankton();\r\n\t\tGame.props.push(p);\r\n\t}\r\n\r\n\trequestAnimationFrame(Game.loop);\r\n\r\n}\r\n\r\nGame.update = function(progress) {\r\n\r\n\tfor (var i in this.props)\r\n\t\tthis.props[i].move();\r\n\r\n}\r\n\r\nGame.draw = function() {\r\n\r\n\tthis.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n\r\n\tfor (var i in this.props)\r\n\t\tthis.props[i].draw();\r\n\r\n}\r\n\r\nGame.loop = function(timestamp) {\r\n\r\n\tlet progress = timestamp - this.lastRender;\r\n\r\n\tthis.props = Game.props;\r\n\r\n\tGame.update(progress);\r\n\tGame.draw();\r\n\r\n\tthis.lastRender = timestamp;\r\n\trequestAnimationFrame(Game.loop);\r\n\r\n}\r\n\r\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ })

/******/ });