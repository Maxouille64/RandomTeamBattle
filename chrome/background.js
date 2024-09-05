chrome.runtime.onMessage.addListener(
    function(arg, sender, onSuccess) {
        console.debug([arg.url, arg.init]);
        fetch(arg.url, arg.init)
            .then(response => response.text())
            .then(responseText => onSuccess(responseText))
        return true;  // Will respond asynchronously.
    }
);
