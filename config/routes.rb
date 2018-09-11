Rails.application.routes.draw do
  resources :recipes
  namespace :api do
    resources :users
    post 'user_token' => 'user_token#create'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
