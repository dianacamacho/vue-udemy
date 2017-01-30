Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/practice' => 'pages#practice'
  get '/counter' => 'pages#counter'
  get '/css_demo' => 'pages#css_demo'
end
