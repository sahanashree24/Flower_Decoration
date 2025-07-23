import React, { useEffect, useState } from 'react'
import logo1 from '../../assets/img/logo/logo-1.png'
import logo2 from '../../assets/img/logo/logo-2.png'
import logo3 from '../../assets/img/logo/logo-3.png'
import logo4 from '../../assets/img/logo/logo-4.png'
import logo5 from '../../assets/img/logo/logo-5.png'
import logo6 from '../../assets/img/logo/logo-6.png'
import breadcrumbBg from "/public/hero/hero-2.jpeg";
import calltosBg from '../../assets/img/calltos-bg.jpg'
import Services from '../../components/Services/Services'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
export default function Service() {
      const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    
          useEffect(() => {
            const handleResize = () => {
              setIsMobile(window.innerWidth <= 768);
            };
        
            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
          }, []);
    return (
        <div>
            <div className="breadcrumb-option spad set-bg" style={{ backgroundImage: `url(${breadcrumbBg})` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb__text">
                                <h2>Our Sevices</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Services />
            {/* <section className="callto sp__callto">
                <div className="container">
                    <div className="callto__services spad set-bg" style={{ backgroundImage: `url(${calltosBg})` }}>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-10 text-center">
                                <div className="callto__text">
                                    <h2>CREATE AWESOME VIDEOS WITH WIDEO’S POWERFUL FEATURES</h2>
                                    <p>Wideo combines all the features you need to easily create professional videos and
                                        presentations</p>
                                    <a href="#">Start your stories</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <div className="logo spad">
                <div className="container" style={{display:'flex'}}>
                    <Swiper
                        spaceBetween={50}
                        modules={[Navigation, Autoplay]}
                        loop={true}
                        slidesPerView={isMobile?3:5}
                        autoplay={{ delay: 500, disableOnInteraction: false }}
                        navigation
                    >
                        <SwiperSlide key={0}><a href="#" className="logo__item"><img src={logo1} alt="" /></a></SwiperSlide>
                        <SwiperSlide key={1}><a href="#" className="logo__item"><img src={logo2} alt="" /></a></SwiperSlide>
                        <SwiperSlide key={2}><a href="#" className="logo__item"><img src={logo3} alt="" /></a></SwiperSlide>
                        <SwiperSlide key={3}><a href="#" className="logo__item"><img src={logo4} alt="" /></a></SwiperSlide>
                        <SwiperSlide key={4}><a href="#" className="logo__item"><img src={logo5} alt="" /></a></SwiperSlide>
                        <SwiperSlide key={5}><a href="#" className="logo__item"><img src={logo6} alt="" /></a></SwiperSlide>
                    </Swiper>
                </div>
            </div> */}
        </div>
    )
}
