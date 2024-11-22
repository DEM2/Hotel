import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/effect-fade"
import {EffectFade, Autoplay} from "swiper"

import img1 from "../assets/img/heroSlider/4.jpg"
import img2 from "../assets/img/heroSlider/2.jpg"
import img3 from "../assets/img/heroSlider/5.jpg"

const slides =[
  {
    title: "HABITACIONES",
    bg: img1,
    
  },
  {
    title: "HABITACIONES",
    bg: img2,
    
  },
  {
    title: "HABITACIONES",
    bg: img3,
    
  }
]

const HeroSlider = () => {
  return (
    <Swiper modules={[EffectFade, Autoplay]} effect={"fade"} 
      loop={true} autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }} className='heroSlider h-[600px] lg:h-[860px] bg-black'>
      {slides.map((slide,index)=>{
        const {title, bg}= slide
        return ( <SwiperSlide className='h-full relative flex
        justify-center items-center ' key={index}>
          <div className='z-20 text-white text-center  '> 
           <div className='uppercase font-tertiary tracking[6px] mb-5'>Diviertete mientras te relajas</div> 
           <h1 className='text-[32px] font-primary uppercase tracking-[2px] max-w-[920px] lg:text-[68px]'>{title}</h1>
          </div>

          <div className='absolute top-0 w-full h-full'>
           <img src={bg} className='object-cover h-full w-full' alt=''/> 
          </div> 
          <div className='absolute w-full h-full bg-black/70'></div>
        </SwiperSlide>)
      })}
       </Swiper>
  )
};

export default HeroSlider;