// let proxyUrl = "https://cors-anywhere.herokuapp.com/";

let pinner = null;
let token = null;

chrome.runtime.onMessage.addListener(function (message) {
  if (message.pinnerStatus) {
    togglePinner(message.pinnerStatus);
  }

  if (message.token) {
    token = message.token;
  }

  if (message.target && message.target.mediaType == "image") {
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
  } else if (message.target && message.target.selectionText) {
    const postData = {
      data: [],
    };

    console.log(selectedElement);
    const item = {};
    postData.token = message.token;
    item.type = "html";
    item.html = selectedElement.outerHTML;
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

document.onselectionchange = function (e) {
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
    createPostData();
  }

  if (selection.isCollapsed) {
    pinner.style.top = 0;
    pinner.style.left = 0;
  } else {
    pinner.style.top = selection.anchorNode.parentNode.offsetTop - 15 + "px";
    pinner.style.left = selection.anchorNode.parentNode.offsetLeft - 15 + "px";
  }
};

function togglePinner({ status, type }) {
  if (status == "on") {
    pinner.style.display = "block";
  } else {
    pinner.style.display = "none";
  }
}

pinner = document.createElement("div");
pinner.classList.add("my-class");
pinner.id = "wejePinner";
pinner.style =
  "position: absolute;top: 10px;left: 10px;width: 10px;height: 10px;background: brown;z-index: 10000;cursor: pointer; display:none";

document.body.append(pinner);

function createPostData() {
  console.dir(selectedElement);
  const postData = {
    data: [],
  };
  const item = {};
  postData.token = token;
  item.type = "html";
  item.html = selectedElement.outerHTML;
  item.text = selectedElement.innerText;

  postData.data.push(item);
  setPostData(postData);
}
