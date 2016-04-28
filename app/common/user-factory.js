(function () {
    'use strict';
    angular
        .module('user-factory',[])
        .factory('user', user);

    user.$inject = [];

    /* @ngInject */
    function user(){
        var exports = {
            func: func,
            get:users
        };
        

        return exports;

        ////////////////

        function func() {
        }
        
        function users() {
            return [{
                name:"Sergio",
                age:23
            },{
                name:"Leonias",
                age:24
            }]
        }
    }
})();