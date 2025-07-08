import React from 'react'
import Animation from './Animation'
const Faq = () => {
  return (
    <div className='px-4 md:p-14 mx-auto max-w-screen bg-neutralsilver py-16' id="faq">
      <Animation delay={0.10} > 
        <div className='flex mx-auto md:w-2/5'>
          <div className='text-center'>
            <h2 className='text-3xl md:text-4xl text-neutralDGrey font-light mx-auto mb-8'>Lorem ipsum dolor consectetur adipisicing.</h2>
            <button className='rounded hover:translate-y-4 cursor-pointer duration-200 transition-all  bg-brandprimary md:w-[20%] text-white font-bold text-[15px] py-2 px-2'>Get Started...</button>
          </div>
        </div>
      </Animation> 
    </div>
  )
}

export default Faq