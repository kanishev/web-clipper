chrome.action.disable();

let contextMenu = {
  id: "Weje",
  title: "Weje Clipper",
  contexts: ["all"],
};

chrome.contextMenus.onClicked.addListener(function (target) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(target);
    chrome.tabs.sendMessage(tabs[0].id, "message", function () {
      console.log("sent");
    });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.jwt) {
    console.log("Token ::: ", request.jwt);
    chrome.action.enable();
    chrome.contextMenus.create(contextMenu);

    sendResponse({
      success: true,
      message: "Clipper is open now",
    });
  }
});
