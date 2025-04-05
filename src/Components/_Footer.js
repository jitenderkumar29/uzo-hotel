import React from "react";
import { Link } from "react-router-dom";

// import logoPng from "../Assets/icons/logo.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="container">
        <div className="quicklinks row">
          <section className="col-lg">
            <div className="mb-3 pb-3 pe-3 border-bottom">
              <h4>Help & Support</h4>
            </div>
            <ul>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
              {/* <li>
                <Link to="#">Feedback</Link>
              </li> */}
              <li>
                <Link to="/faq">Faq</Link>
              </li>
              <li>
                <Link to="/csr-responsibilities">CSR & Responsibility</Link>
              </li>
              <li>
                <Link to="/photo-gallery">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/">Site Map</Link>
              </li>
              <li>
                <Link to="/career">career</Link>
              </li>
            </ul>
          </section>

          <section className="col-lg">
            <div className="mb-3 pb-3 pe-3 border-bottom">
              <h4>Information</h4>
            </div>
            <ul>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="#">Awards & Accolades</Link>
              </li>
              <li>
                <Link to="#">E Brochure</Link>
              </li>
              {/* <li>
                <Link to="#">Testimonials</Link>
              </li> */}
              <li>
                <Link to="/blogs">Shadi Blogs</Link>
              </li>
              <li>
                <Link to="/sweet-stories">Sweet Stories</Link>
              </li>
              <li>
                <Link to="/ns-center">NobleShaadi Centers</Link>
              </li>
            </ul>
          </section>

          <section className="col-lg">
            <div className="mb-3 pb-3 pe-3 border-bottom">
              <h4>Services</h4>
            </div>
            <ul>
              <li>
                <Link to="/membership-plans">Membership Plans</Link>
              </li>
              <li>
                <Link to="#">Digital Magazine</Link>
              </li>
              <li>
                <Link to="/sapphire-premier">Saphire Premier</Link>
              </li>
              <li>
                <Link to="/ns-privilege">NS Privilege</Link>
              </li>
              <li>
                <Link to="#">Horoscope Match</Link>
              </li>
              <li>
                <Link to="#">Android / IOS App </Link>
              </li>
              {/* <li>
                <Link to="#">IOS App</Link>
              </li> */}
            </ul>
          </section>

          <section className="col-lg">
            <div className="mb-3 pb-3 pe-3 border-bottom">
              <h4>Legal & You</h4>
            </div>
            <ul>
              <li>
                <Link to="/fraud-reporting">Fraud Reporting</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/third-party-terms-of-use">
                  3rd Party Terms Of Use
                </Link>
              </li>
              <li>
                <Link to="/privacy-policies">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/privacy-features">Privacy Feature</Link>
              </li>
              {/* <li>
                <Link to="/grievance">Grievance</Link>
              </li> */}
              <li>
                <Link to="/write-to-us">Report Misuse</Link>
              </li>
            </ul>
          </section>
        </div>

        <div className="socials row">
          <section className="col-lg text-start d-flex align-items-center">
            {/* <img src={logoPng} alt="" /> */}
            NobleShaadi @ 2022 All Copyright Reserved
          </section>

          <section className="col-lg">
            <ul>
              <li className="facebook">
                <i className="fab fa-facebook-f"></i>
              </li>
              <li className="twitter">
                <i className="fab fa-twitter"></i>
              </li>
              <li className="instagram">
                <i className="fab fa-instagram"></i>
              </li>
              <li className="youtube">
                <i className="fab fa-youtube"></i>
              </li>
              <li className="linkedin">
                <i className="fab fa-linkedin-in"></i>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
