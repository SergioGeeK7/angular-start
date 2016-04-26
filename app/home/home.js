(function () {
    'use strict';

    configuration.$inject = ['$stateProvider'];
        
    function configuration ($stateProvider) {
        $stateProvider.state('home', {
                url: '/home',
                views: {
                    "main": {
                        controller: 'Home as homeCtrl',
                        templateUrl: 'app/home/home.html'
                    }
                }
            });
    }
    
    //home.$inject = [];
    
    function home(){
        var vm = this;
        vm.sayHi = "hellow";
        activate();

        ////////////////

        function activate() {
            
        }
    }
    

angular
    .module('home.view',[])
    .controller('Home', home)
    .config(configuration)
    
})()