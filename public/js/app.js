angular.module('myApp',['ui.router'])

.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider
    .otherwise('/')

  $stateProvider

    .state('home', {
      url: '/',
      templateUrl: './views/splash.html'
    })

    .state('sign-up', {
      url: '/sign-up',
      templateUrl: './views/sign-up.html'
    })

    .state('login', {
      url: '/login',
      templateUrl: './views/login-form.html'
    })
    
})
