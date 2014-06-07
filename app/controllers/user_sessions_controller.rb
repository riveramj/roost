class UserSessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:email])
    if @user.present? && @user.authenticate(params[:password])
      sign_in(@user)
      redirect_to user_profile_path
    else
      render action: :new
    end
  end

  def destroy
    sign_out
    redirect_to new_user_session_path
  end

  def new

  end

end