 describe("should do nothing now",function  () {
     
     var controller;
     var http;
     var url = /.*api\/Consulta\/Creditos/;
     
     beforeEach(module("shelter.view"));
     beforeEach(inject(function ($controller,_$httpBackend_){
         controller =  $controller("Shelter");
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
         expect([]).to.be.an("array");
     });
     
     it("should be an array of 2 positions",function (){
         expect(controller.users.length).to.be.equals(2)
     });
     
 });
