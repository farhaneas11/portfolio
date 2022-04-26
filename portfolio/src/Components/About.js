import React from 'react';
import {NavLink} from 'react-router-dom';
const About = () => {
    // const navLinkStyles = ({ isActive }) => {
    //     return {
    //       fontWeight: isActive ? "bold" : "normal",
    //       borderBottom: isActive ? "2px solid #fff" : " ",
    //     };
    //   };
  return (
    <section className='section-about' id='about'>
        <div className='container'>
            <div className='about-header'>
                <div className='center-content'>
                    <h2>
                        ABOUT ME
                    </h2>
                </div>
                <ul className='center-content'>
                    <li>
                        <NavLink activeClassName="active" to='/about'>
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" ac to='skills'>
                            SKILLS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="active" to='/social-media'>
                            SOCIAL MEDIA
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </section>
  )
}

export default About;