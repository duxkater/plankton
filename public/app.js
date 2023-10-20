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

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\nGame.init();\n\n//# sourceURL=webpack:///./src/aquarium.js?");

/***/ }),

/***/ "./src/classes/amoeba.class.js":
/*!*************************************!*\
  !*** ./src/classes/amoeba.class.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const particle = __webpack_require__(/*! ./particle.class */ \"./src/classes/particle.class.js\");\n\nmodule.exports = class amoeba extends particle {\n\n\tconstructor(coords) {\n\n\t\tif (!coords) {\n\t\t\tcoords = {\n\t\t\t\tx: Math.floor(Math.random() * document.getElementById('canvas').width) + 1,\n\t\t\t\ty: Math.floor(Math.random() * document.getElementById('canvas').height) + 1\n\t\t\t}\n\t\t}\n\n\t\tsuper('amoeba', coords);\n\t\tthis.size = 10;\n\t\tthis.color = '#e6e6e6';\n\t\tthis.selectedCharacter = \"◌\";\n\t\tthis.speed = 1;\n\t\tthis.lifespan = 50000;\n\t\tthis.foodState = 3000;\n\t\tthis.foodNeeded = 2000;\n\t\tthis.health = 2000;\n\t\tthis.target = false;\n\t}\n\n\tgrow() {\n\t\tthis.size = this.size + 5;\n\t\tthis.nutritionalValue = 1000 * this.size;\n\t}\n\n\tisHungry() {\n\t\treturn this.foodState < this.foodNeeded;\n\t}\n\n\teat(target) {\n\t\tthis.foodState += target.nutritionalValue;\n\t\tthis.size += target.size;\n\t\tthis.target.die();\n\t\tthis.target = false;\n\t}\n\n\tdivide() {\n\t\tGame.props.push(new amoeba({\n\t\t\tx: this.coords.x,\n\t\t\ty: this.coords.y\n\t\t}));\n\t}\n\n\tturn() {\n\n\t\tsuper.turn();\n\t\tthis.foodState--;\n\n\t\tif (this.isHungry() && !this.target) {\n\t\t\t\tthis.target = this.findNearest('plankton');\n\t\t}\n\t\telse {\n\t\t\tif (this.target) {\n\t\t\t\tif (this.target.coords.x == this.coords.x && this.target.coords.y == this.coords.y) {\n\t\t\t\t\tthis.eat(this.target);\n\t\t\t\t}\n\t\t\t\telse {\n\t\t\t\t\tthis.moveToTarget();\n\t\t\t\t}\n\t\t\t}\n\t\t\telse {\n\t\t\t\tif ((Math.floor(Math.random() * 1500) == 0))\n\t\t\t\t\tthis.divide();\n\t\t\t\telse\n\t\t\t\t\tthis.idle();\n\t\t\t}\n\t\t\t\n\t\t}\n\n\t\tif(this.foodState <= 0)\n\t\t\tthis.health--;\n\n\t\tif(this.health <= 0)\n\t\t\tthis.die();\n\n\t}\n\n}\n\n//# sourceURL=webpack:///./src/classes/amoeba.class.js?");

/***/ }),

/***/ "./src/classes/particle.class.js":
/*!***************************************!*\
  !*** ./src/classes/particle.class.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = class particle {\n\n\tconstructor(type, coords) {\n\t\t\n\t\tthis.type = type;\n\t\tthis.id = '_' + Math.random().toString(36).substr(2, 9);\n\t\tthis.coords = coords;\n\t\tthis.lifetime = 0;\n\t\t\n\t}\n\n\tdraw() {\n\n\t\tGame.ctx.fillStyle = this.color;\n\t\tGame.ctx.font = this.size + \"px Arial\";\n\t\tGame.ctx.fillText(this.selectedCharacter, this.coords.x, this.coords.y);\n\n\t}\n\n\tdistSquared(pt1, pt2) {\n\t\tvar diffX = pt1.x - pt2.x;\n\t\tvar diffY = pt1.y - pt2.y;\n\t\treturn (diffX*diffX+diffY*diffY);\n\t}\n\n\tfindNearest(findType = false) {\n\n\t\tlet nearestDist = null;\n\t\tlet nearest = null;\n\n\t\tfor(let i in Game.props) {\n\t\t\tlet point = Game.props[i];\n\t\t\t\n\t\t\tif (point.id == this.id)\n\t\t\t\tcontinue;\n\t\t\t\n\t\t\tif (findType && point.type != findType)\n\t\t\t\tcontinue;\n\n\t\t\tlet pointDist = this.distSquared(this.coords, point.coords);\n\t\t\tif (!nearestDist || pointDist < nearestDist) {\n\t\t\t\tnearestDist = pointDist;\n\t\t\t\tnearest = point;\n\t\t\t}\n\t\t}\n\n\t\treturn nearest;\n\t}\n\n\tidle() {\n\t\tlet selectedOperatorx = Math.floor(Math.random() * Game.operators.length);\n\t\tlet selectedOperatory = Math.floor(Math.random() * Game.operators.length);\n\t\tif (Math.floor(Math.random() * 2) == 0)\n\t\t\tthis.coords.x = Game.operators[selectedOperatorx].method(this.coords.x, this.speed);\n\t\tif (Math.floor(Math.random() * 2) == 0)\n\t\t\tthis.coords.y = Game.operators[selectedOperatory].method(this.coords.y, this.speed);\n\t}\n\n\tdie() {\n\t\tfor (let i in Game.props)\n\t\t\tif (Game.props[i].id == this.id)\n\t\t\t\tGame.props.splice(i, 1);\n\t}\n\n\tmoveToTarget() {\n\t\tlet targetCoords = this.target.coords;\n\t\tlet newCoords = this.coords;\n\t\tnewCoords.x = (this.coords.x < targetCoords.x) ? this.coords.x + this.speed : this.coords.x - this.speed;\n\t\tnewCoords.y = (this.coords.y < targetCoords.y) ? this.coords.y + this.speed : this.coords.y - this.speed;\n\t\tthis.coords = newCoords;\n\t}\n\n\tturn() {\n\n\t\tthis.lifetime++;\n\n\t\tif (this.lifespan <= this.lifetime)\n\t\t\tthis.die();\n\n\t}\n\n}\n\n//# sourceURL=webpack:///./src/classes/particle.class.js?");

/***/ }),

