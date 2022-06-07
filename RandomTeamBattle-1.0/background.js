var isExtensionOn = true;  //this will be changed by popup.js directly.
// Subscribe to onVisited event, so that injectSite() is called once at every pageload.

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
   if (changeInfo.status == 'complete') {
      console.log("COMPLETE")
         chrome.tabs.sendMessage(tab.id,{action:isExtensionOn});
   }
});
