// spec.js
describe('Modal test', function() {

    
    // toBeGreaterThan,toMatch,toBe,toEqual,toContain
    // expect(title.getText()).toEqual(jasmine.any(String));
    
    var btnOk = element(by.css(".btn.btn-info.ok"));
    var openmodal = element(by.css(".openmodal"));
    var title = element(by.css(".modal-title"));
    var users = element.all(by.repeater('item in vm.items'));

    beforeEach(function (){
       browser.get('http://127.0.0.1:52540/index.html#/hut');
    });

  
    it("should open a modal",function (){
          openmodal.click();
          expect(title.isPresent()).toBeTruthy();
     });  
    

    it('should have 6 elements', function() {
        openmodal.click();
        expect(users.count()).toEqual(6);
        expect(btnOk.isPresent()).toBeTruthy();
    });
    
    
});