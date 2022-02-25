let clientData = {
  uid: null,
  apiKey: null,
};

let contextMenu = {
  id: "Weje",
  title: "Weje Clipper",
  contexts: ["image", "selection"],
};

chrome.storage.local.get().then(function (storage) {
  if (storage.clientData) {
    clientData = storage.clientData;
    chrome.contextMenus.create(contextMenu);
  }
});

chrome.contextMenus.onClicked.addListener(function (target) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { target, clientData });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.content) {
    fetch("https://clipper.stage.weje.io/push", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.content),
    })
      .catch(function(error) {
        console.error("Error:", error);
      });
  }
  if (request == "getCurrentUrl") {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, "getCurrentUrl");
    });
  }

  if (request == "getPinnerStatus") {
    chrome.storage.local.get().then((store) => {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          pinnerStatus: store.clientData
            ? store.pinnerStatus
            : { text: false, image: false },
        });
      });
    });
  }

  if (request.pinnerStatus) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        pinnerStatus: request.pinnerStatus,
      });
    });
  }

  if (request == "getClientData") {
    sendResponse(clientData);
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
    } else if (request.apiKey && request.uid) {
      chrome.action.enable();
      chrome.contextMenus.create(contextMenu);
      clientData.apiKey = request.apiKey;
      clientData.uid = request.uid;
      chrome.storage.local.set({ clientData });
    }
  }
  return true;
});
