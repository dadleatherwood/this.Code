angular.module('myApp',['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider
    .otherwise('/')

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: './views/splash.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: './views/profile-login.html',
      controller: 'loginCtrl'
    })

    .state('challenges', {
      url: '/challenges',
      templateUrl: './views/challenge-splash.html',
      controller: 'challengesCtrl'
    })

    .state('challenge', {
      url: '/challenge',
      templateUrl: './views/challenge-individual.html',
      controller: 'challengeCtrl'
    })


})
