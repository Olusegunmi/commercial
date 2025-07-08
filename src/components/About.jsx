import React from 'react'
import Event from '../image/Event.png';
import Server from '../image/Server.png';
import Payment from '../image/Payment.png';
import Member from '../image/Member.png';
import vector8 from '../image/vector8.png';
import Animation from './Animation';
import {motion} from 'framer-motion'



const About = () => {
  return (
  <div className='' id="about">
    <Animation delay={0.4} >
    <div className='px-4 md:px-16 mx-auto max-w-screen-2xl my-8 md:mt-32'>
      <div className='w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 space-x-52'>
        <motion.div animate={{opacity: 1 , x: 0,  }} initial={{opacity: 0, x:-30}} transition={{duration:1 , delay:1 }}>
          <img src={vector8} className='w-[100%] h-[200px] md:w-[100%] md:h-[400px]' alt="" />
        </motion.div>

        <motion.div className='md:w-[100%] mx-auto' animate={{opacity: 1 , x: 0,  }} initial={{opacity: 0, x:30}} transition={{duration:1 , delay:1 }}>
          <h2 className='text-neutralDGrey text-xl font-extrabold hover:text-brandprimary md:text-4xl md:w-[100%] mb-4 lg:text-4xl'>The unseen of spending three years at Techschool</h2>
          <p className='md:w-4/6 text-sm text-neutralDGrey mb-8 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Qui voluptatibus a quis nisi, labore placeat fugiat odit corrupti cum vel perferendis tempora facilis porro excepturi natus neque voluptas ex 
            Qui facilis eius explicabo odio voluptate nam, cum velit dolores, incidunt quidem dolorum!</p>
          <button className='rounded hover:translate-y-4 cursor-pointer duration-200 transition-all  bg-brandprimary md:w-[15%] text-[15px] py-1 px-1'>Learn</button>
        </motion.div>
      </div>
    </div>

    <div className='px-4 md:px-14  items-center py-16 mx-auto bg-neutralsilver  '>
     <div className='flex md:flex-row flex-col justify-between mx-auto items-center '>
        <div className='md:w-1/2'>
          <h1 className='text-4xl font-extrabold mb-4 md:w-2/3 text-neutralDGrey ml-[20px]'>Helping a local<br /><span className='text-brandprimary text-4xl font-extrabold'>business reinvert itself</span></h1>
          <p className='text-neutralDGrey text-[18px] font-semibold ml-[20px]'>We got here with our hardwork and dedication</p>
        </div>
        
        <div className='md:w-1/2  flex mx-auto sm:flex-row flex-col sm:items-center justify-around gap-4'>
          <div className='space-y-8 md:ml-[-50px]'>
            <div className='flex items-center gap-2'>
              <img src={Member} className='w-[55px] sm:ml-[-80px] md:ml-0' alt="" />
              <div>
                <h2 className='text-xl md:text-2xl text-neutralDGrey font-semibold'>2,225,341</h2>
                <p>Member</p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <img src={Payment} className='w-[55px] sm:ml-[-80px] md:ml-0' alt="" />
              <div>
                <h2 className='text-xl md:text-2xl text-neutralDGrey font-semibold'>2,225,341</h2>
                <p>Member</p>
              </div>
            </div>
          </div>

          <div className='space-y-8 '>
            <div className='flex items-center gap-2'>
              <img src={Server} className='w-[55px] sm:ml-[-80px] md:ml-0' alt="" />
              <div>
                <h2 className='text-xl md:text-2xl text-neutralDGrey font-semibold'>2,225,341</h2>
                <p>Member</p>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <img src={Event} className='w-[55px] sm:ml-[-80px] md:ml-0' alt="" />
              <div>
                <h2 className='text-xl md:text-2xl text-neutralDGrey font-semibold'>2,225,341</h2>
                <p>Member</p>
              </div>
            </div>
          </div>
        </div>
     
      </div>
    </div>
    </Animation>
  </div>
  )
}

export default About
