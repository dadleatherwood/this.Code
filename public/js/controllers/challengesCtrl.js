angular.module('myApp').controller('challengesCtrl', function($scope, $state, myAppSrv){
  $scope.getChallenges = function(){
    myAppSrv.getChallenges()
    .then(response => {
      $scope.challenges = response
      return response
    })
  }

  $scope.getDaysInCode = function(){
    myAppSrv.getDaysInCode()
    .then(response => {
      $scope.daysInCode = response.days_of_code
    })
    .catch(err => {
      console.log(err)
    })
  }

  $scope.getChallenges()
  $scope.getDaysInCode()
})
