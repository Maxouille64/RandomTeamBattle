// ==UserScript==
// @name     RTB
// @version  1.0.0
// @author   me
// @match    http://play.pokemonshowdown.com/*
// @match    https://play.pokemonshowdown.com/*
// @match    http://*.psim.us/*
// @match    https://*.psim.us/*
// ==/UserScript==

var loaded = false;

function load(file) {
	let s = document.createElement('script');
	s.src = chrome.runtime.getURL(file);
	s.onload = function() {
		this.remove();
	};
	(document.head || document.documentElement).appendChild(s);
};
chrome.storage.sync.get('enabled',val => {
	if (val.enabled === '') return;
	load("production.min.js");
	load("showdown.js");
});
