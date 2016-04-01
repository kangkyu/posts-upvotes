angular
.module('myAngularApp')
.controller('MainCtroller', [
  'postsFlow',
  function(postsFlow){

    this.addPost = function(){
      postsFlow.addOne({title: this.title, votes: 0});
      this.title = '';
    };
    this.voteUp = function(post){
      postsFlow.upvoteIt(post);
    };

    this.posts = postsFlow.posts;
  }
]);
