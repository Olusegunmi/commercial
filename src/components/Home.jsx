import React from 'react'
import vector9 from '../image/vector9.png'
import vector2 from '../image/vector2.png'
import vector3 from '../image/vector3.png'
import vector4 from '../image/vector4.png'
import vector6 from '../image/vector6.png'
import Animation from './Animation'

const Home = () => {
  return (
      
    <div className='bg-neutralsilver mt-[100px] z-10 mx-auto rounded md:rounded ' id="home">
        <Animation delay={0} >
            <div className='px-4 mt-[50px] w-full lg:px-14 mx-auto  md:max-w-screen-2xl z-10 h-[250px] rounded  md:rounded md:h-[450px] '>
                <div id="default-carousel" className="relative w-full " data-carousel="slide">
                    <div className="relative h-56 overflow-hidden  rounded-lg md:h-96">
                        <div className="hidden  duration-700 ease-in-out " data-carousel-item> 
                            <div className='' >
                               <img src={vector2} className="absolute block w-[50%] h-[80%] top-[120px]   md:h-10/12 -translate-x-1/2 -translate-y-1/2 md:w-[340px] md:top-[200px] md:ml-[150px] lg:ml-[300px] md:left-[900px] left-1/2" alt="..."/>
                            </div>

                            <div className='hidden md:block absolute overflow-visible mx-auto justify-center items-center md:left-[80px] md:overflow-visible   md:top-[140px] left-[138px] top-40 w-[30%] z-10' >
                                <h1 className='text-[10px] justify-center items-center font-extralight md:text-2xl text-brandprimary hover:text-neutralDGrey'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, quisquam?</h1>
                                <p className='text-[7px] justify-center items-center md:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
                            </div>
                        </div>
                        
                        <div className="hidden  duration-700 ease-in-out " data-carousel-item> 
                            <div className='' >
                               <img src={vector3} className="absolute block w-[50%] h-[80%] top-[120px]  md:h-10/12 -translate-x-1/2 -translate-y-1/2 md:w-[340px] md:top-[200px] md:ml-[150px] lg:ml-[300px] md:left-[900px]   left-1/2" alt="..."/>
                            </div>

                            <div className='hidden md:block absolute overflow-visible mx-auto justify-center items-center md:left-[80px] md:overflow-visible   md:top-[140px] left-[138px] top-40 w-[30%] z-10' >
                                <h1 className='text-[10px] justify-center items-center font-extralight md:text-2xl text-brandprimary hover:text-neutralDGrey'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, quisquam?</h1>
                                <p className='text-[7px] justify-center items-center md:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
                            </div>
                        </div>
        
                        <div className="hidden  duration-700 ease-in-out " data-carousel-item> 
                            <div className='' >
                               <img src={vector4} className="absolute block w-[50%] h-[80%] top-[120px]   md:h-10/12 -translate-x-1/2 -translate-y-1/2 md:w-[340px] md:top-[200px] md:ml-[150px] lg:ml-[300px] md:left-[900px]  left-1/2" alt="..."/>
                            </div>

                            <div className='hidden md:block absolute overflow-visible mx-auto justify-center items-center md:left-[80px] md:overflow-visible   md:top-[140px] left-[138px] top-40 w-[30%] z-10' >
                                <h1 className='text-[10px] justify-center items-center font-extralight md:text-2xl text-brandprimary hover:text-neutralDGrey'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, quisquam?</h1>
                                <p className='text-[7px] justify-center items-center md:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
                            </div>
                        </div>
        
                        <div className="hidden  duration-700 ease-in-out " data-carousel-item> 
                            <div className='' >
                               <img src={vector9} className="absolute block w-[50%] h-[80%] top-[120px]   md:h-10/12 -translate-x-1/2 -translate-y-1/2 md:w-[340px] md:top-[200px] md:ml-[150px] lg:ml-[300px] md:left-[900px] left-1/2" alt="..."/>
                            </div>

                            <div className='hidden md:block absolute overflow-visible mx-auto justify-center items-center md:left-[80px] md:overflow-visible   md:top-[140px] left-[138px] top-40 w-[30%] z-10' >
                                <h1 className='text-[10px] justify-center items-center font-extralight md:text-2xl text-brandprimary hover:text-neutralDGrey'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, quisquam?</h1>
                                <p className='text-[7px] justify-center items-center md:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
                            </div>
                        </div>
        
                        <div className="hidden  duration-700 ease-in-out " data-carousel-item> 
                            <div className='' >
                               <img src={vector6} className="absolute block w-[50%] h-[80%] top-[120px]  md:h-10/12 -translate-x-1/2 -translate-y-1/2 md:w-[340px] md:top-[200px] md:ml-[150px] lg:ml-[300px] md:left-[900px] left-1/2" alt="..."/>
                            </div>

                            <div className='hidden md:block absolute overflow-visible mx-auto justify-center items-center md:left-[80px] md:overflow-visible   md:top-[140px] left-[138px] top-40 w-[30%] z-10' >
                                <h1 className='text-[10px] justify-center items-center font-extralight md:text-2xl text-brandprimary hover:text-neutralDGrey'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, quisquam?</h1>
                                <p className='text-[7px] justify-center items-center md:text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
                            </div>
                        </div>
                    </div>
     

                    <div className=" hidden  absolute z-30 md:flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse top-[230px] md:top-[400px]">
                       <button type="button" className="w-2 h-2 md:w-4 md:h-4 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                       <button type="button" className="w-2 h-2 md:w-4 md:h-4 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                       <button type="button" className="w-2 h-2 md:w-4 md:h-4 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                       <button type="button" className="w-2 h-2 md:w-4 md:h-4 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                       <button type="button" className="w-2 h-2 md:w-4 md:h-4 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                    </div>
                </div>
            </div>
        </Animation>
    </div>
  )
}

export default Home ;