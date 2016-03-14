require 'test_helper'

class ListPostsTest < ActionDispatch::IntegrationTest
  fixtures :posts

  def test_load_all_posts
    assert_generates '/posts', controller: 'posts', action: 'index', format: 'json'

    get '/posts'
    assert_response 200
    assert assigns[:posts]

    assert_kind_of Array, (parsed_json = JSON.parse(response.body))
    assert_equal Post.count, parsed_json.length

    assert_matched_arrays Post.pluck(:title), parsed_json.map{|d| d["title"]}
  end

  def test_add_a_post
    assert_difference 'Post.count' do
      post '/posts', post: {title: "Add your title", votes: 0}
      assert_response 201
    end
    assert_kind_of Hash, (parsed_json = JSON.parse(response.body))
    assert_equal "Add your title", parsed_json["title"]
  end

  def test_upvote_a_post
    assert_difference 'posts(:one).reload.votes' do
      put "/posts/#{posts(:one).id}/upvote"
      assert_response 200
    end
    assert_kind_of Hash, (parsed_json = JSON.parse(response.body))
    assert_equal posts(:one).title, parsed_json["title"]
  end

  def teardown
  end
end
