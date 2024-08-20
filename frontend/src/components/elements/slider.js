import React, { MutableRefObject,useRef,  useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './component.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MySwiperComponent() {

    const progressCircle = useRef<SVGSVGElement | null>(null);
    const progressContent = useRef<HTMLSpanElement | null>(null);
  
    const OnAutoplayTimeLeft = (s, time, progress) => {
      if (progressCircle.current && progressContent.current) {
        progressCircle.current.style.setProperty('--progress', String(1 - progress));
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
      }
    };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={OnAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>       
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
