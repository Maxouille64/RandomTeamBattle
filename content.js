console.log("TEST");

var loaded = false;

function load(file) {
    let elm = document.createElement("script")
    elm.src = chrome.extension.getURL("/" + file)
    document.body.appendChild(elm)
};

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
  if (msg.action == true &&loaded == false) {
      loaded = true
      alert("RTB activated :D")
      load("production.min.js")
      load("showdown.js")
  }
});
