(function () {
    'use strict';

    function dateString() {
        
        return dateToStringFilter;
    
        ////////////////
        function dateToStringFilter(date) {
            return date.toJSON().match(/\d+-\d+-\d+/g)[0];
        }
    }   
    
    angular
        .module('dateString.filter',[])
        .filter('dateString', dateString);
})();