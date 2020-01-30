import React from 'react';
import imgTrain from '../assets/images/portfolio-thumb-train.png';
import imgGithub from '../assets/images/portfolio-thumb-github.png';
import imgResume from '../assets/images/portfolio-thumb-resume.png';
import imgLinkedin from '../assets/images/portfolio-thumb-linkedin.png';

function ProjectBox(props) {
    return(
        <div className='project-box'>
            <div className="project-img"><img alt={props.demoName} src={props.image}/></div>
            <div className="project-demo-link"><a href={props.demoLink}>{props.demoName}</a></div>
            <div className="project-code-link"><a href={props.codeLink}>{props.codeName}</a></div>
        </div>
    )
}

export default ProjectBox
