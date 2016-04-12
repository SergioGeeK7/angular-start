(function () {
    'use strict';

angular
    .module('home').config(configuration)
    
    configuration.$inject = ['$stateProvider'];
    
    /* @ngInject */
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
    
})();