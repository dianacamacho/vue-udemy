Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/practice' => 'pages#practice'
  get '/counter' => 'pages#counter'
  get '/css_demo' => 'pages#css_demo'
  get '/conditional_lists' => 'pages#conditional_lists'
  get '/v_for_list' => 'pages#v_for_list'
  get '/monster_slayer' => 'pages#monster_slayer'
end
