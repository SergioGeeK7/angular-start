(function () {
    'use strict';
    
    Controller.$inject = ['$uibModalInstance',"items"];
    
    function Controller($uibModalInstance,items){
        
    
        var vm = this;
        vm.items = items;
        vm.selected = {item : void(0)};
 
        vm.ok = function (item)
        {
            $uibModalInstance.close(item);
        };

        vm.close = function () 
        {
            $uibModalInstance.dismiss('cancel');
        };
        
    }
    
    
    factory.$inject = ["$uibModal"];
    
    function factory ($uibModal){
        
        return {
            openModal:openModal
        };
        
        
        function openModal(data) {
              
            var modalInstance = $uibModal.open({
                  animation   :  true,
                  templateUrl : 'app/components/modal.html',
                  controller  : 'ModalCtrl as vm',
                  size        :  void(0) ,
                  resolve     : {
                              items: function () {
                                 return data;
                              }
                  }
            });
            
            return modalInstance;
        }
        
        
    }


angular
    .module('modal.component',['core'])
    .factory('Modal',factory)
    .controller('ModalCtrl', Controller)

})();