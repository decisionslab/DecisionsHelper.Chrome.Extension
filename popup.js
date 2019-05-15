let url = '';

const openInEdgeLink = document.getElementById('openInEdgeLink');

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;

    openInEdgeLink.href = 'microsoft-edge:' + url;
});
