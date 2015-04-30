describe('studentMarkController', function() {
  beforeEach(module('app'));

  var $controller, $scope;

  beforeEach(inject(function(_$controller_,$rootScope){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $scope = $rootScope.$new();
    $controller = _$controller_;
    var controller = $controller('studentMarkController', { $scope: $scope });
  })); 

  describe('$scope.grade', function() {
    it('sets the student mark is 60', function() {      
      $scope.mark = '60';
      $scope.grade();
      expect($scope.result).toEqual('Pass');
    });

    it('sets the mark is 40', function() {
      $scope.mark = '40';
      $scope.grade();
      expect($scope.result).toEqual('Fail');
    });
  });
});













// // testing controller
//     describe('MyController', function() {
//     var $httpBackend, $rootScope, createController;
     
//     beforeEach(inject(function($injector) {
//     // Set up the mock http service responses
//     $httpBackend = $injector.get('$httpBackend');
//     // backend definition common for all tests
//     $httpBackend.when('GET', '/auth.py').respond({userId: 'userX'}, {'A-Token': 'xxx'});
     
//     // Get hold of a scope (i.e. the root scope)
//     $rootScope = $injector.get('$rootScope');
//     // The $controller service is used to create instances of controllers
//     var $controller = $injector.get('$controller');
     
//     createController = function() {
//     return $controller('MyController', {'$scope' : $rootScope });
//     };
//     }));
     
     
//     afterEach(function() {
//         //Verifies that all of the requests defined via the expect api were made. If any of the requests were not made,
//         // verifyNoOutstandingExpectation throws an exception.
//     $httpBackend.verifyNoOutstandingExpectation();
//     //Verifies that there are no outstanding requests that need to be flushed.
//     $httpBackend.verifyNoOutstandingRequest();
//     });
     
     
//     it('should fetch authentication token', function() {
//     $httpBackend.expectGET('/auth.py');
//     var controller = createController();
//     $httpBackend.flush();
//     });
     
     
//     it('should send msg to server', function() {
//     var controller = createController();
//     $httpBackend.flush();
     
    
//     $httpBackend.expectPOST('/add-msg.py', 'message content').respond(201, '');
//     $rootScope.saveMessage('message content');
//     expect($rootScope.status).toBe('Saving...');
//     $httpBackend.flush();
//     expect($rootScope.status).toBe('');
//     });    
     
   
//     });