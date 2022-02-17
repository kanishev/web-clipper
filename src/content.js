// let proxyUrl = "https://cors-anywhere.herokuapp.com/";

chrome.runtime.sendMessage("v", function (response) {
  console.log(response);
});

chrome.runtime.onMessage.addListener(function (message) {
  console.log("Message", message);

  if (message.target.mediaType && message.target.mediaType == "image") {
    getBase64Image(message.target.srcUrl, (urls) => {
      const postData = {
        data: [],
      };
      const item = {};
      postData.token = message.token;
      item.type = "image";
      item.base64 = urls;
      item.url = message.target.srcUrl;

      postData.data.push(item);
      setPostData(postData);
    });
  } else if (message.target.selectionText) {
    const postData = {
      data: [],
    };
    const item = {};
    postData.token = message.token;
    item.type = "html";
    item.html = selectedElement.innerHTML;
    item.text = selectedElement.innerText;

    postData.data.push(item);
    setPostData(postData);
  }
});

function getBase64Image(url, callback) {
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

function setPostData(content) {
  console.log(content);
}

document.onselectionchange = function () {
  const selection = document.getSelection();
  selectedElement = document.createElement("div");

  for (let i = 0; i < selection.rangeCount; i++) {
    selectedElement.append(selection.getRangeAt(i).cloneContents());
    selection.getRangeAt(i).cloneContents();
  }

  for (let c = 0; c < selectedElement.children.length; c++) {
    selectedElement.children[c].removeAttribute("class");
  }
};

const el = document.createElement("div");
el.classList.add("my-class");
el.style =
  "position: absolute;top: 10px;left: 10px;width: 10px;height: 10px;background: brown;z-index: 10000;cursor: pointer;";

document.body.append(el);
