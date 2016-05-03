(function () {
    'use strict';

angular
    .module('core',["ui.router","ui.bootstrap","loading.directive"])
   .run(run);
    
    run.$inject= ["$rootScope"]
    function run ($rootScope) {
        $rootScope.coreConfig = {
            spinner: {
                format:'M/d/yy h:mm:ss a',
                enable : "false"
            }
        };
    }
    
    
})()