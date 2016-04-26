(function () {
    'use strict';

angular.module('app',[
    "core",
    "home.view",
    "harbour.view"
]).config(config);
        
config.$inject = ["$urlRouterProvider"]

function config ($urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
}
    
})();