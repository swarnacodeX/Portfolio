import React from 'react';
import Image from '../assets/home.png';
import {} from 'react-icons/fa';
import {FaGithub,FaInstagram,FaFacebook,FaLinkedin} from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import {motion} from  "framer-motion";
import {fadeIn} from '../variants';
import {Link} from 'react-scroll';

const Banner = () => {
  return(
     <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className="container mx-auto">
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center
        lg:gap-x-12'>
          {/* <div> text</div> */}
          <div className='flex-1 text-center font-secondary
          lg:text-left'>
            <motion.div variants={fadeIn('up',0.4)} 
            initial="hidden" whileInView={'show'}
             viewport={{once:false,amount:0.7}} className='text-[55px] font-bold leading-[0.8]
            lg:text-[110px]'>
              SHUBHANGAN <span>DAS</span>
            </motion.div>
            <div className='mb-6 text-[25px] lg:text-[49px]
            font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am </span>
              <TypeAnimation sequence={[
                'A Full Stack Developer',
                2000,
                'A Data Analyst',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
            </div>
            {/* <motion.p 
            variants={fadeIn('up',0.5)} 
            initial="hidden" whileInView={'show'}
             viewport={{once:false,amount:0.7}}
             className='mb-8 max-w-lg mx-auto lg;mx-0'>
              
            </motion.p> */}
            <motion.div 
            variants={fadeIn('up',0.4)} 
            initial="hidden" whileInView={'show'}
             viewport={{once:false,amount:0.7}}
             className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <Link to='contact'>
              <button className='btn btn-lg'>
                Contact Me
              </button>
              </Link>
              <a className='text-gradient btn-link'>
                My CV
              </a>
            </motion.div>
            <motion.div 
            variants={fadeIn('up',0.7)} 
            initial="hidden" whileInView={'show'}
             viewport={{once:false,amount:0.7}}
             className='flex text-[20px] gap-x-6 max-w-max mx-auto
            lg:mx-0'>
              <a href='https://www.instagram.com/_swarno_bolchi_/'>
                <FaInstagram/>
              </a>
              <a href='https://www.facebook.com/profile.php?id=100060255380503'>
                <FaFacebook/>
              </a>
              <a href='https://github.com/swarnacodeX'>
                <FaGithub/>
              </a>
              <a href='https://www.linkedin.com/in/shubhangan-das-741103228/'>
                <FaLinkedin/>
              </a>
            </motion.div>
          </div>
          <motion.div 
          variants={fadeIn('down',0.7)} 
          initial="hidden" whileInView={'show'}
           className='hidden lg:flex flex-1 max-w-[320px]
          lg:max-w-[482px]'>
            <img src={Image}  alt='Avatar' />
          </motion.div>
        </div>
      </div>
    
    </section>
    )
};

export default Banner;
