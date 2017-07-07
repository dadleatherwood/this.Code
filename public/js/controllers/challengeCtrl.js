angular.module('myApp').controller('challengeCtrl', function($scope, $state, myAppSrv, $stateParams){
  myAppSrv.createUserChallenge($stateParams.id, false)
  .then(function(response) {
    console.log(response)
  })
  .catch(function(err) {
    console.error(err)
  })
  $scope.getChallengeById = function () {
    myAppSrv.getChallengeById($stateParams.id).then(function(response) { $scope.challenge = response[0]
    })
  }
  $scope.testCode = function(code) {
    try {
      eval(code.code)
      code.challenge_id = $stateParams.id
      myAppSrv.testCode(code)
      .then(function(response){
        $scope.failures = response
        if (response.length) {
          $scope.modal = {
            heading: 'Test Results',
            type: 'failure',
            message: '',
          }
          $('#challengeModal').modal()
        } else {
          myAppSrv.updateUserChallenge($stateParams.id, true)
          // Is this line causing the error?
          .then(function(){
            console.log("I'm working")
            $scope.modal = {
              heading: 'Congratulations!',
              type: 'success',
              message: 'You passed all the tests!'
            }
            $('#challengeModal').modal()
          })
        }
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


  $scope.showHint = function(id){
    myAppSrv.getHintInfo(id)
    .then(function(response){
      $scope.hintMessage = response
      $scope.modal = {
        heading: 'Hint',
        type: 'hint',
        message: response.data[0].hint
      }
      $('#challengeModal').modal()
    })
  }

  $scope.isCompleted = function(){
    return true;
  }

  $scope.getChallengeById()
})
