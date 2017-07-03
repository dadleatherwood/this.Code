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
      templateUrl: './views/profile-login.html'
    })

})
