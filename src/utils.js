import alert from "./alert";

export function getBase64Image(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}

export function setPostData(content) {
  chrome.runtime.sendMessage({ content });

  alert.style.display = "flex";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}
