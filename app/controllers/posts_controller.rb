class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def create
    @post = Post.create(params.require(:post).permit(:title, :votes))
    render 'show'
  end

  def upvote
    @post = Post.find(params[:id])
    @post.increment!(:votes)
    render 'show'
  end
end
