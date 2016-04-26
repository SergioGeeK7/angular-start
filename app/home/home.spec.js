describe( 'home section', function() {
    
  var scope;
  var controller;
  
  beforeEach( module( 'home.view' ) );
  
  beforeEach(inject(function ($rootScope,$controller) {
        scope = $rootScope.$new();
        controller = $controller('Home', {
                // '$scope': scope,
        });
       
  }));
    

  it('should have a dummy test', inject( function() {
      expect(true).toBe(true);
  }));
    
  it('should have a dummy test', inject( function() {
      expect(controller.sayHi).toBe("hellow");
  }));
    

});