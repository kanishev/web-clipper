import { pinner, setPinnerCoords, togglePinner } from "./pinner.js";
import { createPostData, findImageNode } from "./utils.js";
import "./alert.js";

var s = document.createElement("script");
s.src = chrome.runtime.getURL("injected.js");
s.onload = function () {
  this.remove();
};
document.head.append(s);

let selectedElement = null;
let selection = null;
let clientData = null;
let isImageFound = false;

chrome.runtime.sendMessage("getPinnerStatus");
chrome.runtime.sendMessage("getExtesionId");

chrome.runtime.onMessage.addListener(function (message) {
  var node, pinnerStatus;

  if (message.clientData) {
    clientData = message.clientData;
  }

  if (message.id) {
    setTimeout(() => {
      document.dispatchEvent(
        new CustomEvent("getExtensionId", { detail: message.id })
      );
    }, 1000);
  }

  if (message.pinnerStatus) {
    pinnerStatus = message.pinnerStatus;
    togglePinner(message.pinnerStatus);
    document.onmouseup = function () {
      if (selectedElement) {
        return Array.from(selectedElement.children).forEach(function (el) {
          if (el.querySelector("img")) {
            isImageFound = true;
          }
        });
      }
    };
    if (pinnerStatus.image) {
      document.addEventListener("mousemove", showImagePinner);
    } else {
      document.removeEventListener("mousemove", showImagePinner);
    }
    if (pinnerStatus.text) {
      document.addEventListener("selectionchange", showTextPinner);
    } else {
      document.removeEventListener("selectionchange", showTextPinner);
    }
  }
  if (message.target && message.target.linkUrl) {
    node = message.target;
    createPostData(clientData, [node]);
    return;
  }
  if (message.target) {
    node = message.target;
    if (!findImageNode(selectedElement, clientData)) {
      if (node && node.mediaType === "image") {
        createPostData(clientData, [node]);
      } else if (node && node.selectionText) {
        createPostData(clientData, [selectedElement]);
      }
    }
  }
});

function showTextPinner() {
  var c, i;
  selection = document.getSelection();
  if (!selection.isCollapsed) {
    selectedElement = document.createElement("div");
    i = 0;
    while (i < selection.rangeCount) {
      selectedElement.append(selection.getRangeAt(i).cloneContents());
      i++;
    }
    c = 0;
    while (c < selectedElement.children.length) {
      selectedElement.children[c].removeAttribute("class");
      c++;
    }
    setPinnerCoords(selection, "HTML");
    document.addEventListener("scroll", scrollHandler);
  } else {
    setPinnerCoords(null, "EMPTY");
    selectedElement = null;
    selection = null;
    isImageFound = false;
    document.removeEventListener("scroll", scrollHandler);
  }
}

function showImagePinner(e) {
  if (e.target.nodeName === "IMG") {
    if (!isImageFound) {
      selectedElement = e.target;
      setPinnerCoords(e.target, "IMAGE");
    } else {
      setPinnerCoords(e.target, "IMAGE");
    }
  } else if (
    !e.target.classList.contains("clipper") &&
    selectedElement &&
    selectedElement.nodeName === "IMG"
  ) {
    setPinnerCoords(null, "EMPTY");
    if (selection) {
      selectedElement = document.createElement("div");
      selectedElement.append(selection.getRangeAt(0).cloneContents());
    }
  }
  if (
    !e.target.classList.contains("clipper") &&
    selectedElement &&
    selectedElement.nodeName !== "IMG"
  ) {
    setPinnerCoords(selection, "HTML");
  }
}

pinner.onmousedown = function () {
  var node;
  if (!findImageNode(selectedElement, clientData)) {
    node = selectedElement;
    if (selectedElement.nodeName === "IMG") {
      createPostData(clientData, [node]);
    } else {
      createPostData(clientData, [node]);
    }
  }
};

function scrollHandler() {
  setPinnerCoords(selection, "HTML");
}
