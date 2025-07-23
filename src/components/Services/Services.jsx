import React from "react";
import i1 from '../../assets/icons/wedding.png';
import i2 from '../../assets/icons/cake.png';
import i3 from '../../assets/icons/corporate.png';
import i4 from '../../assets/icons/chosen.png';




const Services = () => {
  return (
    <section className="services spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="services__title">
              <div className="section-title">
                <span>Our services</span>
                <h2>What We do?</h2>
              </div>
              <p>
                We bring elegance to your events with stunning floral
                decorations. Whether it's a wedding, birthday, or corporate
                gathering, our team designs breathtaking arrangements that make
                every moment special.
              </p>
              <a href="#" className="primary-btn">
                📍 View All Services
              </a>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="services__item">
                  <div className="services__item__icon">
                    <img
                      width={50}
                      height={50}
                      src={i1}
                      alt=""
                    />
                  </div>
                  <h4>Wedding</h4>
                  <p>
                    Create the perfect romantic setting with our floral décor.
                    From bridal bouquets to enchanting arches and table
                    centerpieces, we design every detail to match your dream
                    wedding theme.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="services__item">
                  <div className="services__item__icon">
                    <img
                      width={50}
                      height={50}
                      src={i2}
                      alt=""
                    />
                  </div>
                  <h4>Birthday</h4>
                  <p>
                    Add freshness to your celebration with colorful floral
                    decorations. We craft beautiful backdrops, table
                    arrangements, and flower walls to make every birthday extra
                    special.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="services__item">
                  <div className="services__item__icon">
                    <img
                      width={50}
                      height={50}
                      src={i3}
                      alt=""
                    />
                  </div>
                  <h4>Corporate Events</h4>
                  <p>
                    Enhance your business events with sophisticated floral
                    décor. From conference setups to gala dinners, we bring a
                    professional yet elegant touch to your corporate gatherings.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="services__item">
                  <div className="services__item__icon">
                    <img
                      width={50}
                      height={50}
                      src={i4}
                      alt=""
                    />
                  </div>
                  <h4>Baby Showers</h4>
                  <p>
                    Celebrate new beginnings with delicate floral arrangements.
                    We design soft, pastel-themed décor, floral arches, and
                    table pieces to create a charming atmosphere for moms-to-be.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
