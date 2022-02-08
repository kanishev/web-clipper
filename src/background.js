let contextMenu = {
  id: "bla",
  title: "bla",
  contexts: ["all"],
};

// const canvas = new OffscreenCanvas(16, 16);
// const context = canvas.getContext("2d");
// context.clearRect(0, 0, 16, 16);
// context.fillStyle = "#00FF00"; // Green
// context.fillRect(0, 0, 16, 16);
// const imageData = context.getImageData(0, 0, 16, 16);
// chrome.action.setIcon({ imageData: imageData }, () => {
//   console.log(chrome.action);
// });

chrome.contextMenus.create(contextMenu);

chrome.contextMenus.onClicked.addListener((target) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "message", function () {
      console.log("sent");
    });
  });
});

chrome.runtime.onMessageExternal.addListener(function (
  request,
  sender,
  sendResponse
) {
  console.log("HIIIII", request);
  console.log(sender);
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
});
