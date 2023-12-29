import React from "react";

function Footer(){
    return(
        <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 footer_col">
              <div className="footer_contact">
                <h4>
                  Reach at..
                </h4>
                <div className="contact_link_box">
                  <a href="geo:0,0?q=Amman+Street+-+Industrial+Area+2+-+Anjman">
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>
                      Amman Street - Industrial Area 2 - Anjman
                    </span>
                  </a>
                  <a href="tel:+971505735436">
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>
                      Call +971505735436
                    </span>
                  </a>
                  <a href="mailto:Diakoolairconditioners@gmail.com">
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>
                    Diakoolairconditioners@gmail.com
                    </span>
                  </a>
                </div>
              </div>
              <div className="footer_social">
                <a href="https://www.facebook.com/profile.php?id=61554996632615&mibextid=9R9pXO" target="_blank">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="https://www.youtube.com/channel/UCpyCCBRs_mJgmPZThPY-MMA" target="_blank">
                  <i className="fa fa-youtube" aria-hidden="true" style={{ color: "white" }}/>
                </a>
                <a href="https://www.linkedin.com/in/diakool-air-conditioners-b206072a2/" target="_blank">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </a>
                <a href="https://www.instagram.com/diakool_airconditioners/" target="_blank">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer_col">
              <div className="footer_detail">
                <h4>
                  About
                </h4>
                <p>
                  Beatae provident nobis mollitia magnam voluptatum, unde dicta facilis minima veniam corporis laudantium alias tenetur eveniet illum reprehenderit fugit a delectus officiis blanditiis ea.
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto footer_col">
              <div className="footer_link_box">
                <h4>
                  Links
                </h4>
                <div className="footer_links">
                  <a className="active" href="index.html">
                    Home
                  </a>
                  <a className href="about.html">
                    About
                  </a>
                  <a className href="departments.html">
                    Departments
                  </a>
                  <a className href="doctors.html">
                    Doctors
                  </a>
                  <a className href="contact.html">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 footer_col ">
              <h4>
                Newsletter
              </h4>
              <form action="#">
                <input type="email" placeholder="Enter email" />
                <button type="submit" className="text-light">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="footer-info">
            <p>
              © <span id="displayYear" /> 2014 Copyright All Rights Reserved By
              <a href="https://html.design/">Diacool</a>
            </p>
          </div>  
        </div>
      </footer>
    )
}
export default Footer