 describe("should do nothing now",function  () {
     
     var controller;
     var http;
     var url = /.*api\/Consulta\/Creditos/;
     var mockStringFilter;
     
     
    // var callback = sinon.stub();
    // callback.withArgs(42).returns(1);
    // callback.withArgs(1).throws("TypeError");
     
     
     
     beforeEach(module("shelter.view"));
     beforeEach(inject(function ($controller,_$httpBackend_){
         
         mockStringFilter = sinon.spy(); //   sinon.spy(onObj, "method"); sinon.spy(myFunc);
         
         controller =  $controller("Shelter",{
             dateStringFilter : mockStringFilter
         });
         http = _$httpBackend_;
         
         http.when('GET', url).respond([
           {
            id: 1,
            name: 'Bob'
          }, 
          {
            id: 2,
            name: 'Jane'
          }]);
         http.flush();
     }));
     
     
     it("should be an array",function (){
         expect(controller.users).to.be.an("array");
     });
     
     it("should be an array of 2 positions",function (){
         expect(controller.users.length).to.be.equals(2);
         expect(controller.users[0].name).to.be.equals("Bob");
     });
     
     it("should be called ",function (){
         expect(mockStringFilter.called).to.be.equals(true);
         expect(mockStringFilter.called).to.be.ok();
     });
     
 });
