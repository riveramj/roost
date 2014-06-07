class UsersController < ApplicationController
  before_filter :require_current_user, only: [:me]
  def create
    @user = User.create(user_params)
    unless @user.errors.present?
      redirect_to user_profile_path
    else
      render action: :new
    end
  end

  def me
    @user = current_user
  end

  def new
    @user = User.new
  end

  def edit
    @user = current_user
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end