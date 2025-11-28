class HomeController < ApplicationController
  def index
    @mock_projects = [
      {
        id: 1,
        title: "Projeto de Visualização 3D",
        description: "Exploração de superfícies e teoremas com gráficos interativos."
      },
      {
        id: 2,
        title: "Sistema de Entrega de Trabalhos",
        description: "Protótipo do sistema usado para submissão de PDFs e feedback."
      },
      {
        id: 3,
        title: "Portal de Disciplinas",
        description: "Visão geral das disciplinas e materiais do curso."
      }
    ]
  end
end