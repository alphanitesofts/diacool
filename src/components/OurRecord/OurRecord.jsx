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
          <h3 className="dark-color">Since 2014</h3>
          <h6 className="theme-color lead">An Air Conditioner &amp; Company In UAE</h6>
          <p>I <mark>You Only Demand</mark> we provide customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
          <div className="row about-list">
            <div className="col-md-6">
              <div className="media">
                <label>Birthday</label>
                <p>4th april 1998</p>
              </div>
              <div className="media">
                <label>Age</label>
                <p>22 Yr</p>
              </div>
              <div className="media">
                <label>Residence</label>
                <p>Canada</p>
              </div>
              <div className="media">
                <label>Address</label>
                <p>California, USA</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="media">
                <label>E-mail</label>
                <p>info@domain.com</p>
              </div>
              <div className="media">
                <label>Phone</label>
                <p>820-885-3321</p>
              </div>
              <div className="media">
                <label>Skype</label>
                <p>skype.0404</p>
              </div>
              <div className="media">
                <label>Freelance</label>
                <p>Available</p>
              </div>
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
            <h6 className="count h2" data-to={500} data-speed={500}>500</h6>
            <p className="m-0px font-w-600" style={{color:"white"}}>Happy Clients</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" data-to={150} data-speed={150}>150</h6>
            <p className="m-0px font-w-600" style={{color:"white"}}>A.C Installed</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" data-to={850} data-speed={850}>850</h6>
            <p className="m-0px font-w-600" style={{color:"white"}}>Locations</p>
          </div>
        </div>
        <div className="col-6 col-lg-3">
          <div className="count-data text-center">
            <h6 className="count h2" data-to={190} data-speed={190}>190</h6>
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