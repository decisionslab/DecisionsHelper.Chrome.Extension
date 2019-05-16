(function () {

    const openInEdgeLink = $('#openInEdgeLink');
    const otherLinks = $('#otherLinks');
    const qrCodeElement = $('#qrCode');

    chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
        var urlStr = tabs[0].url;

        openInEdgeLink.href = 'microsoft-edge:' + urlStr;

        console.log(urlStr);
        if (urlStr == "about:blank") {
            generateDashboardUrls();
            return;
        }

        const url = new URL(urlStr);

        const elements = window.decisionsData.allHosts.map(x => {

            newUrl = new URL(urlStr.replace(url.hostname, x.host));
            if (x.port) {
                newUrl.port = x.port;
            } else {
                newUrl.port = 443;
            }
            return `<a class="block p-2 mt-2 hover:text-blue" style="border: solid 1px silver" href="${newUrl}" target="_blank">Open same page in ${x.name}</a>`
        }).join(' ');

        $('#defaultImg').hide();

        otherLinks.append(elements);
        var qrCode = new QRCode(qrCodeElement[0], {
            width: 150,
            height: 150
        });
    
        qrCode.makeCode(urlStr);
    });


    function generateDashboardUrls() {

        $('#envHeaderTxt').text('Dashboards:');
        qrCodeElement.hide();
        $('#defaultImg').show();

        const elements = window.decisionsData.allHosts.map(x => {

            newUrl = new URL(`https://${x.host}:${x.port ? x.port : 443}/web/#/dashboard`);
            return `<a class="block p-2 mt-2 hover:text-blue" style="border: solid 1px silver" href="${newUrl}" target="_blank">${x.name} Dashboard</a>`
        }).join(' ');

        otherLinks.append(elements);
    }
})();

