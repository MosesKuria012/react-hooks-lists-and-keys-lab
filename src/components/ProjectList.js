import React from 'react'
import ProjectItem from './ProjectItem'

function ProjectList({ projects }) {
  console.log(projects)
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            id={project.id}
            name={project.name}
            about={project.about}
            technologies={project.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          />
        ))}
      </div>
    </div>
  )
}

export default ProjectList
