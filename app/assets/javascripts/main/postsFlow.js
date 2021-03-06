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
    object.addOne = function(post){
      return $http.post('/posts', {post: post}).success(function(data){
        object.posts.push(data);
      })
    };
    object.upvoteIt = function(post){
      return $http.put('/posts/'+ post.id  +'/upvote').success(function(data){
        post.votes += 1;
      })
    }
    return object;
  }
]);
