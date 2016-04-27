
describe('test home', function () {
    
    
    var controller;
    var scope;
    
    beforeEach(module('home.view'));

    beforeEach(inject(function($controller) {
          controller = $controller('Home',{});
          //scope = $rootScope.$new();
    }));

    
    it("should be done right",function () {
    	expect(1).to.be.equals(1);
        console.log("random ->"+ controller.random);
    });  
    
    it("should be a equals to a gretting",function () {
    	expect(controller.sayHi).to.be.equals("hellow");
        console.log("random ->"+ controller.random);
    });
    
    
    
    
  
});
