/**Extension events here */

const decisionsHosts = [
    { name: 'Localhost', host: 'localhost' },
    { name: 'Develop', host: 'devapp.boarddecisions.com' },
    { name: 'Feature', host: 'decisionsfeature.azurewebsites.net' },
    { name: 'Master', host: 'decisionsweb-main-test.azurewebsites.net' }
];


const conditions = decisionsHosts.map(x => new chrome.declarativeContent.PageStateMatcher({
    pageUrl: { hostEquals: x.host },
}))


chrome.runtime.onInstalled.addListener(function () {

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: conditions,
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});


// chrome.browserAction.setPopup('popup');
