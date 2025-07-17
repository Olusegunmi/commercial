import React from 'react'
import facebook from "../image/facebook.png";
import linked from "../image/linked.png";
import payday from "../image/payday.png";
import Snap from "../image/Snap.png"
import Twitter from "../image/Twitter.png"
import Nike from "../image/Nike.png"
import Animation from './Animation';
import {motion } from "framer-motion"
const Service = () => {
  const services = [
      {id:1, title: "Membership Organisation",description:"Our membership management software provides full automation of membership renewals and payments", image:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/blog_service/2019-10-21-make-my-own-website.jpg"},
      {id:2, title: "National association",description:"Our membership management software provides full automation of membership renewals and payments", image:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/blog_service/2019-10-21-make-my-own-website.jpg"},
      {id:3, title: "Clubs and Groups",description:"Our membership management software provides full automation of membership renewals and payments", image:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/blog_service/2019-10-21-make-my-own-website.jpg"},
  ]
  return (
    <div className='md:px-14 px-4 mx-auto max-w-screen-2xl' id="service">
      <Animation delay={0.2} >
      <div className='text-center my-8'>
        <motion.h1 animate={{opacity: 1 , x: 0,  }} initial={{opacity: 0, x:30}} transition={{duration:1 , delay:1 }} className='text-4xl text-brandprimary font-extralight hover:text-neutralDGrey mb-2'>Our Clients</motion.h1>
        <motion.p animate={{opacity: 1 , x: 0,  }} initial={{opacity: 0, x:30}} transition={{duration:1 , delay:1 }}  className='text-neutralDGrey hover:text-brandprimary'>We have been working with Fortune 600+ clients</motion.p>
       

        <motion.div animate={{opacity: 1 , x: 0,  }} initial={{opacity: 0, x:-30}} transition={{duration:1 , delay:1 }} className='flex flex-wrap my-4 md:my-12 mx-auto ml-[17px] lg:justify-between m  px-5 space-x-8   lg:gap-16 md:justify-between items-center gap-3'>
          <img src={facebook} className='w-[30%] mx-auto h-8 md:w-[10%] md:h-9 ' alt="" />
          <img src={linked} className='w-[30%] mx-auto h-11 md:w-[10%] md:h-40 ' alt="" />
          <img src={payday} className='w-[30%] mx-auto h-8 md:w-[10%] md:h-[200px] ' alt="" />
          <img src={Snap} className='w-[30%] mx-auto h-12 md:w-[10%] md:h-40 ' alt="" />
          <img src={Twitter} className='w-[30%] mx-auto h-8 md:w-[10%] md:h-25 ' alt="" />
          <img src={Nike} className='w-[30%] mx-auto h-10 md:w-[10%] md:h-36 ' alt="" />
        </motion.div>

        <motion.div animate={{opacity: 1 , x: 0,  }} initial={{opacity: 0, x:30}} transition={{duration:1 , delay:1 }}>
          <h1 className='text-4xl text-brandprimary font-extralight hover:text-neutralDGrey mb-3'>Manage your entire community in a single community</h1>
          <p  className='text-neutralDGrey hover:text-brandprimary'>We give maximum service to our client</p>
        </motion.div>
      </div>


      <motion.div animate={{opacity: 1 , y: 0,  }} initial={{opacity: 0, y:30}} transition={{duration:1 , delay:1 }} className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12 md:mb-[150px]'>
        {services.map((serv)=> <div key={serv.id} className='px-4 py-8 md:w-[300px]  flex hover:border-b-4 rounded-md cursor-pointer hover:translate-y-5  justify-center items-center md:text-center hover:border-indigo-50 transition-all  duration-300 text-center md:h-80 mx-auto'>
          <div className=''>
            <div className=''><img src={serv.image} className='w-14 h-14 mx-auto  md:ml-[100px]' alt=""/></div>
            <h1 className='text-2xl font-light text-neutralDGrey '>{serv.title}</h1>
            <p className='text-sm text-neutralDGrey '>{serv.description}</p>
          </div>
        </div>
        )}
      </motion.div>
      </Animation>
    </div>
  )
}

export default Service