import React from 'react';



const Hero = () => {
  return (
    <section className='hero-section' id='hero'>
        <div className='container'>
            <div className='grid'>
                <div className='hero-image'>
                    <img src="asset/Prof-pic.jpg" alt="profilepicture" />
                </div>
                <div className='hero-description '>
                    <h1>
                        I AM FARHAN <br/><span>E ABDUL SALAM</span>
                    </h1>
                    <h2>
                       I'M A DEVELOPER
                    </h2>                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero;