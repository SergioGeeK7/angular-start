(function () {
    'use strict';

    route.$inject = ['$stateProvider'];
 
    function route ($stateProvider) {
          $stateProvider.state('harbour', {
                url: '/harbour',
                views: {
                    "main": {
                        controller: 'Harbour as vm',
                        templateUrl: 'app/harbour/harbour.html'
                    }
                }
            });
    }
    
    Harbour.$inject = ["user"];
    
    function Harbour(user){
        var vm = this;
        vm.hi = 'Yeah !!!';
        vm.users = getUsers();
        console.log(vm.users);
        

        activate();

        ////////////////

        function activate() {
            
        }
        
        function getUsers (){
            return user.get();
        }
        
    }
    
    
angular
    .module('harbour.view',["user-factory"])
    .config(route)
    .controller('Harbour', Harbour);
       
})();