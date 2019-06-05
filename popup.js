(function () {

    const openInEdgeLink = $('#openInEdgeLink');
    const otherLinks = $('#otherLinks');
    const qrCodeElement = $('#qrCode');

    function renderPopupBody(tabs) {

        var urlStr = tabs[0].url;

        openInEdgeLink.attr('href', 'microsoft-edge:' + urlStr);

        const host = (new URL(urlStr)).host;
        if (!window.decisionsData.allHosts.find(x => host.toLowerCase().indexOf(x.host.toLowerCase()) !== -1)) {
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
            return `<a class="block p-2 mt-2 text-center border-gray-400 text-gray-700 border border-2 hover:bg-blue-500 hover:text-white" href="${newUrl}" target="_blank">Switch to ${x.name}</a>`
        }).join(' ');

        $('#defaultImg').hide();

        otherLinks.append(elements);
        var qrCode = new QRCode(qrCodeElement[0], {
            width: 150,
            height: 150
        });

        qrCode.makeCode(urlStr);

    }

    window.browser.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
        setTimeout(() => {
            renderPopupBody(tabs);
        }, 0);

    });


    function generateDashboardUrls() {

        $('#envHeaderTxt').text('Dashboards:');
        qrCodeElement.hide();
        $('#defaultImg').show();

        const elements = window.decisionsData.allHosts.map(x => {

            newUrl = new URL(`https://${x.host}:${x.port ? x.port : 443}/web/#/dashboard`);
            return `<a class="block p-2 mt-2 text-center border-gray-400 text-gray-700 border border-2 hover:bg-blue-500 hover:text-white" href="${newUrl}" target="_blank">${x.name} Dashboard</a>`
        }).join(' ');

        otherLinks.append(elements);
    }
})();

