chrome.runtime.onMessage.addListener(function (message) {
  console.log("Message", message);
});

window.addEventListener(
  "message",
  function (event) {
    var USER_TOKEN;
    if (event.source !== window) {
      return;
    }
    if (event.data.type && event.data.type === "WEJE_CLIENT") {
      USER_TOKEN = event.data.token;
      console.log("Page script received: " + USER_TOKEN);
      chrome.runtime.sendMessage(
        {
          jwt: USER_TOKEN,
        },
        function (response) {
          console.log(response.message);
        }
      );
    }
  },
  false
);
