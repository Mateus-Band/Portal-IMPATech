class ApplicationController < ActionController::Base
  # Permitir navegadores modernos
  allow_browser versions: :modern
  
  # Invalidar cache quando importmap muda
  stale_when_importmap_changes
end