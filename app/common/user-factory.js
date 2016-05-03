(function () {
    'use strict';
    user.$inject = ["$http","$rootScope"];

    /* @ngInject */
    function user($http,$rootScope){
        
        var url = "http://localhost:4000/public/api/consulta/nits"
        var exports = {
            getNames:getNames
        };
        

        return exports;

        ////////////////
        
        function getNames() {
            activeSpinner("true");
            return $http({
                      method: 'GET',
                      url: url
                    })
                    .then( function (data) {
                        activeSpinner("false");
                        if(Array.isArray(data.data))
                            return data
                                     .data
                                     .map( function (u) { return u.nombreintegrado })
                                     .slice(0,6);
                    });
        }
        
        
        function activeSpinner(isEnable){
            $rootScope.coreConfig.spinner.enable = isEnable;
        }
        
        
    }
    
    
    
    
    
     angular
        .module('user-factory',[])
        .factory('user', user);
})();