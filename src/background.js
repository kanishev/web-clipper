let token = "";
let contextMenu = {
  id: "Weje",
  title: "Weje Clipper",
  contexts: ["image", "selection"],
};

chrome.storage.local.get().then(function (storage) {
  if (storage.token) {
    token = storage.token;
    chrome.contextMenus.create(contextMenu);
  }
});

chrome.contextMenus.onClicked.addListener(function (target) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { target, token });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.pinnerStatus) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        pinnerStatus: request.pinnerStatus,
      });
    });
  } else if (request == "getToken") {
    sendResponse(token);
  }
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
      chrome.action.enable();
      chrome.contextMenus.create(contextMenu);
      token = request.token;
      chrome.storage.local.set({ token });
      sendResponse({ message: "Token has been recievedd" });
    }
  }
  return true;
});
