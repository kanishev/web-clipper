!function(){var e={uid:null,apiKey:null},t={id:"Weje",title:"Weje Clipper",contexts:["all"]};chrome.storage.local.get().then((function(n){n.clientData&&(e=n.clientData,chrome.contextMenus.create(t))})),chrome.contextMenus.onClicked.addListener((function(t){chrome.tabs.query({active:!0,currentWindow:!0},(function(n){chrome.tabs.sendMessage(n[0].id,{target:t,clientData:e})}))})),chrome.runtime.onMessage.addListener((function(t,n,r){t.content&&fetch("https://clipper.stage.weje.io/push",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t.content)}).catch((function(e){console.error("Error:",e)})),"getCurrentUrl"==t&&chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.tabs.sendMessage(t[0].id,{target:"currentUrl",clientData:e})})),"getPinnerStatus"==t&&chrome.storage.local.get().then((function(e){chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.tabs.sendMessage(t[0].id,{pinnerStatus:e.clientData?e.pinnerStatus:{text:!1,image:!1}})}))})),t.pinnerStatus&&chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id,{pinnerStatus:t.pinnerStatus})})),"getClientData"==t&&r(e)})),chrome.runtime.onMessageExternal.addListener((function(n,r,a){return n&&(n.message?"version"==n.message&&a({version:chrome.runtime.getManifest().version}):n.apiKey&&n.uid&&(chrome.action.enable(),chrome.contextMenus.create(t),e.apiKey=n.apiKey,e.uid=n.uid,chrome.storage.local.set({clientData:e}))),!0}))}();