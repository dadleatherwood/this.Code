angular.module('myApp').controller('challengesCtrl', function($scope, $state, myAppSrv){
  $scope.getChallenges = function(){
    myAppSrv.getChallenges()
    .then(response => {
      $scope.challenges = response
      return response
      console.log(response)
    })
  }

  $scope.getChallenges()
})
