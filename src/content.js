// let proxyUrl = "https://cors-anywhere.herokuapp.com/";

let pinner = null;
let alert = null;
let selectedElement = null;

chrome.runtime.onMessage.addListener(function (message) {
  if (message.pinnerStatus) {
    togglePinner(message.pinnerStatus);
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
  alert.style.display = "flex";
  setTimeout(() => {
    alert.style.display = "none";
  }, 3000);
}

document.onselectionchange = function () {
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
    createPostData(selectedElement);
  }
  setPinnerCoords(selection);
};

// pinner

pinner = document.createElement("div");
pinner.classList.add("my-class");
pinner.id = "wejePinner";
pinner.style =
  "position: absolute;top: 10px;left: 10px;width: 20px;height: 20px;background: blue;border-radius:50%; z-index: 10000;cursor: pointer; display:none";
document.body.append(pinner);

function setPinnerCoords(selection) {
  if (selection.isCollapsed) {
    pinner.style.top = 0;
    pinner.style.left = 0;
  } else {
    pinner.style.top = selection.anchorNode.parentNode.offsetTop - 15 + "px";
    pinner.style.left = selection.anchorNode.parentNode.offsetLeft - 20 + "px";
  }
}

function togglePinner({ status, type }) {
  if (status == "on") {
    pinner.style.display = "block";
  } else {
    pinner.style.display = "none";
  }
}

document.onmousemove = function (e) {
  if (e.target.nodeName == "IMG") {
    pinner.style.top = e.target.offsetTop + 10 + "px";
    pinner.style.left = e.target.offsetLeft + 10 + "px";
    selectedElement = e.target;
  }
};

// alert

alert = document.createElement("div");
alert.classList.add("my-alert");
alert.id = "wejeAlert";
alert.style =
  "display:none;z-index: 100;width: 200px;height: 50px;background: deepskyblue;position: fixed;top: 0;left: 50%;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px; justify-content: center;align-items: center;color: white;";
alert.innerText = "SENT CONTENT";
document.body.append(alert);

function createPostData(node) {
  chrome.runtime.sendMessage("getToken", function (token) {
    if (node.nodeName == "IMG") {
      getBase64Image(selectedElement.src, (path) => {
        const postData = {
          data: [],
        };
        postData.token = token;
        const item = {};
        item.type = "image";
        item.base64 = path;
        item.url = selectedElement.src;

        postData.data.push(item);
        setPostData(postData);
      });
    } else {
      const postData = {
        data: [],
      };
      postData.token = token;
      const item = {};
      item.type = "image";
      item.html = selectedElement.outerHTML;
      item.text = selectedElement.innerText;

      postData.data.push(item);
      setPostData(postData);
    }
  });
}
