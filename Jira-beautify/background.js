let color = '#FFFFFF';

// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default font-color set to green', `color: ${color}`);
// });

chrome.runtime.onMessage.addListener(
  function(url, sender, onSuccess) {
      fetch(url.url+"/rest/api/3/issue/"+url.key)
          .then(response => response.text())
          .then(responseText => {
            onSuccess(JSON.parse(responseText))
          })
          .catch(e=>{
            console.log(e)
          })
      
      return true;  // Will respond asynchronously.
  }
);
