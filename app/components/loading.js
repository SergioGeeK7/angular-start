(function () {
    'use strict';


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
                myCurrentTime : '=',
                enable : "="
                //onChange:'&' method 
                //notify: '@'  one way data binding
            },
            templateUrl: 'app/components/loading.html'
        };
        return directive;
        
        ///////////////////////////////////////////////////////
        
        function link(scope, element, attrs, controller) {
            
             var format,
             timeoutId;
            
            function updateTime() {
               var currentTime = dateFilter(new Date(), format); //element.text();
               scope.currentTime = currentTime;
            }
            
            scope.$watch("enable",function (value){
                 element[0].style.display =  value === "true" ? "block":"none";
            });

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
    
    
    
    
    
    angular
        .module('loading.directive',[])
        .directive('loading', loading);
})();