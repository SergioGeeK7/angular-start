describe( 'home section', function() {
    
  var scope;
  var controller;
  
  beforeEach( module( 'home.view' ) );
  
  /*beforeEach( inject(function ($rootScope,$controller) {
        scope = $rootScope.$new();
        controller = $controller('Home', {
                // '$scope': scope,
        });
      console.log(typeof $controller) 
  }));*/
    
    /* beforeEach(inject(function ($rootScope) {
            $scope = $rootScope.$new();
        }));*/
    

  it('should have a dummy test',  function() {
      expect(true).toBe(true);
  });
    
  //it('should have a dummy test 2', inject( function($controller) {
      //expect(controller.sayHi).toBe("hellow");
  //}));
    

});