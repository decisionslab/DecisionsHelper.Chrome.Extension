

const decisionsHosts = [
    { name: 'Localhost', host: 'localhost', port: 44349 },
    { name: 'Develop', host: 'devapp.boarddecisions.com' },
    { name: 'Feature', host: 'decisionsfeature.azurewebsites.net' },
    { name: 'Master', host: 'decisionsweb-main-test.azurewebsites.net' }
];


const openInEdgeLink = document.getElementById('openInEdgeLink');



var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 150,
	height : 150
});


const otherLinks = $('#otherLinks');


chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var urlStr = tabs[0].url;

    openInEdgeLink.href = 'microsoft-edge:' + urlStr;

    console.log(urlStr);
    if(urlStr == "about:blank") {
        generateDashboardUrls();
        return;
    }

    const url = new URL(urlStr);

    const elements = decisionsHosts.map(x => {

        newUrl = new URL(urlStr.replace(url.hostname, x.host));
        if(x.port) {
            newUrl.port = x.port;
        } else {
            newUrl.port = 443;
        }
        return `<a class="block p-2 mt-2 hover:text-blue" style="border: solid 1px silver" href="${newUrl}" target="_blank">Open same page in ${x.name}</a>`
    }).join(' ');

    $('#defaultImg').hide();

    otherLinks.append(elements);
    qrcode.makeCode(urlStr);
});


function generateDashboardUrls() {

    $('#envHeaderTxt').text('Dashboards:');
    $('#qrcode').hide();
    $('#defaultImg').show();

    const elements = decisionsHosts.map(x => {

        newUrl = new URL(`https://${x.host}:${x.port? x.port : 443}/web/#/dashboard` );
        return `<a class="block p-2 mt-2 hover:text-blue" style="border: solid 1px silver" href="${newUrl}" target="_blank">${x.name} Dashboard</a>`
    }).join(' ');

    otherLinks.append(elements);
}

