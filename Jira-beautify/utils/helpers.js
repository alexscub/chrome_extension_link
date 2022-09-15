function getStatusColor(colorname) {
    switch (colorname) {
        case 'blue-gray':
            return '#42526e'
        case 'yellow':
            return '#0049b0'
        case 'green':
            return '#006644'
        default:
            return '#212121'
    }
}

function getStatusBackgroundColor(colorname) {
    switch (colorname) {
        case 'blue-gray':
            return '#DFE1E6'
        case 'yellow':
            return '#DEEBFF'
        case 'green':
            return '#E3FCEF'
        default:
            return '#212121'
    }
}

function parseUrl(url) {

    let str = ""

    if (url?.includes('.atlassian.net/browse/')) {
        const link = new URL(url)
        let parsedUrl = url.split("/")
        str = parsedUrl[parsedUrl.length - 1]

        return { key:str, url: link.origin}
    }
}

async function getIssue(key) {
    //const response = await fetch(`http://localhost:5000/issue/getissue/${key}`)
    const res = await chrome.runtime.sendMessage( //goes to bg_page.js
    key,
    )
    console.log('fetch',res)
    return res
    // const result = await response.json()
    // return result
}

function createCard(iconUrl, summary, key, status, statusFontColor, statusBackgroundColor, bgcColor) {
    return `
                <span style="display: inline-flex; align-items: baseline; text-decoration: none; background-color: ${bgcColor}">
                      <img style='height: 10px' alt="issue-logo" src=${iconUrl}>
                        <strong style="margin-left: 4px">${key} / ${summary} </strong>
                        <span style="margin-left: 4px">
                            <strong style='
                                        font-size: 9px; 
                                        text-transform: uppercase; 
                                        color: ${statusFontColor}; 
                                        background-color: ${statusBackgroundColor};'
                                >${status}</strong>
                        </span>
                  </span>
            `
}

function noIssues(key) {
    const jiraIcon = 'https://cdn-icons-png.flaticon.com/512/5968/5968875.png';

    return `
        <span  style="display: inline-flex; align-items: baseline; text-decoration: none">
            <img style='height: 10px' alt="issue-logo" src="${jiraIcon}">
            <strong style="margin-left: 4px">Jira issue key ~ ${key}</strong>
        </span>
    `
}