angular.module('myApp',['ui.router'])

.config(function($stateProvider.$urlRouterProvider){

  $urlRouterProvider
    .otherwise('/')

  $stateProvider
})
