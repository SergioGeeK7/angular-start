(function () {
    'use strict';

angular.module('app',[
    "core",
    "modal.component",
    "home.view",
    "harbour.view",
    "shelter.view",
    "hut.view"
]).config(config);
        
config.$inject = ["$urlRouterProvider"]

function config ($urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
}
    
})();