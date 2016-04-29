(function () {
    'use strict';
    user.$inject = ["$http"];

    /* @ngInject */
    function user($http){
        
        var url = "http://localhost:4000/public/api/consulta/nits"
        var exports = {
            getNames:getNames
        };
        

        return exports;

        ////////////////
        
        function getNames() {
            return $http({
                      method: 'GET',
                      url: url
                    })
                    .then( function (data) {
                        if(Array.isArray(data.data))
                            return data.data.map((u)=>u.nombreintegrado).slice(0,6);
                    });
        }
    }
    
    
    
    
    
     angular
        .module('user-factory',[])
        .factory('user', user);
})();