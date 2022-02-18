let alert = document.createElement("div");
alert.classList.add("my-alert");
alert.id = "wejeAlert";
alert.style =
  "display:none;z-index: 100;width: 200px;height: 50px;background: deepskyblue;position: fixed;top: 0;left: 50%;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px; justify-content: center;align-items: center;color: white;";
alert.innerText = "SENT CONTENT";
document.body.append(alert);

export default alert;
