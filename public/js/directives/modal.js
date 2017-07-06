angular.module('myApp').directive('modal', function(){
  return {
    templateUrl: "views/modal.html",
    restrict: 'E',
    scope: {
      modal: '=',
      failures: '='
    },
    controller: function($scope){

    }
  }
})
