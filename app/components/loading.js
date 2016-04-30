(function () {
    'use strict';

    angular
        .module('loading.directive',[])
        .directive('loading', loading);

    loading.$inject = ['$interval','dateFilter'];

    /* @ngInject */
    function loading($interval,dateFilter) {
        var directive = {
           /* bindToController: true,
            controller: Controller,
            controllerAs: 'vm',*/
            link: link,
            restrict: 'E',
            scope: {
                sayHi : "=",
                customerInfo: '=info',
                myCurrentTime : '='
            },
            templateUrl: 'app/components/loading.html'
        };
        return directive;

        function link(scope, element, attrs, controller) {
            
             var format,
             timeoutId;

            function updateTime() {
              element.text(dateFilter(new Date(), format));
            }

            scope.$watch("myCurrentTime", function(value) {
              //format = attrs.myCurrentTime;
              format = scope.myCurrentTime;
              updateTime();
            });

            element.on('$destroy', function() {
              $interval.cancel(timeoutId);
            });

            // start the UI update process; save the timeoutId for canceling
            timeoutId = $interval(function() {
              updateTime(); // update DOM
            }, 1000);
            
        }
    }

    //Controller.$inject = ['dependencies'];

    /* @ngInject */
    function Controller(dependencies) {
        
        
    }
})();