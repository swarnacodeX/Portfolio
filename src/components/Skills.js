// import React from 'react';

// const Skills = () => {
//   return (
//   <div  className='section' id='skills'>
//     SKills
//     </div>
//     )
// };

// export default Skills;
import React from 'react'
import "./Skills.css";
import SkillContainer1 from './Skills1';
import SkillContainer2 from './Skill2';
import {motion} from  "framer-motion";
import {fadeIn} from '../variants';

const Skills = () => {
  return (
      <section className='skills section' id="skills">
          {/* <h2 className='section__title'>Skills</h2>
          <span className='section__subtitle'>My technical level</span> */}
         
          <motion.div className='abcd'>
          <h2 className='h2 text-accent'
          variants={fadeIn('up',0.7)} 
          initial="hidden" whileInView={'show'}
           viewport={{once:false,amount:0.7}}>
             Skills</h2></motion.div>
          <div className='skills__container container grid'>
              <SkillContainer1/>
              <SkillContainer2/>
              

          </div>
    </section>
  )
}

export default Skills;
