angular.module('myApp')

.controller('myAppCtrl',
function($scope, $state, myAppSrv){
  $scope.test = "I am working"
  $scope.loggedIn = {loggedIn: false}
  $scope.checkLoggedIn = function(loggedIn){
    console.log(loggedIn);
    console.log(myAppSrv.user);
    if (myAppSrv.user.id) {
      console.log("Working!!!")
      $state.go('challenges')
    } else {
      console.log("Crap!")
      $state.go('login')
    }
  }
})


.run(['$anchorScroll', function($anchorScroll) {
  $anchorScroll.yOffset = 50;
}])
