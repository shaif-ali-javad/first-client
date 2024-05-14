import React from 'react'
// import "./slider.css"

import { Autoplay, Pagination, EffectFade} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/autoplay';

import Box from '@mui/material/Box';

import img0 from '../../assets/1.jpg'
import img1 from '../../assets/2.jpg'
import img2 from '../../assets/3.jpg'

export default function slider() {
  return (
    <Box sx={{ color: "#fff" }}>
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        slidesPerView={1}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        effect="fade"
        speed={5000}
        loop={true}
        pagination={{ clickable: true }}
    >
    <SwiperSlide style={{ width: '100%'}} >
        <img style={{width: "100%", marginTop: '-200px'}} src={img0} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%'}} >
        <img style={{width: "100%", marginTop: '-335px'}} src={img1} alt="" />
      </SwiperSlide>
      <SwiperSlide style={{ width: '100%'}} >
        <img style={{width: "100%", marginTop: '-58px'}} src={img2} alt="" />
      </SwiperSlide>
    </Swiper>
    </Box>
  )
}

