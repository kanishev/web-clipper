import "./styles.css";

const redirectBlock = document.getElementById("redirect");
const pinnersBlock = document.getElementById("pinners");

const textPinner = document.getElementById("textPinner");
const imagePinner = document.getElementById("imagePinner");

textPinner.addEventListener("change", function (e) {
  sendPinnerStatus(this.checked);
});

imagePinner.addEventListener("change", function (e) {
  sendPinnerStatus(this.checked);
});

chrome.runtime.onMessageExternal.addListener(function (request) {
  if (request && request.token) {
    toggleDisplayContent(token);
  }
});

chrome.storage.local.get("token").then(({ token }) => {
  console.log(token);
  toggleDisplayContent(token);
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

function sendPinnerStatus(status) {
  console.log(status);

  chrome.runtime.sendMessage({ pinnerStatus: status }, function (response) {
    console.log(response);
  });
}
