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
chrome.storage.sync.get('enabled',val => {
  if (val.enabled === '' ||loaded == true) return;
  loaded = true
  load("production.min.js");
  load("showdown.js");
});
