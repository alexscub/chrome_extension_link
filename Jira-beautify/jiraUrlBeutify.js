
function jiraUrlBeutify() {
    let search = document.querySelectorAll('a');

    for (link of search) {
        console.log(link)
        const key = parseUrl(link.href);

        if (key) {
            const choosed = link;
            chrome.runtime.sendMessage( //goes to bg_page.js
            {...key},
            data=>beatify(data, choosed, key.key)
            )
        }
    }
}

async function beatify (issue, link, key) {
    if (issue.errorMessages) {
        link.style.textDecoration = 'none'
        link.style.color = 'darkBlue'
        link.innerHTML = noIssues(key)
    } else {
        const statusFontColor = getStatusColor(issue.fields?.status.statusCategory.colorName)
        const statusBackgroundColor = getStatusBackgroundColor(issue.fields?.status.statusCategory.colorName)
        link.style.textDecoration = 'none';
        link.style.color = 'darkBlue';
        const kek = await chrome.storage.sync.get("color");
        console.log(kek.color)
        link.innerHTML = createCard(issue.fields.issuetype.iconUrl, issue.fields.summary, issue.key, issue.fields.status.name, statusFontColor, statusBackgroundColor, kek.color)
        debugger
    }
}

window.addEventListener("load", jiraUrlBeutify, false);
// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
//     if (changeInfo.status == 'complete' && tab.active) {
//         debugger
//         jiraUrlBeutify()
//     }
//   })