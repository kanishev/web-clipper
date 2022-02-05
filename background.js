let contextMenu = {
  id: "bla",
  title: "bla",
  contexts: ["all"],
};

chrome.contextMenus.create(contextMenu);

chrome.contextMenus.onClicked.addListener((target) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { greeting: "hello" },
      function (response) {
        console.log(response.farewell);
      }
    );
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
});
