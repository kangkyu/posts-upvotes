angular
.module('myAngularApp')
.factory('postsFlow', [
  '$http',
  function($http){
    var object = {
      posts: []
    };
    object.loadAll = function(){
      return $http.get('/posts').success(function(data){
        angular.copy(data, object.posts);
      })
    };
    return object;
  }
]);
