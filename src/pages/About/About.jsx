import React, { useEffect, useState } from "react";
import about1 from "/public/work/work-9.jpeg";
import about2 from "/public/work/work-10.jpeg";
import about3 from "/public/work/work-14.jpeg";
import ta1 from "../../assets/img/testimonial/ta-1.jpg";
import ta2 from "../../assets/img/testimonial/ta-2.jpg";
import ta3 from "../../assets/img/testimonial/ta-3.jpg";
import si3 from "../../assets/img/icons/expert.png";
import si4 from "../../assets/img/icons/choose.png";
import breadcrumbBg from "/public/hero/hero-1.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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
      <div
        className="breadcrumb-option spad set-bg"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>About us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about__pic">
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div
                      className="about__pic__item about__pic__item--large set-bg"
                      style={{ backgroundImage: `url(${about1})` }}
                    ></div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="row">
                      <div className="col-lg-12">
                        <div
                          className="about__pic__item set-bg"
                          style={{ backgroundImage: `url(${about2})` }}
                        ></div>
                      </div>
                      <div className="col-lg-12">
                        <div
                          className="about__pic__item set-bg"
                          style={{ backgroundImage: `url(${about3})` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about__text">
                <div className="section-title">
                  <span style={{ color: "#891F3A" }}>About Us</span>
                  <h2 style={{ color: "#891F3A" }}>WHo we are?</h2>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="services__item">
                      <div className="services__item__icon">
                        <img width={50} src={si3} alt="" />
                      </div>
                      <h4 style={{ color: "#891F3A" }}>Our Expertise</h4>
                      <p>
                        We bring your vision to life with stunning floral
                        designs. We specialize in creating arrangements that
                        perfectly match the style and theme of your event.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="services__item">
                      <div className="services__item__icon">
                        <img width={50} src={si4} alt="" />
                      </div>
                      <h4 style={{ color: "#891F3A" }}>Why Choose Us</h4>
                      <p>
                        With years of experience, we craft unique, personalized
                        floral displays. Our team is dedicated to ensuring your
                        event blossoms with beauty and elegance.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about__text__desc">
                  <p>
                    With years of experience in the floral industry, our
                    talented team of decorators understands the importance of
                    every detail. Whether it's a wedding, corporate event,
                    birthday celebration, or any other milestone, we work
                    closely with you to curate the ideal floral ambiance that
                    matches your vision and exceeds your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial spad set-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title center-title">
                <span style={{ color: "white" }}>Loved By Clients</span>
                <h2 style={{ color: "white" }}>What clients say?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <Swiper
              spaceBetween={50}
              modules={[Navigation, Autoplay]}
              loop={true}
              slidesPerView={isMobile ? 1 : 3}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              navigation
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              <SwiperSlide key={0}>
                <div className="m-2">
                  <div className="testimonial__item">
                    <div className="testimonial__text">
                      <p>
                        DK Decorators transformed my wedding venue into a floral
                        paradise! Every arrangement was breathtaking.
                      </p>
                    </div>
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src={ta1} alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Amanpreet Singh</h5>
                        <span>Abohar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide key={1}>
                <div className="m-2">
                  <div className="testimonial__item">
                    <div className="testimonial__text">
                      <p>
                        The floral decorations for our anniversary were simply
                        stunning! DK Decorators truly knows how to make an event
                        memorable.
                      </p>
                    </div>
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src={ta2} alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Simran Kaur</h5>
                        <span>Fazilka</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide key={2}>
                <div className="m-2">
                  <div className="testimonial__item">
                    <div className="testimonial__text">
                      <p>
                        Absolutely loved the floral arrangements! The colors,
                        freshness, and creativity were beyond expectations.
                      </p>
                    </div>
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src={ta3} alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Rajdeep Sharma</h5>
                        <span>Bathinda</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide key={3}>
                <div className="m-2">
                  <div className="testimonial__item">
                    <div className="testimonial__text">
                      <p>
                        If you want stunning floral decor that leaves guests
                        amazed, DK Decorators is the best choice!
                      </p>
                    </div>
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src={ta1} alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Navjot Sidhu</h5>
                        <span>Muktsar</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide key={4}>
                <div className="m-2">
                  <div className="testimonial__item">
                    <div className="testimonial__text">
                      <p>
                        I was blown away by the floral decor at my sister’s
                        engagement! Truly elegant and beautifully crafted.
                      </p>
                    </div>
                    <div className="testimonial__author">
                      <div className="testimonial__author__pic">
                        <img src={ta2} alt="" />
                      </div>
                      <div className="testimonial__author__text">
                        <h5>Harleen Kaur</h5>
                        <span>Malout</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
