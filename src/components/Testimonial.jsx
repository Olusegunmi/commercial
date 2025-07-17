import React from 'react'
import Member from '../image/Member.png';
import Animation from './Animation';

const Testimonial = () => {
  const Blogs = [
    {id:1, title :"Creating streamline safeguard processes with onerem", img:"https://assets.entrepreneur.com/content/3x2/2000/20150429160658-website-traffic.jpeg?format=pjeg&auto=webp&crop=16:9"},
     {id:2, title :"What are your safeguard responsibilities?", img:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/blog_service/2019-10-21-make-my-own-website.jpg"},
      {id:3, title :"Recreating membership model wiyh traditional americans", img:"https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/blog_service/2019-10-21-make-my-own-website.jpg"}
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
                    <img src={blog.img} alt="" className='hover:scale-95 transition-all mt-[50px] duration-300' />
                    <div className='px-4 py-2 md:px-14 mx-auto  md:w-3/5 rounded-md text-center absolute left-0 bg-gray-200  md:top-52 right-0  '>
                        <h3 className='text-[10px] md:text-[13px]' >{blog.title}</h3>
                    </div>
                </div>)
            }
        </div>
        </Animation>
    </div>
  ) 
}

export default Testimonial