// chrome.runtime.onMessage.addListener(function () {
//   console.log("OnMEssage");
// });
console.log(chrome.runtime);

chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
  console.log(response.farewell);
});

chrome.runtime.onMessage.addListener(() => {
  console.log("Message пришел");
});

chrome.runtime.onConnect.addListener(() => {
  console.log("Connected");
});
