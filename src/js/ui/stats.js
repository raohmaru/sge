;(function (app) { 'use strict';

app.ui = app.ui || {};
var p;

(app.ui.Stats = function(el) {
	this._el = el;
	this._init();
}).prototype = p = new Object();

p._init = function(){
	this._$population = this._el.querySelector('.stats__population');
	this._$fps = this._el.querySelector('.stats__fps');
	app.core
		.on(app.cfg.event.SPRITE_ADDED, this._geneAdded.bind(this))
		.on(app.cfg.event.FRAME, this._onFrame.bind(this));
};

p._geneAdded = function(e){
	this._$population.textContent = app.core.spriteMgr.getSize();
};

p._onFrame = function(e){
	this._$fps.textContent = Math.round(app.core.beatMachine.currentFps * 100) / 100;
};

}(window.app || (window.app = {})));