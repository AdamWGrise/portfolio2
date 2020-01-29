import React from 'react';

function ProjectBox(props) {
    return(
        <div className='project-box'>
            <div className="project-img">{props.image}</div>
            <div className="project-demo-link"><a href={props.demoLink}>{props.demoName}</a></div>
            <div className="project-code-link"><a href={props.codeLink}>{props.codeName}</a></div>
        </div>
    )
}

export default ProjectBox