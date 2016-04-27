(function () {
    'use strict';

    factory.$inject = ["$http"];

    function factory($http){
        var url = "http://localhost:4000/public/api/Consulta/Creditos"
        var exports = {
            get:get
        };
        

        return exports;

        ////////////////
        
        function get() {
           return $http({
                  method: 'GET',
                  url: url,
                  //data,headers 
                });
        }
    }
    

 angular
    .module('credito-factory',[])
    .factory('credito', factory);
    
})();