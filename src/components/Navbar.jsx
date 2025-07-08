import React, { useEffect, useState } from 'react'
import bott from "../image/bott.png"
import {Link } from "react-scroll"
import { FaXmark , FaBars } from "react-icons/fa6"

const Navbar = () => {
  const[isOpenMenu ,setIsOpenMenu] = useState(false);
  const [isSticky , setIsSticky ] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  const navLink = [
    {link : "Home", path:"home"},
    {link : "Service", path:"service"},
    {link : "About", path:"about"},
    {link : "Products", path:"product"},
    {link : "Testimonial", path:"testimonial"},
    {link : "FAQ", path:"faq"},
  ]

  useEffect ( () => {
    const handleScroll = () => {
      if(window.scrollY > 100 ) {
        setIsSticky(true);
      }
      else {
        setIsSticky(false);
      };
    }

    window.addEventListener("scroll" , handleScroll)

    return () => {
      window.addEventListener("scroll" , handleScroll)
    }
  })
  return (
      <header className='w-full bg-white fixed  right-0  top-0 md:bg-transparent '>
        <nav className=' py-6 px-4  md:px-14   ${isSticky ? "sticky right-0 top-0  left-0 bg-white duration-300" : "" }'>
          <div className='flex justify-between  items-center text-base gap-8  ' >
            <a href="" className='text-2xl font-extralight items-center space-x-0 '><img src={bott} alt=""  className='w-[50px] hover:rotate-y-90 hover:transition-transform  mb-[8px] items-center inline-block'/><span className="md:hover:text-gray-900 font-medium hover:text-brandprimary text-neutralDGrey md:text-brandprimary">BLUE</span></a>

            <ul className='lg:flex space-x-12 hidden'>
              {
                navLink.map(({link , path}) => <Link key={path} to={path} spy={true} smooth={true} offset={-100} className='block text-base font-semibold text-gray-900 cursor-pointer hover:text-brandprimary first:font-medium'>{link}</Link>)
              }
            </ul>

            <div className='space-x-4 hidden md:flex items-center md:mr-[20px] '>
              <a href="" className='hidden lg:flex items-center font-bold text-brandprimary hover:text-gray-900 '>Login</a>
              <button className='bg-brandprimary text-white hidden lg:block  px-4 py-2 transition-all text-[13px] font-bold cursor-pointer duration-300 rounded hover:bg-neutralDGrey'>Sign Up</button>
            </div>

            <div className='md:block lg:hidden'>
               <button onClick={toggleMenu} className='text-neutralDGrey focus:outline-none focus:text-gray-500  ml-[-40px] '>
                 {isOpenMenu ? (<FaXmark className="h-6 w-6 text-3xl "/>) : (<FaBars className="h-6 w-6 text-3xl " />)}
               </button>
            </div>
          </div>

          <div className={`space-y-4 px-4 py-7 mt-10 bg-brandprimary lg:hidden hover:text-gray-900 ${isOpenMenu ? "block fixed transition-all duration-300 " : "hidden"}`}>
            
              {
                navLink.map(({link , path}) => <Link key={path} to={path} spy={true} smooth={true} offset={-100} className='block text-base font-semibold text-white cursor-pointer hover:text-black first:font-medium z-10'>{link}</Link>)
              }
            
          </div>
        </nav>
      </header>
  )
}

export default Navbar