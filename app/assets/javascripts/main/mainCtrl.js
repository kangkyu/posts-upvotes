class MainController {
  constructor (postsFlow) {
    this.title = ''
    this.posts = postsFlow.posts
    this.postsFlow = postsFlow
  }
  addPost () {
    this.postsFlow.addOne({title: this.title, votes: 0})
    this.title = ''
  }
  voteUp (post) {
    this.postsFlow.upvoteIt(post)
  }
}
MainController.$inject = [
  'postsFlow'
]

export default MainController
