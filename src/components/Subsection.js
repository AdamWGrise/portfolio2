import React from 'react';
import projectData from './projectData';
import ProjectBox from './ProjectBox';

function Subsection(props) {
    const projectComponents = projectData.map((project) => {
        console.log(project)
        return (
            <ProjectBox key={project.id} image={project.image} demoLink={project.demoLink} demoName={project.demoName} codeLink={project.codeLink} codeName={project.codeName} category={project.category} />
        )
    }
    );
    return(
        <div>
            <div className='better-hr'></div>
            <h4 className='heading'>{props.title}</h4>
            <p>{props.subheading}</p>
            {projectComponents}
            {/* Set this up so the projectData will determine which subsections each of the links will go in. */}
        </div>
    )
}

export default Subsection