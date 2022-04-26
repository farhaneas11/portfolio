import React from 'react'

const AboutData = () => {
  return (
    <section className='section-aboutData'>
      <div className='container'>
        <div className='grid aboutData'>
          <div>
            <img src="/asset/about.c07f3d2b.png" alt="aboutData" />
          </div>
          <div>
            <article>
              <h3 style={{color:"#fff"}}>
                I CREATE PRODUCTS <br/> NOT JUST ART
              </h3>
              <p>
                My goal now is to find a job as a software developer and work with an amazing team to build impactful products.
                Having had a first-hand perspective into how users perceive products at the marketing and visual end of the spectrum,
                now I wish to apply those knowledge and experience into the world of development.
              </p>
              <a href="#contact">
                LETS TALK
              </a>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutData;