let token = "";
chrome.action.disable();

let contextMenu = {
  id: "Weje",
  title: "Weje Clipper",
  contexts: ["all"],
};

chrome.contextMenus.onClicked.addListener(function (target) {
  generatePostData(target);
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, "message", function () {
      console.log("sent");
    });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.greeting === "hello") sendResponse({ farewell: "goodbye" });
});

chrome.runtime.onMessageExternal.addListener(function (
  request,
  sender,
  sendResponse
) {
  if (request) {
    if (request.message) {
      if (request.message == "version") {
        const version = chrome.runtime.getManifest().version;
        sendResponse({ version });
      }
    } else if (request.token) {
      console.log("TOKEN", request.token);
      token = request.token;
      chrome.action.enable();
      chrome.contextMenus.create(contextMenu);
      sendResponse({ message: "Token has been recieved" });
    }
  }
  return true;
});

function generatePostData(target) {
  const data = {};

  if (target.mediaType && target.mediaType == "image") {
    data.content = getBase64Image(target.srcUrl);
  } else if (target.selectionText) {
    data.content = target.selectionText;
  }
  data.token = token;

  console.log(data);
}

function getBase64Image(image) {
  return "imageUrl";
}
