class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def require_current_user
    unless session[:user_id] && current_user
      redirect_to new_user_session_path
    end
  end

  def current_user
    @current_user ||= User.find(session[:user_id])
  end
  helper_method :current_user
end
