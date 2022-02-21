import { setPinnerCoords, togglePinner, createPostData } from "./pinner";
import { getBase64Image, setPostData } from "./utils";
import "./alert";

let selectedElement = null;
chrome.runtime.sendMessage("getPinnerStatus");

chrome.runtime.onMessage.addListener(function (message) {
  if (message.pinnerStatus) {
    let { text, image } = message.pinnerStatus;
    togglePinner(message.pinnerStatus);

    if (image) {
      document.addEventListener("mousemove", showImagePinner);
    } else if (text) {
      document.addEventListener("selectionchange", showTextPinner);
    } else {
      document.removeEventListener("selectionchange", showTextPinner);
      document.removeEventListener("mousemove", showImagePinner);
    }
  }

  if (message.target && message.target.mediaType == "image") {
    getBase64Image(message.target.srcUrl, (path) => {
      const postData = {
        data: [],
      };
      postData.token = message.token;
      const item = {};
      item.type = "image";
      item.base64 = path;
      item.url = message.target.srcUrl;

      postData.data.push(item);
      setPostData(postData);
    });
  } else if (message.target && message.target.selectionText) {
    const postData = {
      data: [],
    };
    const item = {};
    postData.token = message.token;
    item.type = "html";
    item.html = selectedElement.outerHTML;
    item.text = selectedElement.innerText;

    postData.data.push(item);
    setPostData(postData);
  }
});

function showTextPinner() {
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
  }

  if (selection.anchorNode.id == "wejePinner") {
    chrome.runtime.sendMessage("getToken", function (token) {
      createPostData(selectedElement, selectedElement, token);
    });
  }
  setPinnerCoords(selection, "HTML");
}

function showImagePinner(e) {
  if (e.target.nodeName == "IMG") {
    selectedElement = e.target;
    setPinnerCoords(e, "IMAGE");
  }
}
