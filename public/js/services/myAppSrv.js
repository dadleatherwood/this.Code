angular.module('myApp').service('myAppSrv',function($http, $rootScope){
  var self = this
  this.user = {}
  this.createUser = function(user){
    return $http.post('/api/users', user).then(result => {
      self.user = result.data
      return result
    })
  }
  this.loginUser = function(user){
    return $http.post('/api/login', user).then(result => {
      $rootScope.$emit('loggedIn', null)
      self.user = result.data
      return result
    })
  }
  this.getChallenges = function(challenges){
    return $http.get('/api/challenges').then(result => {
      console.log(result.data)
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
    return $http.get('/api/challenge/' + id).then(result => {
      return result.data
    })
  }
  this.testCode = function(code){
    return $http.post('/api/test', code).then(result => {
      try {

        var func = eval(`(function outer() {return ${code.code}})()`)
        console.log(typeof func === 'function')
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
    .then(result => {return result})
  }
})
