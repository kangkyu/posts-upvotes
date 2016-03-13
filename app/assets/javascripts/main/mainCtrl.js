angular
.module('myAngularApp')
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
