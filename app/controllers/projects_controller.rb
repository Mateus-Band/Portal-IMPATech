class ProjectsController < ApplicationController
  def index
    @projects = [
      { id: 1, title: 'Vis 3D' },
      { id: 2, title: 'Submission System' }
    ]
  end
end