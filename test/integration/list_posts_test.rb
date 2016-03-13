require 'test_helper'

class ListPostsTest < ActionDispatch::IntegrationTest
  fixtures :posts

  def test_load_all_posts
    assert_generates '/posts', controller: 'posts', action: 'index', format: 'json'

    get '/posts'
    assert_response :success
    assert assigns[:posts]

    assert_kind_of Array, (parsed_json = JSON.parse(response.body))
    assert_equal Post.count, parsed_json.length

    assert_matched_arrays Post.pluck(:title), parsed_json.map{|d| d["title"]}
  end
end
