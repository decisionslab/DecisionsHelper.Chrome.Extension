(function (window) {

    if(!window.decisionsData) {
        window.decisionsData = {};
    }

    window.decisionsData.allHosts = [
        { name: 'Localhost', host: 'localhost', port: 44349 },
        { name: 'Develop', host: 'devapp.boarddecisions.com' },
        { name: 'Feature', host: 'feature.boarddecisions.com' },
        { name: 'Feature2', host: 'feature2.boarddecisions.com' },
        { name: 'Master', host: 'master.boarddecisions.com' },
        { name: 'Kaveri', host: 'kaveri.boarddecisions.com' },
        { name: 'Karnali', host: 'karnali.boarddecisions.com' },
        { name: 'Krishna', host: 'krishna.boarddecisions.com' },
        { name: 'Monetization', host: 'monetization.boarddecisions.com' },
    ];

    window.browser = window.browser || window.chrome;
    
})(window);
