!function(){"use strict";var e={340:function(e,t){var n=document.createElement("div"),o=document.createElement("div"),i=document.createElement("p");n.id="wejeAlert",n.style="display: none !important;\n  position: fixed !important;\n  left: 0 !important;\n  right: 0 !important;\n  top: 17px !important;\n  margin: auto !important;\n  z-index: 100 !important;\n  width: 220px !important;\n  font-size: 15px !important;\n  height: 60px !important;\n  justify-content: center !important;\n  border-radius: 20px !important;\n  color: white !important;\n  background-color: #4881FF !important",o.style="display: flex !important;\n  gap: 10px !important;\n  justify-content: center !important;\n  align-items: center !important;",i.innerText="Content sent",o.innerHTML='\n<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16C3.5 17.1046 4.39543 18 5.5 18H15.5C16.6046 18 17.5 17.1046 17.5 16V11.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>\n<path d="M11.5303 11.5303C11.2374 11.8232 10.7626 11.8232 10.4697 11.5303C10.1768 11.2374 10.1768 10.7626 10.4697 10.4697L11.5303 11.5303ZM18.9999 3.00006L19 2.25006C19.4142 2.25007 19.7499 2.58585 19.7499 3.00006L18.9999 3.00006ZM19.7499 7.00031C19.7499 7.41452 19.4142 7.7503 18.9999 7.7503C18.5857 7.7503 18.2499 7.41452 18.2499 7.0003L19.7499 7.00031ZM15 3.74994C14.5858 3.74993 14.25 3.41413 14.2501 2.99992C14.2501 2.5857 14.5859 2.24993 15.0001 2.24994L15 3.74994ZM10.4697 10.4697L18.4696 2.46973L19.5303 3.53039L11.5303 11.5303L10.4697 10.4697ZM19.7499 3.00006L19.7499 7.00031L18.2499 7.0003L18.2499 3.00006L19.7499 3.00006ZM18.9999 3.75006L15 3.74994L15.0001 2.24994L19 2.25006L18.9999 3.75006Z" fill="white"/>\n</svg>\n',o.append(i),n.append(o),document.body.append(n),t.Z=n},488:function(e,t,n){n.d(t,{fY:function(){return i},FX:function(){return r},$c:function(){return a},k$:function(){return l}});var o=n(523),i=document.createElement("div");function r(e,t){e&&e.isCollapsed&&"HTML"==t?(i.style.top="-50px",i.style.left=0):"IMAGE"==t?(i.style.top=e.parentNode.getBoundingClientRect().y+window.scrollY+10+"px",i.style.left=e.parentNode.getBoundingClientRect().x+10+"px"):(i.style.top=e.anchorNode.parentNode.getBoundingClientRect().y+window.scrollY+"px",i.style.left=e.anchorNode.parentNode.getBoundingClientRect().x-35+"px")}function a(e){var t=e.text,n=e.image;i.style.display=t||n?"block":"none"}function l(e,t){var n=t.uid,i=t.apiKey;if("IMG"==e.nodeName)(0,o.s)(e.src,(function(t){var r={data:[]},a={};r.uid=n,r.apiKey=i,r.source=window.location.href,a.type="image",a.base64=t,a.url=e.src,r.data.push(a),(0,o.a)(r)}));else{var r={data:[]},a={};r.uid=n,r.apiKey=i,r.source=window.location.href,a.type="html",a.html=e.outerHTML,a.text=e.innerText,r.data.push(a),(0,o.a)(r)}}i.innerHTML='\n<svg id="wejePinner" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="32px" height="32px" viewBox="0 0 32 32">\n<defs>\n<image id="image14" width="32" height="32" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACNUlEQVRYhc2XsW7UQBCG/xnfcdkTxdV5B6p0iDoSDS2PgMQDUPAAvEHEa1CmjhSloqCAOpSIk+4aWMFlPRTn9Y3Hu7ZPbKKMZHltj+f7d/bO/k0YDmo2AKjUmNLpELUPaizp9HwhDa/UeCjfColbGBKRKjgGjtdSEWGThaQEcAY+ywjSoYF3GRG1vmFmCuiZszo3A/B3tVq5DLgzoe126wE8USKoAVcwXbCtjbAW7px7SUTvAZyNwHUIgM8i8sF7f6mAdSOqFRHXUq87x+PlcvmOiD4COD0CHuudEtHr+Xz+Z7fb3ZhrvQ7omRP2Mz8joivk13tqiIg8995/wWHmbSf0Otv//JsC8Fj7LfrdJuAwY3sDE9GzAvB9wX2tJCt2QD/lKgAkIielBIiIQ/f50Y61Kr0v0Xobum67Z3vinuBZEZzPfZh4lALuewlGBTxopARkzUOB6NV+lB2IUbIT2VpsEtrXJDP/LEVn5h+2fsuxJ2KSiFyWEgAgeoIeK3ZAe7kAQBaLxQWA7wXgt865C/SdcgD6HWjf15vNBiGEcwDf/gP+NYRwvl6vGXsPoBkAINaQaC84b8a/nXOvmPmFiCynUInoV13X1977TwCeNvBdczkKubMCepYsIUrnpcJa7w4MBzfU5uVMqbXjjOPelNZ66XMdU5pyQykR9kNF58fiFq5/2El4SoAWMfRlNBRHfRnl1jLe3LHQE+ApMHLwsYLWPlXmeAgeofp48sfpFDFjMQjV8Q/pntMjg/X+WwAAAABJRU5ErkJggg=="/>\n</defs>\n<g id="surface1">\n<use xlink:href="#image14"/>\n<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 11.707031 9.230469 L 16.738281 9.230469 C 16.992188 9.230469 17.246094 9.28125 17.480469 9.382812 C 17.714844 9.484375 17.929688 9.628906 18.109375 9.816406 C 18.292969 10 18.433594 10.21875 18.53125 10.460938 C 18.628906 10.703125 18.679688 10.964844 18.679688 11.226562 L 18.679688 12.914062 L 12.402344 12.914062 C 11.886719 12.914062 11.394531 12.703125 11.03125 12.332031 C 10.667969 11.957031 10.460938 11.449219 10.460938 10.921875 L 10.460938 10.503906 C 10.464844 10.164062 10.59375 9.839844 10.828125 9.601562 C 11.0625 9.363281 11.378906 9.230469 11.707031 9.230469 Z M 11.707031 9.230469 "/>\n<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 16.574219 12.925781 L 20.292969 12.925781 C 20.625 12.925781 20.941406 13.058594 21.175781 13.300781 C 21.40625 13.539062 21.539062 13.863281 21.539062 14.203125 L 21.539062 15.328125 C 21.539062 15.667969 21.40625 15.992188 21.175781 16.230469 C 20.941406 16.46875 20.625 16.605469 20.292969 16.605469 L 15.171875 16.605469 L 15.171875 14.355469 C 15.171875 14.164062 15.207031 13.980469 15.277344 13.804688 C 15.351562 13.632812 15.453125 13.472656 15.582031 13.339844 C 15.714844 13.207031 15.867188 13.101562 16.039062 13.03125 C 16.207031 12.960938 16.390625 12.925781 16.574219 12.925781 Z M 16.574219 12.925781 "/>\n<path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;" d="M 15.527344 16.617188 L 17.335938 16.617188 L 17.335938 18.511719 C 17.335938 18.988281 17.152344 19.445312 16.824219 19.78125 C 16.496094 20.117188 16.050781 20.308594 15.585938 20.308594 L 15.53125 20.308594 C 15.054688 20.308594 14.597656 20.113281 14.261719 19.765625 C 13.925781 19.421875 13.734375 18.953125 13.734375 18.460938 C 13.734375 17.972656 13.921875 17.507812 14.257812 17.160156 C 14.597656 16.816406 15.050781 16.621094 15.527344 16.621094 Z M 15.527344 16.617188 "/>\n<path style=" stroke:none;fill-rule:nonzero;fill:rgb(51.764706%,51.764706%,51.764706%);fill-opacity:1;" d="M 18.660156 12.925781 L 15.171875 15.566406 L 15.171875 14.359375 C 15.171875 14.171875 15.207031 13.984375 15.277344 13.808594 C 15.347656 13.636719 15.453125 13.476562 15.582031 13.34375 C 15.710938 13.210938 15.867188 13.105469 16.035156 13.03125 C 16.207031 12.960938 16.390625 12.925781 16.574219 12.925781 Z M 18.660156 12.925781 "/>\n<path style=" stroke:none;fill-rule:nonzero;fill:rgb(51.764706%,51.764706%,51.764706%);fill-opacity:1;" d="M 16.226562 16.617188 C 16.226562 16.617188 15.660156 16.617188 15.492188 16.617188 C 15.398438 16.621094 15.308594 16.632812 15.21875 16.648438 L 17.351562 18.257812 L 17.351562 16.617188 Z M 16.226562 16.617188 "/>\n</g>\n</svg>\n',i.classList.add("my-class"),i.id="wejePinner",i.style="\nposition: absolute;\ntop: -50px;\nleft: 10px;\nz-index: 100;\ncursor: pointer;\ndisplay: none;\nwidth: 32px;\nheight: 32px;",document.body.append(i)},523:function(e,t,n){n.d(t,{s:function(){return i},a:function(){return r}});var o=n(340);function i(e,t){var n=new XMLHttpRequest;n.onload=function(){var e=new FileReader;e.onloadend=function(){t(e.result)},e.readAsDataURL(n.response)},n.open("GET",e),n.responseType="blob",n.send()}function r(e){console.log(e),o.Z.style.display="flex",setTimeout((function(){o.Z.style.display="none"}),3e3)}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=n(488),t=n(523),o=(n(340),null);function i(t){var n=document.getSelection();if(!n.isCollapsed){o=document.createElement("div");for(var i=0;i<n.rangeCount;i++)o.append(n.getRangeAt(i).cloneContents()),n.getRangeAt(i).cloneContents();for(var r=0;r<o.children.length;r++)o.children[r].removeAttribute("class");(0,e.FX)(n,"HTML")}}function r(t){"IMG"==t.target.nodeName&&(o=t.target,(0,e.FX)(t.target,"IMAGE"))}chrome.runtime.sendMessage("getPinnerStatus"),chrome.runtime.onMessage.addListener((function(n){if("getCurrentUrl"==n&&console.log(window.location.href),n.pinnerStatus){var a=n.pinnerStatus,l=a.text,s=a.image;(0,e.$c)(n.pinnerStatus),s?document.addEventListener("mousemove",r):document.removeEventListener("mousemove",r),l?document.addEventListener("selectionchange",i):document.removeEventListener("selectionchange",i)}if(n.target&&"image"==n.target.mediaType){var p=n.clientData,d=p.uid,c=p.apiKey;(0,t.s)(n.target.srcUrl,(function(e){var o={data:[]};o.uid=d,o.apiKey=c,o.source=window.location.href;var i={type:"image"};i.base64=e,i.url=n.target.srcUrl,o.data.push(i),(0,t.a)(o)}))}else if(n.target&&n.target.selectionText){var u=n.clientData,f=u.uid,g=u.apiKey,m={data:[]},C={};m.uid=f,m.apiKey=g,m.source=window.location.href,C.type="html",C.html=o.outerHTML,C.text=o.innerText,m.data.push(C),(0,t.a)(m)}})),e.fY.onclick=function(){chrome.runtime.sendMessage("getToken",(function(t){(0,e.k$)(o,t)}))}}()}();