
chrome.browserAction.onClicked.addListener(tab => {
	chrome.tabs.executeScript({
		file: "formatJson.js"
	});
});
