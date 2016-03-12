angular
.module('myAngularApp')
.controller('MainCtrl', [
  '$scope',
  function($scope){

    $scope.addPost = function(){
      $scope.posts.push({title: $scope.title, votes: 0});
      $scope.title = '';
    };
    $scope.voteUp = function(post){
      post.votes += 1;
    };

    $scope.posts = [
      {
        title: 'The Other Works of George Martin',
        votes: 10
      },
      {
        title: 'Food Origins',
        votes: 11
      },
      {
        title: 'It\'s a College Basketball Vacation',
        votes: 2
      },
      {
        title: 'Sports and Measures',
        votes: 10
      },
      {
        title: 'A Short History of Brokered Conventions',
        votes: 8
      }
    ]
  }
]);
