import React from "react";
import '../OurRecord/OurRecord.css'
import since from '../../Image/since.jpg'
function OurRecord(){
    return(
      <section className="section about-section gray-bg" id="about">
  <div className="container">
    <div className="row align-items-center flex-row-reverse">
      <div className="col-lg-6">
        <div className="about-text go-to">
          <h3 className="dark-color">Diacool Air Conditioners</h3>
          <h6 className="theme-color lead">Your Trusted Cooling Solution in the UAE Since 2014</h6>
          <p>I <mark>At Diacool </mark> 
          , we are committed to providing top-notch air conditioning solutions tailored to your needs.
                Whether it's for your home or business, we ensure a cool and comfortable environment year-round.
                Our passion is to deliver excellence in service and innovative cooling solutions.</p>
          <div className="row about-list">
            <div className="col-md-8">
              {/* <div className="media">
                <label>Birthday</label>
                <p>4th april 1998</p>
              </div> */}
              {/* <div className="media">
                <label>Age</label>
                <p>22 Yr</p>
              </div> */}
              {/* <div className="media">
                <label>Residence</label>
                <p>Canada</p>
              </div> */}
              <div className="media">
                <label>Address:  {" "}</label>
                <p>{" "}Amman Street - INDUSTRIAL AREA 2 - Ajman - United Arab Emirates</p>
              </div>
              <div className="media">
                <label>E-mail </label>
                <p>Diakoolairconditioners@gmail.com</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="media">
                <label>Phone</label>
                <p>+971505735436</p>
              </div>
              {/* <div className="media">
                <label>Skype</label>
                <p>skype.0404</p>
              </div> */}
              {/* <div className="media">
                <label>Freelance</label>
                <p>Available</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="about-avatar">
          <img src={since} title alt />
        </div>
      </div>
    </div>
    <div className="counter">
      <div className="row">
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" style={{color:"white"}} data-to={500} data-speed={500}>500</h6>
            <p className="m-0px font-w-600" style={{color:"white"}}>Happy Clients</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" style={{color:"white"}} data-to={150} data-speed={150}>150</h6>
            <p className="m-0px font-w-600" style={{color:"white"}}>A.C Installed</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" style={{color:"white"}} data-to={850} data-speed={850}>850</h6>
            <p className="m-0px font-w-600" style={{color:"white"}}>Locations</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" style={{color:"white"}} data-to={190} data-speed={190}>190</h6>
            <p className="m-0px font-w-600" style={{color:"white"}}>Telephonic Talk</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}
export default OurRecord