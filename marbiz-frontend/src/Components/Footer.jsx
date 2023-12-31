import React from "react";
import logo from "../Images/marbiz-logo.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-center text-lg-start text-white pt-3">
      <section className="">
        <div className="container-fluid text-start mt-5  ">
          {/* <!-- Grid row --> */}
          <div className="row justify-content-center ">
            {/* <!-- Grid column --> */}
            <div className="col-md-4 d-flex">
              {/* <!-- Content --> */}
              <div className="pe-md-3">
                <div className="footer-brand ">
                  <Link className="" to="/">
                    <img src={logo} alt="Logo" className="img-fluid " />
                  </Link>
                </div>
                <div
                  className="my-3 text-secondary"
                  style={{
                    fontSize: "20px",
                    fontWeight: "400",
                    fontFamily: "DM_Sans1",
                  }}
                >
                  Influencer marketing can be an effective strategy for many
                  brands, but it's not without its challenges and potential
                  pitfalls. Here are some common shortcomings or challenges
                  associated with influencer marketing.
                </div>
              </div>
              <div className="vr desktop-view"></div>
            </div>
            <div className="col-md-3 ">
              <h4 className="  mb-4">Platform</h4>
              <p>
                <Link to="/Instagram" className="group-item">
                Instagram
                </Link>
              </p>
              <p>
                <Link to="/Youtube" className="group-item">
                  Youtube
                 </Link>
              </p>
              <p>
                <Link to="/UGC" className="group-item">
                  UGC
                </Link>
              </p>
              <p>
                <Link
                  to="/Linkedin"
                  className="group-item"
                >
              Linkedin
                </Link>
              </p>
            </div>

            <div className="col-md-2  ">
              <h4 className="  mb-4">Discover</h4>
              <p>
                <Link to="/explore" className="group-item">
                  Find Influencers
                </Link>
              </p>
              <p>
                <Link to="/explore" className="group-item">
                  Top Influencers
                </Link>
              </p>
              <p>
                <Link to="/explore" className="group-item">
                  Hire an Influencer
                </Link>
              </p>
            </div>

            <div className="col-md-2 ">
              <h4 className="  mb-4">Contact</h4>
              <p>
                <Link to={"/#"} className="text-secondary">
                  <i className="fas fa-home me-3"></i>
                  Ajmer, Rajasthan
                </Link>
              </p>
              <p>
                <Link to={"mailto:info@marbiz.com"} className="text-secondary">
                  <i className="fas fa-envelope me-3"></i>
                  info@marbiz.in
                </Link>
              </p>
              <p>
                <a href="tel:+918078671648" className="text-secondary">
                  <i className="fas fa-phone me-3"></i>
                  +91-8078671648
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="d-flex social-section align-items-center justify-content-center justify-content-lg-between p-4 ">
        <div div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div className="text-center p-3 bottom-footer">
          © 2023 Copyright: Yuvmedia
          <Link className="text-reset fw-bold" to="/"></Link>
        </div>

        <div>
          <Link to="/facebook" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="/twitter" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="/google" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </Link>
          <Link to="/instagram" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="/linkedin" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="/github" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </section>

      <div className=" pb-5 mobile-view">
        <hr />
      </div>
    </footer>
  );
};
export default Footer;
