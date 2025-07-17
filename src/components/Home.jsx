import React from 'react'
import vector8 from '../image/vector8.png'
import vector9 from '../image/vector9.png'
import vector2 from '../image/vector2.png'
import vector3 from '../image/vector3.png'
import vector4 from '../image/vector4.png'
import vector6 from '../image/vector6.png'
import Animation from './Animation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';

const Home = () => {
  return (
      
    <div className='bg-neutralsilver mt-[100px] z-10 mx-auto rounded md:rounded ' id="home">
        <Animation delay={0} >
            <div className='px-4 mt-[50px] w-full lg:px-14 mx-auto  md:max-w-screen-2xl z-10 h-[250px] rounded  md:rounded md:h-[450px] '>
                <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} 
                loop={true}
                centeredSlides={true}
                speed={800}
                autoplay ={{
                    delay :3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                >
                   <SwiperSlide className='mt-[60px] md:mt-[80px]'><img src={vector8} className='w-44 h-[130px] md:w-64 md:h-[285px]' /></SwiperSlide>
                    <SwiperSlide className='mt-[60px] md:mt-[80px]'><img src={vector9} className='w-44 h-[130px] md:w-64 md:h-[285px]' /></SwiperSlide>
                   <SwiperSlide className='mt-[60px] md:mt-[80px] '><img src={vector2} className='w-44 h-[130px] md:w-64 md:h-[280px]' /></SwiperSlide>
                   <SwiperSlide className='mt-[60px] md:mt-[80px]'><img src={vector3} className='w-44 h-[130px] md:w-64 md:h-[285px]' /></SwiperSlide>
                   <SwiperSlide className='mt-[60px] md:mt-[80px]'><img src={vector4} className='w-44 h-[130px] md:w-64 md:h-[290px]' /></SwiperSlide>
                   <SwiperSlide className='mt-[60px] md:mt-[80px]'><img src={vector6} className='w-44 h-[130px] md:w-64 md:h-[290px]' /></SwiperSlide>
                </Swiper>
            </div>
        </Animation>
    </div>
  )
}

export default Home ;