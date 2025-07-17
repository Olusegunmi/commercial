import React from 'react'
import vector2 from "../image/vector2.png"
import vector4 from "../image/vector4.png"
import Member from '../image/Member.png';
import Animation from './Animation';

const Products = () => {
  return (
    <div >
      <Animation delay={0.6} >
      <div className='px-4 md:px-16 mx-auto max-w-screen-2xl my-8 md:mt-32' id="product">
        
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12 space-x-52'>
          <div className='mx-auto'>
            <img src={vector2} className='w-[150px]  mx-auto h-[130px] md:w-[100%] md:h-[400px]' alt="" />
          </div>
        
          <div className='md:w-[100%] mx-auto'>
            <h2 className='text-neutralDGrey text-xl font-extrabold hover:text-brandprimary md:text-4xl md:w-[100%] mb-4 lg:text-4xl'>We have built amazing products for our clients</h2>
            <p className=' md:w-4/6 text-sm text-neutralDGrey mb-8 '>Lorem ipsum dolor sit amet elit. 
              Qui voluptatibus a quis nisi, labore placeat fugiat odit corrupti cumneque voluptas ex 
              Qui facilis eius explicabo odio , incidunt quidem dolorum!</p>
            <button className='rounded ml-[140px] justify-center hover:translate-y-4 cursor-pointer duration-200 transition-all  bg-brandprimary md:w-[15%] text-[15px] py-1 px-3'>Learn</button>
          </div>
        </div>
      </div>


      <div className='px-4 md:px-14 justify-between items-center py-16 mx-auto bg-neutralsilver  '>
        <div className='flex md:flex-row flex-col justify-between gap-12 mx-auto items-center '>
          <div className='md:w-1/3'>
            <img src={vector4} className='w-[100%] h-[150px] md:w-[50%] md:ml-[15px] md:h-[300px]' alt="" />
          </div>
              
          <div className='px-4 sm:px-12 md:px-14 md:w-2/3 mx-auto'>
            <div className='mx-auto'>
              <p className='md:w-4/5 text-sm text-neutralDGrey mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda tempore necessitatibus qui cumque delectus rem, Assumenda tempore necessitatibus qui cumque delectus rem,
                voluptatibus nesciunt placeat odit repellendus quo. Explicabo quo perferendis quis obcaecati ullam amet sapiente facilis,
                velit illum a aliquam eligendi aperiam suscipit tenetur, molestiae recusandae non iusto quaerat? Obcaecati quidem repudiandae 
                quisquam, dolor tenetur aliquid!</p>
                <h5 className='text-brandprimary text-xl font-extrabold mb-2'>Will Cook</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, deleniti.</p>
                <div className='flex-row mx-auto flex gap-0 ml-[-8px]'>
                  <div>
                    <img src={Member}  className='w-[100px]' alt="" />
                  </div>

                  <div>
                    <img src={Member}  className='w-[100px]' alt="" />
                  </div>

                  <div>
                    <img src={Member} className='w-[100px]' alt="" />
                  </div>

                  <div>
                    <img src={Member}  className='w-[100px]' alt="" />
                  </div>

                  <div className='mt-[10px] md:py-2 md:mt-[20px]'>
                    <a href="" className='text-[14px]  md:text-[20px] font-bold text-brandprimary hover:text-neutralDGrey md:mt-[50px]'>Clients</a>
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

export default Products;