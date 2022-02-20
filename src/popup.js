import "./styles.css";

const redirectBlock = document.getElementById("redirect");
const pinnersBlock = document.getElementById("pinners");

const textPinner = document.getElementById("textPinner");
const imagePinner = document.getElementById("imagePinner");

let pinnerStatus = {
  text: false,
  image: false,
};

textPinner.addEventListener("change", function (e) {
  pinnerStatus.text = this.checked;
  chrome.storage.local.set({ pinnerStatus });
  sendPinnerStatus();
});

imagePinner.addEventListener("change", function (e) {
  pinnerStatus.image = this.checked;
  chrome.storage.local.set({ pinnerStatus });
  sendPinnerStatus();
});

chrome.runtime.onMessageExternal.addListener(function (request) {
  if (request && request.token) {
    toggleDisplayContent(token);
  }
});

chrome.storage.local.get().then((store) => {
  imagePinner.checked = store.pinnerStatus
    ? store.pinnerStatus.image
    : pinnerStatus.image;
  textPinner.checked = store.pinnerStatus
    ? store.pinnerStatus.text
    : pinnerStatus.text;

  pinnerStatus = store.pinnerStatus;
  sendPinnerStatus();
  toggleDisplayContent(store.token);
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
