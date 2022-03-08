var clientData, contextMenu;

clientData = {
  uid: null,
  apiKey: null,
};

contextMenu = {
  id: "Weje",
  title: "Weje web clipper",
  contexts: ["all"],
};

chrome.storage.local.get().then(function (storage) {
  if (storage.clientData) {
    clientData = storage.clientData;
    chrome.contextMenus.create(contextMenu);
  }
});

chrome.contextMenus.onClicked.addListener(function (target) {
  chrome.tabs.query(
    {
      active: true,
      currentWindow: true,
    },
    function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        target: target,
        clientData: clientData,
      });
    }
  );
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let url =
    MODE == "development"
      ? "http://clipper.stage.weje.io/push"
      : "http://clipper.app.weje.io/push";
  if (request.content) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request.content),
    })["catch"](function (error) {
      console.error("Error:", error);
    });
  }
  if (request === "getExtesionId") {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { id: chrome.runtime.id });
      }
    );
  }
  if (request === "getCurrentUrl") {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          target: {
            linkUrl: "current",
          },
          clientData: clientData,
        });
      }
    );
  }
  if (request === "getPinnerStatus") {
    chrome.storage.local.get().then(function (store) {
      chrome.tabs.query(
        {
          active: true,
          currentWindow: true,
        },
        function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {
            clientData: clientData,
            pinnerStatus: store.clientData
              ? store.pinnerStatus
              : {
                  text: false,
                  image: false,
                },
          });
        }
      );
    });
  }
  if (request.pinnerStatus) {
    chrome.tabs.query(
      {
        active: true,
        currentWindow: true,
      },
      function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
          pinnerStatus: request.pinnerStatus,
        });
      }
    );
  }
});

chrome.runtime.onMessageExternal.addListener(function (
  request,
  sender,
  sendResponse
) {
  var version;
  if (request) {
    if (request.message && request.message === "version") {
      version = chrome.runtime.getManifest().version;
      sendResponse({
        version: version,
      });
    } else if (request.apiKey && request.uid) {
      chrome.action.enable();
      chrome.contextMenus.create(contextMenu);
      clientData.apiKey = request.apiKey;
      clientData.uid = request.uid;
      chrome.storage.local.set({
        clientData: clientData,
      });
    }
  }
  return true;
});
