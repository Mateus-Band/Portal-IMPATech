Rails.application.routes.draw do
  # Health check
  get "up" => "rails/health#show", as: :rails_health_check

  # Rotas principais
  root "home#index"
  
  # Disciplinas
  get "disciplines", to: "disciplines#index"
  get "disciplines/:slug", to: "disciplines#show", as: :discipline
  
  # Projetos
  get "projects", to: "projects#index"
  
  # Admin
  get "admin", to: "admin#index"
end