Kula::Application.routes.draw do

  resources :listings

  get "listing/listing"
  delete :logout, to: 'user_sessions#destroy', as: 'logout'
  resources :user_sessions, only: [:new, :create]

  get :me, to: 'users#me', as: 'user_profile'
  resources :users
  root 'home#index'
  get ':id', to: 'listings#show'
  post 'listings/:id', to: 'listings#inquire'

end
