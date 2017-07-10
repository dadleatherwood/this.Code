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


// .run(['$anchorScroll', function($anchorScroll) {
//   $anchorScroll.yOffset = 50;
// }])
//
// .controller('challengeBtnCtrl', ['$anchorScroll', '$location', '$scope', function($anchorScroll, $location, $scope){
//   $scope.gotoAnchor = function(x) {
//     var newHash = 'anchor' + x;
//     if($location.hash() !== newHash) {
//       $location.hash('anchor' + x)
//     } else {
//       $anchorScroll()
//     }
//   }
// }])
