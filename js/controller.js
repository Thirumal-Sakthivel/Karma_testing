// Controller
angular.module('app', [])
.controller('studentMarkController', function studentMarkController($scope) {
  $scope.mark = '';
  $scope.grade = function() {
    var mark = $scope.mark;
    if (mark > 50) {
      $scope.result = 'Pass';
    } else {
      $scope.result = 'Fail';
    }
  };
});
