import React from "react";
import '../ExtraTwo/ExtraTwo.css'
import GirlSpeaking from '../../Image/GirlSpeaking.jpg'
function ExtraTwo(){
    return(
<section id="about-section" className="pt-5 pb-5">
  <div className="container wrapabout">
    <div className="red" />
    <div className="row">
      <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
        <div className="blockabout">
          <div className="blockabout-inner text-center text-sm-start">
            <div className="title-big pb-3 mb-3">
              <h3>Our Commitment to Excellence</h3>
            </div>
            <p className="description-p text-muted pe-0 pe-lg-0">
            At Diacool, we are committed to delivering excellence in every service we provide. Our dedicated team ensures top-notch quality, reliability, and customer satisfaction.
            </p>
            <p className="description-p text-muted pe-0 pe-lg-0">With years of experience, we have built a reputation for reliability, quality, and customer-focused solutions.</p>
            <div className="sosmed-horizontal pt-3 pb-3">
              <a href="https://www.facebook.com/profile.php?id=61554996632615&mibextid=9R9pXO"><i className="fa fa-facebook" /></a>
              <a href="https://www.instagram.com/diakool_airconditioners/"><i className="fa fa-instagram" /></a>
              <a href="https://www.youtube.com/channel/UCpyCCBRs_mJgmPZThPY-MMA"><i className="fa fa-youtube" /></a>
            </div>
            <a href="#" className="btn rey-btn mt-3">See More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-6 mt-5 mt-lg-0">
        <figure className="potoaboutwrap">
          <img src={GirlSpeaking} style={{width: '400px', height: '700px'}} alt="potoabout" />
        </figure>
      </div>
    </div>
  </div>
</section>


    )
}
export default ExtraTwo