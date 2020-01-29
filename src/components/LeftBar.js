import React from 'react'
import Subsection from './Subsection';

function LeftBar() {
    return(
        <div className='left-bar'>
            <h3 className='heading'>The Good Stuff: Portfolio of Projects and Skills</h3>
            <div className='better-hr'></div>
            <p>I skip right to the "Good Stuff" section because it showcases things I've worked on that are just one click away. Of course, skills are vital (they are on the résumé and listed below), but folks should know what actual work I've done to demonstrate those skills as well.<br/>
            So, much easier than me <strong>telling</strong> you what I've done, why not let you simply <strong>see</strong> it for yourself?</p>
            <br/>
            <Subsection title="Production / Media" subheading="These links are pretty straightforward - GitHub is where the code lives, and my professional profile can be found between LinkedIn and my résumé."/>
            <Subsection title="Apps" subheading="Most of these apps are hosted on either GitHub Pages or Heroku for demonstration and use. For the command-line apps (LIRI Bot, BAMazon) the links instead just take you to a video demo. The repositories for all are available on GitHub."/>
            <Subsection title="Games" subheading="Web-based games hosted on GitHub Pages or Heroku! Like the apps, repositories/code are available on GitHub. Node Hangman is not on GitHub Pages, though, since it's a command line application. The image link will take you to a video demo."/>
            <Subsection title="Art, Miscellaneous" subheading="Here are a couple other things I do that aren't related to web development, but are hobbies or other notable/fun work."/>
        </div>
    )
}

export default LeftBar