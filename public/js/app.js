angular.module('myApp',['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider
    .otherwise('/')

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: './views/splash.html',
    })

    .state('login', {
      url: '/login',
      templateUrl: './views/profile-login.html',
      controller: 'loginCtrl'
    })

    .state('challenges', {
      url: '/challenges',
      templateUrl: './views/challenge-splash.html',
      controller: 'challengesCtrl',
      resolve: {
        isAuthenticated: isAuthenticated
      }
    })

    .state('challenge', {
      url: '/challenge/:id',
      templateUrl: './views/challenge-individual.html',
      controller: 'challengeCtrl',
      resolve: {
        isAuthenticated: isAuthenticated
      }
    })

    .state('leaderboard', {
      url: '/leaderboard',
      templateUrl: './views/leaderboard.html',
      controller: 'usersCtrl'
    })

})


function isAuthenticated(myAppSrv, $q, $http, $state) {
  var deferred = $q.defer()
  $http.get('/api/user')
  .then(function(response) {
    deferred.resolve()
  })
  .catch(function(err) {
    deferred.reject(err.message)
    $state.go('login')
  })
  return deferred.promise
}
