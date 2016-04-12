(function() {
    'use strict';

    angular
        .module('harbour')
        .controller('Harbour', Harbour);

    Harbour.$inject = ["user"];

    /* @ngInject */
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
})();