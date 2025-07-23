import React from "react";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="footer__top__logo">
                <a href="#">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            {/* <div class="col-lg-6 col-md-6">
              <div class="footer__top__social">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-dribbble"></i>
                </a>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fa fa-youtube-play"></i>
                </a>
              </div>
            </div> */}
          </div>
        </div>
        <div class="footer__option">
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="footer__option__item">
                <h5>About us</h5>
                <p>
                  Since 2024, we’ve been creating stunning floral decorations
                  for all occasions. With creativity and attention to detail, we
                  transform spaces into beautiful, memorable experiences. Let us
                  bring elegance to your special moments!
                </p>
                <a href="#" class="read__more">
                  Read more <span class="arrow_right"></span>
                </a>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-3">
              <div class="footer__option__item">
                <h5>Who we are</h5>
                <ul>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-3">
              <div class="footer__option__item">
                <h5>Our Work</h5>
                <ul>
                  <li>
                    <a href="#">Wedding Decorations</a>
                  </li>
                  <li>
                    <a href="#">Event Floral Designs</a>
                  </li>
                  <li>
                    <a href="#">Themed Arrangements</a>
                  </li>
                  <li>
                    <a href="#">View Our Portfolio</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="footer__option__item">
                <h5>Newsletter</h5>
                <p>
                  Get the latest updates on floral trends, exclusive offers, and
                  event decoration tips.
                </p>

                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit">
                    <i class="fa fa-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__copyright">
          <div class="row">
            <div class="col-lg-12 text-center">
              <p class="footer__copyright__text">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | Beautiful floral decorations crafted with
                <i class="fa fa-heart-o" aria-hidden="true"></i> by
                <a href="#" target="_blank">
                  DK Decorators
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
