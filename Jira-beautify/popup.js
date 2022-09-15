let changeColor = document.getElementById("changeColor");

// changeColor.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
//
//   chrome.scripting.executeScript({
//     target: {tabId: tab.id},
//     files: ['jiraUrlBeutify.js']
//   });
// });

// window.addEventListener('load', async () => {
//   let [tab] = await chrome.tabs.query({active: true, currentWindow: true});
//
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: [ 'jiraUrlBeutify.js' ]
//   });
// })