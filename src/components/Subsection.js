import React from 'react'
import ProjectBox from './ProjectBox';

function Subsection(props) {
    return(
        <div>
            <div className='better-hr'></div>
            <h4 className='heading'>{props.title}</h4>
            <p>{props.subheading}</p>
            <ProjectBox />
            {/* Set this up so the projectData will determine which subsections each of the links will go in. */}
        </div>
    )
}

export default Subsection