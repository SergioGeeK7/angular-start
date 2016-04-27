//https://mochajs.org/#assertions

describe("test for harbour controller",function     () {
   
    var controller;
    
    beforeEach(module("harbour.view"));
    beforeEach(inject(function ($controller){
        controller = $controller("Harbour")
    }));
    
    it("should be something",function   () {
        expect(controller.users).not.to.be.empty();
    });
    
    it("should be an array",function   (done) {
        expect(controller.users).to.be.an('array');
        done();
    });
    
    
    it("should be false",function   () {
        expect(false).to.be.equals(false);
    });
    
    
    
    
    
    
    
});