angular
.module('myAngularApp')
.controller('MainCtrl', [
  '$scope',
  'postsFlow',
  function($scope, postsFlow){

    $scope.addPost = function(){
      postsFlow.addOne({title: $scope.title, votes: 0});
      $scope.title = '';
    };
    $scope.voteUp = function(post){
      postsFlow.upvoteIt(post);
    };

    $scope.posts = postsFlow.posts;
  }
]);
