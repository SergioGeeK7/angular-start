(function () {
    'use strict';

angular
    .module('harbour').config(route)
    
    route.$inject = ['$stateProvider'];
    
    /* @ngInject */
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
    
})()