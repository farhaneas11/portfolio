import React  from 'react'

const Projects = () => {
  return (
    <section className='section-projects' id='projects'>
        <div className='container'>
            <div className='grid'>
                <div className='grid-row-1'>
                    <div className='center-content'>
                        <h2>
                            PROJECTS
                        </h2>
                    </div>
                    <div className='project-tab'>                                             
                        <img src="/asset/Project-Buson.jpeg" alt="BUSON" />
                        <a href="https://github.com/farhaneas11/coding-challenge.git">VIEW</a>
                    </div> 
                    <div className='project-tab sample1'>                                             
                        <img src="/asset/Sample-1.jpeg" alt="Sample-Project-1" />
                        <div className='center-a'>
                            <a href="https://sunny-palmier-c3efc9.netlify.app">VIEW</a>
                        </div>
                    </div>                    
                </div>
                <div className='grid-row-2'>
                    <div className='project-tab'>                                             
                            <img src="/asset/project-3.jpeg" alt="BUSON" />
                            <a href="https://todo-context-app.netlify.app/">VIEW</a>
                    </div> 
                    <div className='project-tab'>                                             
                        <img src="/asset/Project-Buson.jpeg" alt="BUSON" />
                        <a href="https://github.com/farhaneas11/coding-challenge.git">VIEW</a>
                    </div> 
                    <div className='center-content'>
                        <a href="\https://github.com/farhaneas11" className='know-more'>
                            SEE MORE WORK {'>>>'}
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Projects;