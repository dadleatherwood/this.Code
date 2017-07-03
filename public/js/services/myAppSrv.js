angular.module('myApp').service('myAppSrv',function($http){
  var self = this
  this.user = {}
  this.createUser = function(user){
    return $http.post('/api/users', user).then(function(result) {
      self.user = result.data
      return result
    })
  }
  this.loginUser = function(user){
    return $http.post('/api/login', user).then(function(result) {
      self.user = result.data
      return result
    })
  }
})
