angular.module('autonext', [])

sampleApp.directive('number', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attr, form) {      
      element.bind('input', function(e) {       
        $(this).val($(this).val().replace(/[^0-9]/gi, ''));
      });
    }
  }
});
