import React from 'react';
import Progress from '../Progress-Bar/Progress_bar';

const Skills = () => {  
  return (
    <section className='section-aboutData'>
      <div className='container'>
        <div className='grid-skills'>
          <div className=''>
            <div className='display-block'>
              <div className='center-content'>
                <h3 style={{color:"#fe3e57"}}>
                  75%
                </h3>
              </div>
              <div className='progress-bar'>
                <Progress bgcolor='#fe3e57'progress='80' height={5} />
              </div>
              <div className='center-content'>
                <h4>
                  COMMUNICATION SKILLS
                </h4>
              </div>
            </div>
            <div className='display-block'>
              <div className='center-content'>
                <h3 style={{color:"#f1f965"}}>
                  81%
                </h3>
              </div>
              <div className='progress-bar'>
                <Progress bgcolor='#f1f965'progress='80' height={5} />
              </div>
              <div className='center-content'>
                <h4>
                  ANALYTICAL ABILITIES
                </h4>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='display-block'>
              <div className='center-content'>
                <h3 style={{color:"#54faae"}}>
                77%
                </h3>
              </div>
              <div className='progress-bar'>
                <Progress bgcolor='#54faae'progress='80' height={5} />
              </div>
              <div className='center-content'>
                <h4>
                  PROJECT MANAGEMENT
                </h4>
              </div>
            </div>
            <div className='display-block'>
              <div className='center-content'>
                <h3 style={{color:"#ff0173"}}>
                  50%
                </h3>
              </div>
              <div className='progress-bar'>
                <Progress bgcolor='#ff0173'progress='80' height={5} />
              </div>
              <div className='center-content'>
                <h4>
                  ORGANIZATION
                </h4>
              </div>
            </div>
          </div>
          <div className=''>
            <div className='display-block'>
              <div className='center-content'>
                <h3 style={{color:"#ff8c2f"}}>
                  82%
                </h3>
              </div>
              <div className='progress-bar'>
                <Progress bgcolor='#ff8c2f'progress='80' height={5} />
              </div>
              <div className='center-content'>
                <h4>
                  PROBLEM SOLVING
                </h4>
              </div>
            </div>
            <div className='display-block'>
              <div className='center-content'>
                <h3 style={{color:"#39c4ff"}}>
                65%
                </h3>
              </div>
              <div className='progress-bar'>
                <Progress bgcolor='#39c4ff'progress='80' height={5} />
              </div>
              <div className='center-content'>
                <h4>
                  CREATIVITY
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;