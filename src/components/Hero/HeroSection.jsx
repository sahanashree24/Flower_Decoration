import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const HeroSection = () => {
  const sliderImages = [
    "/hero/hero-1.jpeg",
    "/hero/hero-2.jpeg",
    "/hero/hero-3.jpeg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="hero">
      <Swiper
        className="hero__slider"
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero__item set-bg"
              style={{ backgroundImage: `url(${image})`, opacity: 1 }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="hero__text">
                      <span>Exquisite Floral Decorations</span>
                      <h2>Bringing Elegance to Every Occasion</h2>
                      <a href="#" className="primary-btn">
                        Explore Our Creations
                      </a>

                      {/* Custom Slide Numbering Below */}
                      <div className="hero__pagination">
                        {sliderImages.map((_, index) => (
                          <span
                            key={index}
                            className={activeIndex === index ? "active" : ""}
                          >
                            0{index + 1}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
