import { getBase64Image, setPostData } from "./utils";

let pinner = document.createElement("div");
pinner.classList.add("my-class");
pinner.id = "wejePinner";
pinner.style =
  "position: absolute;top: -20px;left: 10px;width: 20px;height: 20px;background: blue;border-radius:50%; z-index: 10000;cursor: pointer; display:none";
document.body.append(pinner);

export function setPinnerCoords(selection, type) {
  if (selection && selection.isCollapsed && type == "HTML") {
    pinner.style.top = 0;
    pinner.style.left = 0;
  } else if (type == "IMAGE") {
    pinner.style.top = selection.target.offsetTop + 10 + "px";
    pinner.style.left = selection.target.offsetLeft + 10 + "px";
  } else {
    pinner.style.top = selection.anchorNode.parentNode.offsetTop - 15 + "px";
    pinner.style.left = selection.anchorNode.parentNode.offsetLeft - 20 + "px";
  }
}

export function togglePinner({ text, image }) {
  if (text || image) {
    pinner.style.display = "block";
  } else {
    pinner.style.display = "none";
  }
}

export function createPostData(node, selectedElement, token) {
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
    item.type = "html";
    item.html = selectedElement.outerHTML;
    item.text = selectedElement.innerText;

    postData.data.push(item);
    setPostData(postData);
  }
}
