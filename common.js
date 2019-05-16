(function (window) {

    if(!window.decisionsData) {
        window.decisionsData = {};
    }

    window.decisionsData.allHosts = [
        { name: 'Localhost', host: 'localhost', port: 44349 },
        { name: 'Develop', host: 'devapp.boarddecisions.com' },
        { name: 'Feature', host: 'decisionsfeature.azurewebsites.net' },
        { name: 'Master', host: 'decisionsweb-main-test.azurewebsites.net' }
    ];

    window.browser = window.browser || window.chrome;
    
})(window);
