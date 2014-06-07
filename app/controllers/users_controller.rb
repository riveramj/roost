class UsersController < ApplicationController
  before_filter :require_current_user, only: [:me]
  def create
    @user = User.create(params)
  end

  def me
    @user = current_user
  end

end