angular
.module('myAngularApp', ['ui.router'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('main', {
      url: '/main',
      controller: 'MainCtrl',
      templateUrl: '/main.html'
    })
    .state('home', {
      url: '/',
      templateUrl: '/home.html'
    });
    $urlRouterProvider.otherwise('/');
  }
]);
