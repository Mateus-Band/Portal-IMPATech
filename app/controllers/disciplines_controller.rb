class DisciplinesController < ApplicationController
  def index
    @disciplines = [
      { slug: 'calculo-i', name: 'Cálculo I' },
      { slug: 'algebra-linear', name: 'Álgebra Linear' },
      { slug: 'prog-intro', name: 'Introdução à Programação' }
    ]
  end

  def show
    @slug = params[:slug]
    
    disciplines_data = {
      'calculo-i' => { title: 'Cálculo I', desc: 'Descrição do Cálculo I' },
      'algebra-linear' => { title: 'Álgebra Linear', desc: 'Descrição da Álgebra Linear' },
      'prog-intro' => { title: 'Introdução à Programação', desc: 'Descrição da Programação' }
    }

    if disciplines_data[@slug]
      @discipline = disciplines_data[@slug]
    else
      render file: "#{Rails.root}/public/404.html", status: :not_found, layout: false
    end
  end
end