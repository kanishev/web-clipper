import alert from "./alert";

function getBase64Image(url, callback) {
  var xhr;
  xhr = new XMLHttpRequest();
  xhr.onload = function () {
    var reader;
    reader = new FileReader();
    reader.onloadend = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.responseType = "blob";
  xhr.send();
}

function createHTMLItem(clientData, node) {
  var item;
  item = {};
  item.type = "html";
  item.html = node.outerHTML;
  item.text = node.innerText;
  return item;
}

function createImageItem(url) {
  return new Promise(function (res, rej) {
    return getBase64Image(url, function (path) {
      var item;
      item = {};
      item.type = "image";
      item.base64 = path;
      item.url = url;
      res(item);
    });
  });
}

function createURLItem(clientData, node) {
  var item, url;
  item = {};
  url = node.linkUrl === "current" ? window.location.href : node.linkUrl;
  item.type = "link";
  item.url = url;
  return item;
}

export function createPostData(clientData, nodeList) {
  var items, postData;
  postData = {
    data: [],
  };
  items = [];
  postData.uid = clientData.uid;
  postData.apiKey = clientData.apiKey;
  postData.source = window.location.href;
  nodeList.forEach(function (el, idx) {
    var item, url;
    if (el.nodeName === "IMG" || el.srcUrl) {
      url = el.srcUrl ? el.srcUrl : el.src;
      item = createImageItem(url);
      items.push(item);
    } else if (el.nodeName !== "IMG" && !el.linkUrl) {
      item = new Promise(function (res, rej) {
        res(createHTMLItem(clientData, el));
      });
      items.push(item);
    } else if (el.linkUrl) {
      item = createURLItem(clientData, el);
      postData.data.push(item);
      setPostData(postData);
    }
  });
  Promise.all(items).then(function (values) {
    if (values.length) {
      values.forEach(function (el) {
        return postData.data.push(el);
      });
      setPostData(postData);
    }
  });
}

export function setPostData(content) {
  chrome.runtime.sendMessage({
    content: content,
  });
  alert.style.display = "flex";
  setTimeout(function () {
    alert.style.display = "none";
  }, 3000);
}

export function findImageNode(nodeList, clientData) {
  var elements, filteredList, isImageFound, list, wrapper;
  list = Array.from(nodeList.children).slice();
  isImageFound = false;
  filteredList = [];
  elements = [];
  list.forEach(function (el) {
    if (el.querySelector("img")) {
      return (isImageFound = true);
    }
  });
  if (isImageFound) {
    list.forEach(function (node) {
      var wrapper;
      if (node.querySelector("img")) {
        wrapper = document.createElement("div");
        if (elements.length) {
          elements.forEach(function (el) {
            return wrapper.append(el);
          });
        }
        filteredList.push(wrapper);
        elements = [];
        filteredList.push(node.querySelector("img"));
        return (isImageFound = true);
      } else {
        return elements.push(node);
      }
    });
    if (elements.length) {
      wrapper = document.createElement("div");
      if (elements.length) {
        elements.forEach(function (node) {
          return wrapper.append(node);
        });
      }
      filteredList.push(wrapper);
    }
    createPostData(clientData, filteredList);
  } else {
    return false;
  }
  return isImageFound;
}
