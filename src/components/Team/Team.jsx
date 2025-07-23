import React from "react";
import teamBg from "../../assets/img/team-bg.jpg";
import team1 from "../../assets/img/team/profile-1.jpg";
import team2 from "../../assets/img/team/profile-2.jpg";
import team3 from "../../assets/img/team/profile-3.jpg";
import team4 from "../../assets/img/team/profile-4.jpg";

function Team() {
  return (
    <section
      className="team spad set-bg"
      style={{ backgroundColor: "#811F3A" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title team__title">
              <span style={{ color: "#ffffff" }}>Nice to meet</span>
              <h2 style={{ color: "#ffffff" }}>OUR Team</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item set-bg"
              style={{ backgroundImage: `url(${team1})` }}
            >
              <div className="team__item__text">
                <h4>DURGESH KUMAR</h4>
                <p>Manager</p>
                {/* <div className="team__item__social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item team__item--second set-bg"
              style={{ backgroundImage: `url(${team3})` }}
            >
              <div className="team__item__text">
                <h4>BHARAT SHARMA</h4>
                <p>Sales and Marketing Executive</p>
                {/* <div className="team__item__social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item team__item--third set-bg"
              style={{ backgroundImage: `url(${team2})` }}
            >
              <div className="team__item__text">
                <h4>SANJAY KUMAR</h4>
                <p>Event Decorator</p>
                {/* <div className="team__item__social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 p-0">
            <div
              className="team__item team__item--four set-bg"
              style={{ backgroundImage: `url(${team4})` }}
            >
              <div className="team__item__text">
                <h4>MAHAVIR KUMAR</h4>
                <p>Event Decorator</p>
                {/* <div className="team__item__social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-dribbble"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-12 p-0">
            <div className="team__btn">
              <a href="#" className="primary-btn">
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
