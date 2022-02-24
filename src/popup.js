import "./styles.css";

const redirectBlock = document.getElementById("redirect");
const pinnersBlock = document.getElementById("pinners");

const textPinner = document.getElementById("textPinner");
const imagePinner = document.getElementById("imagePinner");

const version = document.getElementById("version");
const copyButton = document.getElementById("copyButton");

let pinnerStatus = {
  text: false,
  image: false,
};

textPinner.addEventListener("change", function () {
  pinnerStatus.text = this.checked;
  chrome.storage.local.set({ pinnerStatus });
  sendPinnerStatus();
});

imagePinner.addEventListener("change", function () {
  pinnerStatus.image = this.checked;
  chrome.storage.local.set({ pinnerStatus });
  sendPinnerStatus();
});

chrome.runtime.onMessageExternal.addListener(function (request) {
  if (request && request.apiKey && request.uid) {
    toggleDisplayContent({ apiKey: request.apiKey, uid: request.uid });
  }
});

chrome.storage.local.get().then((store) => {
  imagePinner.checked = store.pinnerStatus
    ? store.pinnerStatus.image
    : pinnerStatus.image;
  textPinner.checked = store.pinnerStatus
    ? store.pinnerStatus.text
    : pinnerStatus.text;

  pinnerStatus =
    store.pinnerStatus && store.clientData
      ? store.pinnerStatus
      : {
          text: false,
          image: false,
        };
  sendPinnerStatus();
  toggleDisplayContent(store.clientData);
});

function toggleDisplayContent(token) {
  if (token) {
    redirectBlock.style.display = "none";
    pinnersBlock.style.display = "flex";
  } else {
    redirectBlock.style.display = "flex";
    pinnersBlock.style.display = "none";
  }
}

function sendPinnerStatus() {
  chrome.runtime.sendMessage({ pinnerStatus });
}

version.innerText = `Version: ${chrome.runtime.getManifest().version}`;

copyButton.onclick = function () {
  chrome.runtime.sendMessage("getCurrentUrl");
};
