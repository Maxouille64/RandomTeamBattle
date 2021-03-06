var backgroundPage;
var theButton = document.querySelector("button");

function updateButton(onOrOff){
    theButton.innerHTML = onOrOff ? "Disable" : "Enable";
    theButton.className = onOrOff ? "button button3" : "button button1";
}

function toggleButton(){
    backgroundPage.isExtensionOn = !backgroundPage.isExtensionOn;
    updateButton(backgroundPage.isExtensionOn);
    console.log(backgroundPage.isExtensionOn)
}

chrome.runtime.getBackgroundPage(function(bgPage) {
    backgroundPage = bgPage;
    updateButton(bgPage.isExtensionOn);
    theButton.onclick = toggleButton;
    theButton.style.display = "";
    document.getElementById("br1").style.display = "";
    document.getElementById("br1").style.display = "";
});

//the rest of your code just needs to check backgroundPage.isExtensionOn
//to see if the extension is on or not.
