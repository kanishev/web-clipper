import {
  setPinnerCoords,
  togglePinner,
  createPostData,
  pinner,
} from "./pinner";
import { getBase64Image, setPostData } from "./utils";
import "./alert";

let selectedElement = null;
chrome.runtime.sendMessage("getPinnerStatus");

chrome.runtime.onMessage.addListener(function (message) {
  if (message == "getCurrentUrl") {
    console.log(window.location.href);
  }

  if (message.pinnerStatus) {
    let { text, image } = message.pinnerStatus;
    togglePinner(message.pinnerStatus);

    if (image) {
      document.addEventListener("mousemove", showImagePinner);
    } else {
      document.removeEventListener("mousemove", showImagePinner);
    }

    if (text) {
      document.addEventListener("selectionchange", showTextPinner);
    } else {
      document.removeEventListener("selectionchange", showTextPinner);
    }
  }

  if (message.target && message.target.mediaType == "image") {
    let { uid, apiKey } = message.clientData;
    getBase64Image(message.target.srcUrl, (path) => {
      const postData = {
        data: [],
      };
      postData.uid = uid;
      postData.apiKey = apiKey;
      postData.source = window.location.href;
      const item = {};
      item.type = "image";
      item.base64 = path;
      item.url = message.target.srcUrl;

      postData.data.push(item);
      setPostData(postData);
    });
  } else if (message.target && message.target.selectionText) {
    let { uid, apiKey } = message.clientData;
    const postData = {
      data: [],
    };
    const item = {};
    postData.uid = uid;
    postData.apiKey = apiKey;
    postData.source = window.location.href;
    item.type = "html";
    item.html = selectedElement.outerHTML;
    item.text = selectedElement.innerText;

    postData.data.push(item);
    setPostData(postData);
  }
});

function showTextPinner(e) {
  const selection = document.getSelection();

  if (!selection.isCollapsed) {
    selectedElement = document.createElement("div");

    for (let i = 0; i < selection.rangeCount; i++) {
      selectedElement.append(selection.getRangeAt(i).cloneContents());
      selection.getRangeAt(i).cloneContents();
    }

    for (let c = 0; c < selectedElement.children.length; c++) {
      selectedElement.children[c].removeAttribute("class");
    }

    setPinnerCoords(selection, "HTML");
  }
}

pinner.onclick = function () {
  chrome.runtime.sendMessage("getClientData", function (clientData) {
    createPostData(selectedElement, clientData);
  });
};

function showImagePinner(e) {
  if (e.target.nodeName == "IMG") {
    selectedElement = e.target;
    setPinnerCoords(e.target, "IMAGE");
  }
}
