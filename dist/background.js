!function(){var e="",n={id:"Weje",title:"Weje Clipper",contexts:["image","selection"]};chrome.storage.local.get().then((function(t){t.token&&(e=t.token,chrome.contextMenus.create(n))})),chrome.contextMenus.onClicked.addListener((function(n){chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.tabs.sendMessage(t[0].id,{target:n,token:e})}))})),chrome.runtime.onMessage.addListener((function(n,t,o){n.pinnerStatus?chrome.tabs.query({active:!0,currentWindow:!0},(function(e){chrome.tabs.sendMessage(e[0].id,{pinnerStatus:n.pinnerStatus})})):"getToken"==n&&o(e)})),chrome.runtime.onMessageExternal.addListener((function(t,o,r){return t&&(t.message?"version"==t.message&&r({version:chrome.runtime.getManifest().version}):t.token&&(chrome.action.enable(),chrome.contextMenus.create(n),e=t.token,chrome.storage.local.set({token:e}),r({message:"Token has been recievedd"}))),!0}))}();