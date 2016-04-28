(function () {
    'use strict';
    
    Controller.$inject = ["credito",'dateStringFilter'];
    
    function Controller (credito,dateStringFilter) {
       var vm = this;
       vm.users = [];
       vm.currentDate = dateStringFilter(new Date());
       getUsers();
        
        
        
        function getUsers () {
            
            credito
                .get()
                .then(function (data){
                    vm.users = data.data;
                });
        }
        
        
    }
    
    
    router.$inject = ['$stateProvider'];
    
    function router ($stateProvider) {
         $stateProvider.state('shelter', {
                url: '/shelter',
                views: {
                    "main": {
                        controller: 'Shelter as vm',
                        templateUrl: 'app/shelter/shelter.html'
                    }
                }
            });
    }
    
    angular
        .module('shelter.view',['core',"credito-factory","dateString.filter"])
        .config(router)
        .controller("Shelter",Controller)
    
    
    
})()