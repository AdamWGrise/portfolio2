import React from 'react';
import pic from '../assets/images/portfolio-thumb-train.png';
import '../assets/images/portfolio-thumb-github.png';
import '../assets/images/portfolio-thumb-resume.png';
import '../assets/images/portfolio-thumb-linkedin.png';

function ProjectBox(props) {
    console.log(props)
    return(
        <div className='project-box'>
            <img className="project-img" alt={props.demoName} src={pic}/>
            <div className="project-demo-link"><a href={props.demoLink}>{props.demoName}</a></div>
            <div className="project-code-link"><a href={props.codeLink}>{props.codeName}</a></div>
        </div>
    )
}

export default ProjectBox
