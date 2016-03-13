angular
.module('myAngularApp', ['ui.router', 'templates'])
.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('main', {
      url: '/main',
      controller: 'MainCtrl',
      templateUrl: 'main/_main.html'
    })
    .state('home', {
      url: '/',
      templateUrl: 'home/_home.html'
    });
    $urlRouterProvider.otherwise('/');
  }
]);
