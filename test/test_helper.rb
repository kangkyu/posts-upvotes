ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)
require 'rails/test_help'

module MiniTest::Assertions

  def assert_matched_arrays expected, actual
    assert_equal expected.to_ary.sort, actual.to_ary.sort
  end
end
