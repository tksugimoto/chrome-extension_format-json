
chrome.browserAction.onClicked.addListener(() => {
	chrome.tabs.executeScript({
		file: "formatJson.js"
	});
});
