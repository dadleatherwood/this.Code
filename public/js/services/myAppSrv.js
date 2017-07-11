angular.module('myApp').service('myAppSrv',function($http, $rootScope){
  var self = this
  // Remove guest id later
  this.user = {}


  this.createUser = function(user){
    return $http.post('/api/users', user)
    .then(result => {
      $rootScope.$emit('loggedIn', result.data[0])
      self.user = result.data[0]
      return result
    })
  }


  this.loginUser = function(user){
    return $http.post('/api/login', user)
    .then(result => {
      $rootScope.$emit('loggedIn', result.data[0])
      self.user = result.data[0]
      return result
    })
  }


  this.getChallenges = function(challenges){
    return $http.get('/api/challenges?user_id=' + self.user.id)
    .then(result => {
      var groupedResults = {beginner: [], intermediate: [], master: []}
      for (var i = 0; i < result.data.length;i++){
        if(result.data[i].difficulty === 'beginner') {
          groupedResults.beginner.push(result.data[i])
        } else if(result.data[i].difficulty === 'intermediate') {
          groupedResults.intermediate.push(result.data[i])
        } else if(result.data[i].difficulty === 'master') {
          groupedResults.master.push(result.data[i])
        }
      }
      return groupedResults
    })
  }


  this.getChallengeById = function(id){
    return $http.get('/api/challenge/' + id)
    .then(result => {
      return result.data
    })
  }


  this.testCode = function(code){
    return $http.post('/api/test', code)
    .then(result => {
      try {
        var func = eval(`(function outer() {return ${code.code}})()`)
        if (typeof func === 'function') {
          var failures = []
          for (var test of result.data) {
            var answer = func.apply(null, test.test_inputs)
            if (answer !== test.test_outputs) {
              failures.push("expected " + test.test_outputs + "; received " + answer + " --- Failed Test")
            }
          }
          return failures
        } else {
          return ["Please write a function declaration"]
        }
      } catch (err) {
        return [err.message]
      }
    })
  }


  this.getHintInfo = function(id){
    return $http.get('/api/hint/' + id.id)
    .then(result => {
      return result
    })
  }


  this.createUserChallenge = function(challengeId){
    return $http.post('/api/user/challenge/', {challenge_id: challengeId, user_id: self.user.id})
  }


  this.updateUserChallenge = function(challengeId, challengeValue){
    return $http.put('/api/user/challenge/', {challenge_id: challengeId, user_id: self.user.id, completed: true, value: challengeValue})
  }


  this.getUsers = function(){
    return $http.get('/api/users/')
    .then(result => {
      return result.data
    })
  }


  this.getDaysInCode = function(){
    return $http.get('/api/user/days/' + this.user.id)
    .then(result => {
      $rootScope.$emit('daysOfCode', result.data[0].days_of_code)
      return result.data[0]
    })
  }



})
