import React from 'react'
import Member from '../image/Member.png';
import Animation from './Animation';

const Testimonial = () => {
  const Blogs = [
    {id:1, title :"Creating streamline safeguard processes with onerem", img:"../image/Member.png"},
     {id:2, title :"What are tyour  safeguard responsibilities and how can you manange them?", img:"../image/Member.png"},
      {id:3, title :"Recreating membership model wiyh traditional americans", img:"../image/Member.png"}
  ]
  return (
    <div className='px-4 md:px-14 mx-auto max-w-screen-2xl my-12 ' id="testimonial">
        <Animation delay={0.8} >
        <div className='md:w-2/5 text-center mx-auto'>
          <h2 className='text-3xl md:text-4xl mb-4 font-light text-neutralDGrey' >Caring Is The New Marketing</h2>
          <p className='text-sm mb-5 md:w-3/6 text-brandprimary mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisiure nihil dolor nulla iste.</p>
        </div>

        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-8 items-center'>
            {
                Blogs.map(blog => <div key={blog.id} className='relative mx-auto mb-12 cursor-pointer'>
                    <img src={Member} alt="" className='hover:scale-95 transition-all duration-300' />
                    <div className='px-4 py-2 md:px-14 mx-auto  md:w-3/5 rounded-md text-center absolute left-0 bg-gray-200 top-60 right-0  '>
                        <h3 className='' >{blog.title}</h3>
                    </div>
                </div>)
            }
        </div>
        </Animation>
    </div>
  ) 
}

export default Testimonial