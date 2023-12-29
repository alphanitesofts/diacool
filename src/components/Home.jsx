import React from "react";
import Department from "./Department";
import About from "./About";
import Doctors from "./Doctors";
import Contact from "./Contact";
import Client from "./Client";
import Services from "./Services";
import Blogs from "./Blogs";
import OurRecord from "./OurRecord/OurRecord";
import ChooseUs from "./ChooseUs/ChooseUs";
import ExtraOne from "./ExtraOne/ExtraOne";
import ExtraTwo from "./ExtraTwo/ExtraTwo";

function Home() {
  return (
    <>
      <div className="hero_area">
        <section className="slider_section">
          <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="10000">
                <img src="images/Artb – 1 (1).png" className="d-block w-100 h-100" alt="..." style={{ objectFit: "cover",height:"500px" }} />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img src="images/Artb – – (1).png" className="d-block w-100 h-100" alt="..." style={{ objectFit: "cover",height:"500px" }} />
              </div>
              <div className="carousel-item" data-interval="10000">
                <img src="images/Artb –.png" className="d-block w-100 h-100" alt="..." style={{ objectFit: "cover",height:"500px" }} />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </section>
        {/* end slider section */}
      </div>

      <Department />
      <About />
      <Services />
      <OurRecord />
      <ChooseUs />
      <ExtraOne />
      <ExtraTwo />
      <Doctors />

      {/* <Blogs/> */}
      <Contact />
      <Client />
    </>

  )
}
export default Home