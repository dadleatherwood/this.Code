angular.module('myApp').controller('challengeCtrl', function($scope, $state, myAppSrv, $stateParams){
  $scope.getChallengeById = function () {
    myAppSrv.getChallengeById($stateParams.id).then(function(response) { $scope.challenge = response[0]
    })
  }
  $scope.testCode = function(code) {
    try {
      eval(code.code)
      code.challenge_id = $stateParams.id
      myAppSrv.testCode(code).then(function(response){
        $scope.failures = response
        if (response.length) {
          $scope.modal = {
            heading: 'Test Results',
            type: 'failure',
            message: '',
          }
        } else {
          $scope.modal = {
            heading: 'Congratulations!',
            type: 'success',
            message: 'You passed all the tests!'
          }
        }
        $('#challengeModal').modal()
      })
    } catch (err){
      $scope.modal = {
        heading: 'Syntax Error',
        type: 'error',
        message: err.message,
      },
      $scope.failures = []
      $('#challengeModal').modal()
    }
  }
  $scope.getChallengeById()
  // do I need to put the test inputs/outputs here to be able to show tests to users?
})
