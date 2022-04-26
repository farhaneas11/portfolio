import React from 'react';
import {AiOutlineFacebook , AiOutlineInstagram , AiOutlineLinkedin,AiOutlineTwitter , AiOutlineGithub} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
const SocialMedia = () => {
  return (
    <section className='section-aboutData'>
      <div className='container'>
        <div className='grid-skills'>
          <div className='div-socialmedia'>
            <div className='display-block '>
              <a href='' className='center-content'>
                <AiOutlineFacebook style={{color:'#385c8e',fontSize:'8rem'}}/>            
                <h4>
                  FACEBOOK
                </h4>
              </a>
            </div>
            <div className='display-block '>
              <a className='center-content'>
                <AiOutlineInstagram style={{color:'#ea4c89',fontSize:'8rem'}}/>          
                <h4>
                   INSTAGRAM
                </h4>
              </a>
            </div>
          </div>
          <div className='div-socialmedia'>
            <div className='display-block'>
              <a href='https://www.linkedin.com/in/farhaneabdulsalam/' className='center-content'>
                <AiOutlineLinkedin style={{color:'#c05675',fontSize:'8rem'}}/>           
                <h4>
                   LINKEDIN
                </h4>
              </a>
            </div>
            <div className='display-block'>
              <a href='https://twitter.com/Farhansalam11' className='center-content'>
                <AiOutlineTwitter style={{color:'#007aaa',fontSize:'8rem'}}/>              
                <h4>
                   TWITTER
                </h4>
              </a>
            </div>
          </div>
          <div className='div-socialmedia'>
            <div className='display-block '>
              <a href='https://github.com/farhaneas11' className='center-content'>
                <AiOutlineGithub style={{color:'#03a9f4',fontSize:'8rem'}}/>            
                <h4>
                   GITHUB
                </h4>
              </a>
            </div>
            <div className='display-block '>
              <a href='https://mail.google.com/mail/u/1/#inbox' className='center-content'>
                <FcGoogle style={{color:'#4176fa',fontSize:'8rem'}}/>              
                <h4>
                   GOOGLE
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SocialMedia;