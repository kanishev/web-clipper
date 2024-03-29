let alert = document.createElement("div");
let content = document.createElement("div");
let text = document.createElement("p");

const svg = `
<svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 4.5H5.5C4.39543 4.5 3.5 5.39543 3.5 6.5V16C3.5 17.1046 4.39543 18 5.5 18H15.5C16.6046 18 17.5 17.1046 17.5 16V11.5" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11.5303 11.5303C11.2374 11.8232 10.7626 11.8232 10.4697 11.5303C10.1768 11.2374 10.1768 10.7626 10.4697 10.4697L11.5303 11.5303ZM18.9999 3.00006L19 2.25006C19.4142 2.25007 19.7499 2.58585 19.7499 3.00006L18.9999 3.00006ZM19.7499 7.00031C19.7499 7.41452 19.4142 7.7503 18.9999 7.7503C18.5857 7.7503 18.2499 7.41452 18.2499 7.0003L19.7499 7.00031ZM15 3.74994C14.5858 3.74993 14.25 3.41413 14.2501 2.99992C14.2501 2.5857 14.5859 2.24993 15.0001 2.24994L15 3.74994ZM10.4697 10.4697L18.4696 2.46973L19.5303 3.53039L11.5303 11.5303L10.4697 10.4697ZM19.7499 3.00006L19.7499 7.00031L18.2499 7.0003L18.2499 3.00006L19.7499 3.00006ZM18.9999 3.75006L15 3.74994L15.0001 2.24994L19 2.25006L18.9999 3.75006Z" fill="white"/>
</svg>
`;

alert.id = "wejeAlert";

alert.style = `display: none !important;
  position: fixed !important;
  left: 0 !important;
  right: 0 !important;
  top: 17px !important;
  margin: auto !important;
  z-index: 100 !important;
  width: 220px !important;
  font-size: 15px !important;
  height: 60px !important;
  justify-content: center !important;
  border-radius: 20px !important;
  color: white !important;
  background-color: #4881FF !important`;

content.style = `display: flex !important;
  gap: 10px !important;
  justify-content: center !important;
  align-items: center !important;`;

text.innerText = "Content sent";
content.innerHTML = svg;
content.append(text);
alert.append(content);

document.body.append(alert);

export default alert;
