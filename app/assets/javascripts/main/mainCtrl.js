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
])
.controller('MainCtrl', [
  '$scope',
  'postsFlow',
  function($scope, postsFlow){

    $scope.addPost = function(){
      $scope.posts.push({title: $scope.title, votes: 0});
      $scope.title = '';
    };
    $scope.voteUp = function(post){
      post.votes += 1;
    };

    $scope.posts = postsFlow.posts;
  }
]);
