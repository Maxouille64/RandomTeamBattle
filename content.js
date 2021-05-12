console.log("TEST");

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
   if (msg.action == true) {
      load("productio.min.js")
      load("showdown.js")
      alert("RTB activated :D")
   }
});

function load(file) {
    let elm = document.createElement("script")
    elm.src = chrome.extension.getURL("/" + file)
    document.body.appendChild(elm)
};
