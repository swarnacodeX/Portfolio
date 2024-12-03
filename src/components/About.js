import React from 'react';
import { useInView} from 'react-intersection-observer';
import {motion} from  "framer-motion";
import {fadeIn} from '../variants';
const About = () => {
  const [ref,inView]=useInView({
    threshold:0.5,
  })
  return(
     <section id='about' className='section' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex'>
          
          <motion.div 
          variants={fadeIn('up',0.3)} 
          initial="hidden" whileInView={'show'}
           viewport={{once:false,amount:0.7}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[500px] w-64 rounded-lg'>
        </motion.div>
        <motion.div className='flex-1'
        variants={fadeIn('up',0.3)} 
            initial="hidden" whileInView={'show'}
             viewport={{once:false,amount:0.7}}>
          <h2 className='h2 text-accent'
          variants={fadeIn('up',0.7)} 
          initial="hidden" whileInView={'show'}
           viewport={{once:false,amount:0.7}}>
             About Me.</h2>
    
          <p className='mb-6'
          variants={fadeIn('up',0.3)} 
          initial="hidden" whileInView={'show'}
           viewport={{once:false,amount:0.7}}>
          
In my pursuit of a B.Tech degree, I've cultivated a versatile skill set across various programming languages,
 encompassing C++, C, Java, JavaScript, HTML, and CSS. Proficiency in indispensable developer tools like VS Code, 
 Android Studio, Firebase, and Eclipse underscores my solid grounding in both frontend and backend technologies.
  Specializing in the MERN stack, I excel in fashioning dynamic, seamlessly functional web applications.

Beyond individual prowess, I'm a fervent advocate for collaborative innovation, having made meaningful 
contributions to open-source endeavors. My adaptability and penchant for challenges fuel my effectiveness 
in diverse environments. Armed with technical acumen and a penchant for teamwork, I'm primed to catalyze innovation
 and foster growth within any project or team. As I stand on the cusp of new opportunities, I eagerly anticipate the
  chance to further explore and enrich the ever-evolving landscape of technology.
          </p>
          
        </motion.div>
        </div>
      </div>
  
    </section>
    )
};

export default About;
