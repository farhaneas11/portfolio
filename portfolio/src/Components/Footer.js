import React from 'react';
import {AiOutlineLinkedin,AiOutlineTwitter,AiOutlineGithub} from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
        <div className='center-content'>
          <a href="#hero">
            <h2>
              FEAS<span>1107</span>
            </h2>
          </a>
          <div>
            <a href='https://github.com/farhaneas11' >
                  <AiOutlineGithub style={{color:'#03a9f4',fontSize:'3rem'}}/>           
            </a>
            <a href='https://twitter.com/Farhansalam11' >
                  <AiOutlineTwitter style={{color:'#007aaa',fontSize:'3rem'}}/>                   
            </a>
            <a href='https://www.linkedin.com/in/farhaneabdulsalam/' >
                  <AiOutlineLinkedin style={{color:'#c05675',fontSize:'3rem'}}/>                  
            </a>
          </div>          
        </div>
    </footer>
  )
}

export default Footer;