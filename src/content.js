chrome.runtime.onMessage.addListener((message) => {
  console.log("Message пришел", message);
});

document.addEventListener("dblclick", function () {
  chrome.runtime.sendMessage({ greeting: "hello" }, function (response) {
    console.log("2", response.farewell);
  });
});
