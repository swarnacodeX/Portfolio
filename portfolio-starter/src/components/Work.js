import React from 'react';
import  Img1 from '../assets/rajyasahayog.png';
import Img2 from '../assets/innov.png';
import Img3 from '../assets/book.png';
import Img4 from '../assets/Screenshot 2024-07-18 195316.png';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Work = () => {
  return (
  <section  className='section' id='work'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-5'>
        <motion.div 
        variants={fadeIn('left',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}
        className='flex-1 flex flex-col gap-y-5 mb-8
         lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>
              My Projects

            </h2>
            <p className='max-w-xs'>
              I have worked on a wide range of projects
            </p>
            
          </div>
          <div className='group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70
             w-full h-full absolute z-40 transition-all duration-300'>

            </div>
          <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
          <div className='absolute -bottom-full left-12
          group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>
            SMART INDIAN HACKATHON 2K23
            </span>
           
          </div>

         
          </div>
          <div className='group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70
             w-full h-full absolute z-40 transition-all duration-300'>

            </div>
          <img className='group-hover:scale-125 transition-all duration-500' src={Img4} alt=''/>
          <div className='absolute -bottom-full left-12
          group-hover:bottom-24 transition-all duration-500 z-50'>
            <span className='text-gradient'>
            CREDIT CARD TRANSACTION REPORT
            </span>
           
          </div>
          
         
          </div>
          
        </motion.div>
        <motion.div
        variants={fadeIn('right',0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false,amount:0.3}}className='flex-1 flex flex-col gap-y-5'>
          
          <div className='group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70
             w-full h-full absolute z-40 transition-all duration-300'>

            </div>
          <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
          <div className='absolute -bottom-full left-12
          group-hover:bottom-24 transition duration-700 z-50'>
            <span className='text-gradient'>
            INNOVACION 2K24
            </span>
           
          </div>
         
          </div>
          <div className='group relative overflow-hidden
          border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70
             w-full h-full absolute z-40 transition-all duration-300'>

            </div>
          <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
          <div className='absolute -bottom-full left-12
          group-hover:bottom-24 transition duration-700 z-50'>
            <span className='text-gradient'>
            BOOKLOVERS-ECOMMERCE PLATFORM
            </span>
           
          </div>
         
          </div>
          
        </motion.div>
          
        </div>
        
          </div>
    
  
   </section>
  )
};

export default Work;
