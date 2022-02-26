import { getBase64Image, setPostData } from "./utils";

export const pinner = document.createElement("div");
pinner.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none">
  <rect class="clipper" width="100%" height="100%" x="0" y="0" rx="3" fill="#000000" stroke="none"  fill-opacity="1"/>
  <g>
    <path class="clipper" d="M13.0872 17V17.75C13.418 17.75 13.7098 17.5332 13.8053 17.2164L13.0872 17ZM9.10444 17L8.39843 17.2531C8.50528 17.5512 8.78781 17.75 9.10444 17.75V17ZM8.47708 15.25L9.18308 14.9969L9.09342 14.7468L8.86629 14.6089L8.47708 15.25ZM13.6146 15.25L13.2204 14.612L12.9786 14.7614L12.8965 15.0336L13.6146 15.25ZM13.0872 16.25H9.10444V17.75H13.0872V16.25ZM9.81044 16.7469L9.18308 14.9969L7.77107 15.5031L8.39843 17.2531L9.81044 16.7469ZM8.86629 14.6089C6.27568 13.0361 5.39551 10.3025 5.87445 7.96291C6.35102 5.63486 8.1508 3.75 10.9798 3.75V2.25C7.33717 2.25 5.00307 4.74014 4.40493 7.66209C3.80915 10.5725 4.91341 13.9639 8.08786 15.8911L8.86629 14.6089ZM10.9798 3.75C13.8092 3.75 15.619 5.63604 16.1147 7.9684C16.6129 10.3129 15.7587 13.0436 13.2204 14.612L14.0089 15.888C17.1352 13.9564 18.1994 10.5621 17.5819 7.6566C16.9619 4.73896 14.6219 2.25 10.9798 2.25V3.75ZM12.8965 15.0336L12.3691 16.7836L13.8053 17.2164L14.3327 15.4664L12.8965 15.0336Z" fill="white" id="svg_1" class="selected" transform="rotate(-1.0592834949493408 10.999971389770803,10.000000000000004) "/>
    <path class="clipper" d="M10 20H12" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" id="svg_2" />
  </g>
</svg>
`;

pinner.id = "wejePinner";
pinner.style = `
position: absolute;
top: -50px;
left: 10px;
z-index: 99999;
cursor: pointer;
display: none;
width: 22px;
height: 22px;`;

document.body.append(pinner);

let interval = null;

export function setPinnerCoords(selection, type) {
  clearInterval(interval);

  if (!selection && type == "EMPTY") {
    console.log("collapsed");
    pinner.style.top = -50 + "px";
    pinner.style.left = 0;
  }

  if (selection && type == "IMAGE" && selection.width > 100) {
    pinner.style.top =
      selection.getBoundingClientRect().y + window.scrollY + 10 + "px";
    pinner.style.left =
      selection.parentNode.getBoundingClientRect().x + 10 + "px";
  } else if (selection && type == "HTML") {
    interval = setInterval(function () {
      pinner.style.top =
        selection.getRangeAt(0).getBoundingClientRect().y +
        window.scrollY +
        "px";
      pinner.style.left =
        selection.getRangeAt(0).getBoundingClientRect().x <= 20
          ? 0
          : selection.getRangeAt(0).getBoundingClientRect().x - 35 + "px";
      console.log(interval);
    }, 1000);
  }
}

export function togglePinner({ text, image }) {
  if (text || image) {
    pinner.style.display = "block";
  } else {
    pinner.style.display = "none";
  }
}

export function createPostData(selectedElement, { uid, apiKey }) {
  if (selectedElement.nodeName == "IMG") {
    getBase64Image(selectedElement.src, (path) => {
      const postData = {
        data: [],
      };
      const item = {};
      postData.uid = uid;
      postData.apiKey = apiKey;
      postData.source = window.location.href;
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
    const item = {};

    postData.uid = uid;
    postData.apiKey = apiKey;
    postData.source = window.location.href;
    item.type = "html";
    item.html = selectedElement.outerHTML;
    item.text = selectedElement.innerText;

    postData.data.push(item);
    setPostData(postData);
  }
}
