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
	let elm = document.createElement("script")
	elm.src = chrome.runtime.getURL("/" + file)
	document.body.appendChild(elm)
};
chrome.storage.sync.get('enabled', val => {
	if (val.enabled === '' || loaded == true) return;
	loaded = true
	load("production.min.js");
	load("showdown.js");
	const p = document.createElement("center");
	const p2 = document.createElement("center");
	const bouton = document.createElement("button");
	const bouton2 = document.createElement("button");
	const titre = document.createElement("strong");
	const soustitre = document.createElement("small");
	const br = document.createElement("br");
	const battleform = document.getElementsByClassName('battleform')[0];
	bouton.id = "rtb";
	bouton.className = "button mainmenu";
	//p2.className = "cancel buttonbar";
	bouton.name = "rtb";
	bouton2.name = "send";
	bouton2.type = "submit";
	bouton2.value = "/cancelSearch";
	bouton2.innerText = "Cancel";
	bouton.setAttribute("onclick","ConsoleRoom.prototype.customCommands['rtb'](null,document.getElementsByName('format')[0].value);");
	titre.innerText = "Battle!";
	soustitre.innerText = "with a randomized team";

	bouton.appendChild(titre);
	bouton.appendChild(br);
	bouton.appendChild(soustitre);
	p.appendChild(bouton);
	p2.appendChild(bouton2)
	battleform.appendChild(p);
	battleform.appendChild(p2);
});
