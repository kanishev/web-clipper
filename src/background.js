let token = "";
let contextMenu = {
  id: "Weje",
  title: "Weje Clipper",
  contexts: ["image", "selection"],
};

// chrome.storage.local.get().then(function (storage) {
//   if (storage.token) {
//     token = storage.token;
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(tabs[0].id, { message: "authTrue" }, function () {
//         console.log("sent message");
//       });
//     });
//     chrome.contextMenus.create(contextMenu);
//   } else {
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//       chrome.tabs.sendMessage(
//         tabs[0].id,
//         { message: "authFalse" },
//         function () {
//           console.log("sent message");
//         }
//       );
//     });
//   }
// });

chrome.contextMenus.onClicked.addListener(function (target) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { target, token }, function () {
      console.log("sent target");
    });
  });
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.pinnerStatus) {
    console.log(request.pinnerStatus);
    sendResponse({ farewell: "goodbye" });
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
      chrome.storage.local.set({ token }, function () {
        console.log("Value is set to " + token);
      });
      sendResponse({ message: "Token has been recievedd" });
    }
  }
  return true;
});
