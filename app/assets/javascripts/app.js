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
      templateUrl: 'main/_main.html',
      resolve: {
        postPromise: ['postsFlow', function(postsFlow){
          return postsFlow.loadAll();
        }]
      }
    })
    .state('home', {
      url: '/',
      templateUrl: 'home/_home.html'
    });
    $urlRouterProvider.otherwise('/');
  }
]);
