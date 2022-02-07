let contextMenu = {
  id: "bla",
  title: "bla",
  contexts: ["all"],
};

chrome.contextMenus.create(contextMenu);

chrome.contextMenus.onClicked.addListener((target) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "message", function () {
      console.log("sent");
    });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("3", request.greeting);
  if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
});
