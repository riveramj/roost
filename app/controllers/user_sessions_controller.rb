class UserSessionsController < ApplicationController
  def create
    @user = User.find_by(email: params[:email]).authenticate(params[:password])
    if @user.present?
      session[:user_id] = @user.id
      redirect_to user_profile_path
    else
      #todo some errors i reckon
      render action: :new
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to new_user_session_path
  end

  def new

  end
end