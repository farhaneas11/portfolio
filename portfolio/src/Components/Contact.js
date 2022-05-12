/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useForm } from '@formspree/react';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';


// const schema = yup.object().shape({
//     fullName:yup.string().required(),
//     subject:yup.string().required(),
//     contact:yup.string().required(),
//     message:yup.string().required()
// });

const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 }
  };

const Contact = () => {    
    const [state, handleSubmit] = useForm("mayvlwnn");    

    // const {register , handleSubmit, reset} = useForm({
    //     resolver:yupResolver(schema),
    // });   

    // const submitForm = (data) =>{
    //     console.log({data});
    //     reset();
    // }

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } 
      }, [control, inView]);

  return (
    <section
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className='section-contact' id='contact'>
        <div className='container'>
            <motion.div
                ref={ref}
                variants={boxVariant}
                initial="hidden"
                animate={control}
                className='center-content'>
                <h2>
                    LETS TALK
                </h2>
            </motion.div>
            <div className='grid gap'>
                <div className='input-form'>                    
                    <form className='form-control' onSubmit={handleSubmit} /*onSubmit={handleSubmit(submitForm)}*/>
                        <div className='center-content'>
                            <h3>
                                GET IN TOUCH
                            </h3>
                        </div>
                        <div className='input-control'>                            
                            <input name='fullname'  placeholder='FULL NAME' type='text' /*{...register('fullName')}*//>                            
                        </div>
                        <div className='input-control'>                            
                            <input  name="subject" type='text' placeholder='SUBJECT' /*ref={register}*//>
                        </div>
                        <div className='input-control'>                            
                            <input type='text' name='contact'  placeholder='HOW TO CONTACT' /*ref={register}*//>
                        </div>
                        <div className='input-control'>                            
                            <textarea type='text' cols="30" rows="10" placeholder='MESSAGE' name='message'  /*{...register('message')}*/></textarea>
                        </div>
                        <div className='center-content'>
                            <button type='submit' id='submit' >
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
                <div className='detail-contact'>
                    <div className='display-block center-content'>
                        <div className='box-contact '>
                            <h5>
                                EMAIL : farhan.salam11@gmail.com
                            </h5>
                            <h6>
                                SKYPE : farhan.salam11@live.com
                            </h6>
                        </div>
                    </div>
                    {/* <div className='display-block center-content'>
                        <div className='box-contact '>
                            <address>
                                ADDRESS : Kerala, India
                            </address>
                            <h6>
                                MOBILE : +91 ********83
                            </h6>
                        </div>
                    </div>                       */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact;