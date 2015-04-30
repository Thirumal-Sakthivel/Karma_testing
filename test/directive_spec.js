describe('number', function() {

  var scope, element, $compile;

  beforeEach(module('sampleApp'));

  beforeEach(inject(function(_$compile_, $rootScope) {
    scope = $rootScope.$new();
    $compile =_$compile_;
    scope.testInput = "";
    element = angular.element('<input number ng-model="testInput">');

  }));

  var triggerKeyDown = function () {
    var e = $.Event("input");
    $(element).trigger(e);
  };

  it('length should be 1', function() {  
    expect(element.length).toBe(1);
  });

  it('should accept number input only', function() {
    $compile(element)(scope);
    scope.testInput = '1';
    scope.$digest();
    triggerKeyDown();
    expect(scope.testInput).toBe('1');
  });

});