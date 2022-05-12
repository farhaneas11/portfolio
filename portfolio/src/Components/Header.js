import React from 'react'

const Header = () => {
  return (
    <header className='section-header'>
        <div className='container'>
          <nav className='header-between'>
              <div className='center-content header-a'>
                <a href="#hero" >
                    <h2 className='with-grading'>
                      FEAS
                    </h2>
                </a>
              </div>
              <div className='center-content header-b'>
                <ul>
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#projects">Projects</a>
                  </li>                                  
                </ul>
                <div className='contact-comp'>                
                    <a href="#contact">Contact Me</a>  
                </div>                                     
              </div>
          </nav>
        </div>
    </header>
  )
}

export default Header;