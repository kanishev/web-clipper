import { getBase64Image, setPostData } from "./utils";

export const pinner = document.createElement("div");
pinner.innerHTML = `
<svg id="wejePinner" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="32px" height="32px" viewBox="0 0 32 32">
<defs>
<image id="image14" width="32" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACNUlEQVRYhc2XsW7UQBCG/xnfcdkTxdV5B6p0iDoSDS2PgMQDUPAAvEHEa1CmjhSloqCAOpSIk+4aWMFlPRTn9Y3Hu7ZPbKKMZHltj+f7d/bO/k0YDmo2AKjUmNLpELUPaizp9HwhDa/UeCjfColbGBKRKjgGjtdSEWGThaQEcAY+ywjSoYF3GRG1vmFmCuiZszo3A/B3tVq5DLgzoe126wE8USKoAVcwXbCtjbAW7px7SUTvAZyNwHUIgM8i8sF7f6mAdSOqFRHXUq87x+PlcvmOiD4COD0CHuudEtHr+Xz+Z7fb3ZhrvQ7omRP2Mz8joivk13tqiIg8995/wWHmbSf0Otv//JsC8Fj7LfrdJuAwY3sDE9GzAvB9wX2tJCt2QD/lKgAkIielBIiIQ/f50Y61Kr0v0Xobum67Z3vinuBZEZzPfZh4lALuewlGBTxopARkzUOB6NV+lB2IUbIT2VpsEtrXJDP/LEVn5h+2fsuxJ2KSiFyWEgAgeoIeK3ZAe7kAQBaLxQWA7wXgt865C/SdcgD6HWjf15vNBiGEcwDf/gP+NYRwvl6vGXsPoBkAINaQaC84b8a/nXOvmPmFiCynUInoV13X1977TwCeNvBdczkKubMCepYsIUrnpcJa7w4MBzfU5uVMqbXjjOPelNZ66XMdU5pyQykR9kNF58fiFq5/2El4SoAWMfRlNBRHfRnl1jLe3LHQE+ApMHLwsYLWPlXmeAgeofp48sfpFDFjMQjV8Q/pntMjg/X+WwAAAABJRU5ErkJggg=="/>
</defs>
<g id="surface1">
<use xlink:href="#image14"/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 11.707031 9.230469 L 16.738281 9.230469 C 16.992188 9.230469 17.246094 9.28125 17.480469 9.382812 C 17.714844 9.484375 17.929688 9.628906 18.109375 9.816406 C 18.292969 10 18.433594 10.21875 18.53125 10.460938 C 18.628906 10.703125 18.679688 10.964844 18.679688 11.226562 L 18.679688 12.914062 L 12.402344 12.914062 C 11.886719 12.914062 11.394531 12.703125 11.03125 12.332031 C 10.667969 11.957031 10.460938 11.449219 10.460938 10.921875 L 10.460938 10.503906 C 10.464844 10.164062 10.59375 9.839844 10.828125 9.601562 C 11.0625 9.363281 11.378906 9.230469 11.707031 9.230469 Z M 11.707031 9.230469 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.574219 12.925781 L 20.292969 12.925781 C 20.625 12.925781 20.941406 13.058594 21.175781 13.300781 C 21.40625 13.539062 21.539062 13.863281 21.539062 14.203125 L 21.539062 15.328125 C 21.539062 15.667969 21.40625 15.992188 21.175781 16.230469 C 20.941406 16.46875 20.625 16.605469 20.292969 16.605469 L 15.171875 16.605469 L 15.171875 14.355469 C 15.171875 14.164062 15.207031 13.980469 15.277344 13.804688 C 15.351562 13.632812 15.453125 13.472656 15.582031 13.339844 C 15.714844 13.207031 15.867188 13.101562 16.039062 13.03125 C 16.207031 12.960938 16.390625 12.925781 16.574219 12.925781 Z M 16.574219 12.925781 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 15.527344 16.617188 L 17.335938 16.617188 L 17.335938 18.511719 C 17.335938 18.988281 17.152344 19.445312 16.824219 19.78125 C 16.496094 20.117188 16.050781 20.308594 15.585938 20.308594 L 15.53125 20.308594 C 15.054688 20.308594 14.597656 20.113281 14.261719 19.765625 C 13.925781 19.421875 13.734375 18.953125 13.734375 18.460938 C 13.734375 17.972656 13.921875 17.507812 14.257812 17.160156 C 14.597656 16.816406 15.050781 16.621094 15.527344 16.621094 Z M 15.527344 16.617188 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(51.764706%,51.764706%,51.764706%);fill-opacity:1;" d="M 18.660156 12.925781 L 15.171875 15.566406 L 15.171875 14.359375 C 15.171875 14.171875 15.207031 13.984375 15.277344 13.808594 C 15.347656 13.636719 15.453125 13.476562 15.582031 13.34375 C 15.710938 13.210938 15.867188 13.105469 16.035156 13.03125 C 16.207031 12.960938 16.390625 12.925781 16.574219 12.925781 Z M 18.660156 12.925781 "/>
<path style=" stroke:none;fill-rule:nonzero;fill:rgb(51.764706%,51.764706%,51.764706%);fill-opacity:1;" d="M 16.226562 16.617188 C 16.226562 16.617188 15.660156 16.617188 15.492188 16.617188 C 15.398438 16.621094 15.308594 16.632812 15.21875 16.648438 L 17.351562 18.257812 L 17.351562 16.617188 Z M 16.226562 16.617188 "/>
</g>
</svg>
`;

pinner.classList.add("my-class");
pinner.id = "wejePinner";
pinner.style = `
position: absolute;
top: -50px;
left: 10px;
z-index: 10000;
cursor: pointer;
display: none;
width: 32px;
height: 32px;`;

document.body.append(pinner);

export function setPinnerCoords(selection, type) {
  if (selection && selection.isCollapsed && type == "HTML") {
    pinner.style.top = 0;
    pinner.style.left = 0;
  } else if (type == "IMAGE") {
    pinner.style.top = selection.target.offsetTop + 10 + "px";
    pinner.style.left = selection.target.offsetLeft + 10 + "px";
  } else {
    pinner.style.top = selection.anchorNode.parentNode.offsetTop + "px";
    pinner.style.left = selection.anchorNode.parentNode.offsetLeft - 35 + "px";
  }
}

export function togglePinner({ text, image }) {
  if (text || image) {
    pinner.style.display = "block";
  } else {
    pinner.style.display = "none";
  }
}

export function createPostData(selectedElement, token) {
  if (selectedElement.nodeName == "IMG") {
    getBase64Image(selectedElement.src, (path) => {
      const postData = {
        data: [],
      };
      postData.token = token;
      postData.url = window.location.href;
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
    postData.url = window.location.href;
    const item = {};
    item.type = "html";
    item.html = selectedElement.outerHTML;
    item.text = selectedElement.innerText;

    postData.data.push(item);
    setPostData(postData);
  }
}
