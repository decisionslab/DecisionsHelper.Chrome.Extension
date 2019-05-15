let url = '';

const openInEdgeLink = document.getElementById('openInEdgeLink');



var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 150,
	height : 150
});

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;

    openInEdgeLink.href = 'microsoft-edge:' + url;

    qrcode.makeCode(url);
});



