function configRoutes ($stateProvider, $urlRouterProvider){
  $stateProvider
    .state('main', {
      url: '/main',
      controller: 'MainCtroller',
      controllerAs: 'mainCtrl',
      templateUrl: 'main/_main.html',
      resolve: {
        postPromise: ['postsFlow', function(postsFlow){
          return postsFlow.loadAll()
        }]
      }
    })
    .state('home', {
      url: '/',
      templateUrl: 'home/_home.html'
    })
  $urlRouterProvider.otherwise('/')
}
configRoutes.$inject = [
  '$stateProvider',
  '$urlRouterProvider'
]

export default configRoutes