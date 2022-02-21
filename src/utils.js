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
  console.log("ccc", content);

  alert.style.display = "block";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}
