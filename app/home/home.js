(function () {
    'use strict';

    configuration.$inject = ['$stateProvider'];
        
    function configuration ($stateProvider) {
        $stateProvider.state('home', {
                url: '/home',
                views: {
                    "main": {
                        controller: 'Home as vm',
                        templateUrl: 'app/home/home.html'
                    }
                }
            });
    }
    
    //home.$inject = [];
    
    function home(){
        var vm = this;
        vm.sayHi = "hellow";
        vm.random = Math.random() * 10;
        activate();

        ////////////////

        function activate() {
            
        }
    }
    

angular
    .module('home.view',["core"])
    .config(configuration)
    .controller('Home', home)
    
    
})()