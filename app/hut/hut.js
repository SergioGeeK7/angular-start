(function () {
    'use strict';
    
    hut.$inject = ["$scope", "user", "Modal"];
    
    function hut($scope,user,Modal){
        var vm = this;
        vm.openModal = showNames;
        
        ////////////////
        
        function showNames(){
            
            user
                .getNames()
                .then(function (names){
                    openModal(names);
            });
        }
        
        function openModal(names){
            
            Modal.openModal(names)
                 .result
                 .then(function (selectedItem) {
                    console.log(selectedItem)
                 },function () {
                    console.log("abort");
                 });
        }
            
    }
    
    
    route.$inject = ['$stateProvider'];
        
    function route ($stateProvider) {
        $stateProvider.state('hut', {
                url: '/hut',
                views: {
                    "main": {
                        controller: 'Hut as vm',
                        templateUrl: 'app/hut/hut.html'
                    }
                }
            });
    }

angular
    .module('hut.view',["core"])
    .config(route)
    .controller('Hut', hut)

})()