/***/ "./src/classes/plankton.class.js":
/*!***************************************!*\
  !*** ./src/classes/plankton.class.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const particle = __webpack_require__(/*! ./particle.class */ \"./src/classes/particle.class.js\");\n\nmodule.exports = class plankton extends particle {\n\n\tconstructor(coords) {\n\n\t\tif (!coords) {\n\t\t\tcoords = {\n\t\t\t\tx: Math.floor(Math.random() * document.getElementById('canvas').width) + 1,\n\t\t\t\ty: Math.floor(Math.random() * document.getElementById('canvas').height) + 1\n\t\t\t}\n\t\t}\n\n\t\tsuper('plankton', coords);\n\t\tthis.size = 10;\n\t\tthis.color = '#008000';\n\t\tthis.characters = ['°', '*', 'o', '.'];\n\t\tthis.selectedCharacter = '';\n\t\tthis.speed = 5;\n\t\tthis.lifespan = 5000;\n\t\tthis.nutritionalValue = 200;\n\n\t}\n\n\tsetCharacter() {\n\t\tthis.selectedCharacter = this.characters[(Math.floor(Math.random() * this.characters.length))];\n\t}\n\n\tdivide() {\n\t\tlet newItem = new plankton({\n\t\t\tx: this.coords.x,\n\t\t\ty: this.coords.y\n\t\t});\n\t\tnewItem.setCharacter();\n\t\tGame.props.push(newItem);\n\t}\n\n\tgrow() {\n\t\tif (this.lifetime == 1000) {\n\t\t\tthis.size = 12;\n\t\t\tthis.nutritionalValue = this.nutritionalValue * this.size;\n\t\t}\n\t\tif (this.lifetime == 2000) {\n\t\t\tthis.size = 15;\n\t\t\tthis.nutritionalValue = this.nutritionalValue * this.size;\n\t\t}\n\t\tif (this.lifetime == 3000) {\n\t\t\tthis.size = 18;\n\t\t\tthis.nutritionalValue = this.nutritionalValue * this.size;\n\t\t}\n\t}\n\n\tturn() {\n\n\t\tsuper.turn();\n\t\tthis.grow();\n\t\t\n\t\tif ((Math.floor(Math.random() * 50) == 0)) {\n\t\t\tthis.idle();\n\t\t} else {\n\t\t\tif ((Math.floor(Math.random() * 800) == 0)) {\n\t\t\t\tthis.divide();\n\t\t\t}\n\t\t\t\t\n\t\t}\n\n\t}\n\n}\n\n//# sourceURL=webpack:///./src/classes/plankton.class.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const plankton = __webpack_require__(/*! ./classes/plankton.class */ \"./src/classes/plankton.class.js\");\nconst amoeba = __webpack_require__(/*! ./classes/amoeba.class */ \"./src/classes/amoeba.class.js\");\n\nGame = {};\nGame.canvas = document.getElementById('canvas');\nGame.ctx = Game.canvas.getContext('2d');\nGame.props = [];\nGame.canvas.width = window.innerWidth;\nGame.canvas.height = window.innerHeight;\n\nGame.operators = [{\n\tsign: \"+\",\n\tmethod: function(a, b) {\n\t\treturn a + b;\n\t}\n}, {\n\tsign: \"-\",\n\tmethod: function(a, b) {\n\t\treturn a - b;\n\t}\n}];\n\nGame.init = function() {\n\n\tfor (let i = 0; i < 10; i++) {\n\t\tlet item = new plankton();\n\t\titem.setCharacter();\n\t\tthis.props.push(item);\n\t}\n\n\tfor(let i = 0; i < 5; i++)\n\t\tthis.props.push(new amoeba());\n\n\trequestAnimationFrame(this.loop);\n\n}\n\nGame.update = function(progress) {\n\n\tfor (let i in this.props)\n\t\tthis.props[i].turn();\n\n}\n\nGame.draw = function() {\n\n\tthis.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n\tGame.ctx.rect(0, 0, this.canvas.width, this.canvas.height);\n\tGame.ctx.fillStyle = \"#000a26\";\n\tGame.ctx.fill();\n\n\tfor (let i in this.props) {\n\t\tthis.props[i].draw();\n\t}\n\t\t\n\n}\n\nGame.loop = function(timestamp) {\n\n\tlet progress = timestamp - this.lastRender;\n\n\tGame.update(progress);\n\tGame.draw();\n\n\tthis.lastRender = timestamp;\n\trequestAnimationFrame(Game.loop);\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ })

/******/ });