describe("Unit: Testing Directives", function() {
  this.timeout(15000);
  var compile;
  var tag = '<loading my-current-time="format" class="loading" enable="enable"></loading>';
  var scope;
  var element;
    
  beforeEach(function (){
      module('templates');
      module('loading.directive');
      inject(function($compile, $rootScope,$templateCache) {
          var compiled =  getCompiledElement($rootScope.$new(),$compile);
          element = compiled.element;
          scope = compiled.scope;
     }
    );
  });
    
    function getCompiledElement($scope,$compile){
        
      var compiledElement = $compile(tag)($scope);
      $scope.$digest();
      
      return {
          scope   : compiledElement.isolateScope(),
          element : compiledElement
      };
   }
   
  it("should have tag img", function() {
     expect(element.html()).to.match(/img/i);
  });
    
  it("should show hour format",function (){
      scope.myCurrentTime = 'h:mm:ss a';
      scope.$digest();
      /////////////////////
      expect(scope.currentTime).to.match(/\d+:\d+:\d+ (AM|PM)/);
  });
    
  it("should show full date",function (){
      scope.myCurrentTime = 'M-dd-yy';
      scope.$digest();
      /////////////////////
      expect(scope.currentTime).to.match(/\d+-\d+-\d+/);
  });
    
  it("should change time",function (done){
      scope.myCurrentTime = "h:mm:ss a";
      scope.$digest();
      /////////////////////
      var currentTime = scope.currentTime;
      scope.myCurrentTime = " h:mm:ss a";
      
      setTimeout(function (){
          scope.$digest();
          expect(scope.currentTime === currentTime).to.be.false()
          done();
      },2000);
  });
    
    /*
    it('should increment value on click of button', function () {
      // jqLite’s triggerHandler
      
      
      var spanElement = directiveElem.find('span');
      expect(spanElement.text()).toEqual(scope.text);
      /////////////////
      
      scope.value=10;
      var button = directiveElem.find('button');

      button.triggerHandler('click');
      scope.$digest();

      expect(scope.value).toEqual(11);
    });
    */
    
    // http://www.sitepoint.com/angular-testing-tips-testing-directives/

});