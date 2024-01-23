import React from 'react';
import Banner from '../../Image/banner1.jpg'
import Banner2 from '../../Image/banner2.jpg'

const ImageSection = () => {
  return (
    <div className="container-fluid m-0 p-0">
    <div className="row">
      <div className="col-md-12 mb-4">
        <div  style={{height:'100vh'}}>
          <img 
          src={Banner}
          alt="First Image"
          style={{height:'100%'}}
            className="img-fluid"
          />
          {/* <div className="card-body">
            <p className="card-text">
              Your first paragraph here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="btn btn-primary">Contact Now</button>
          </div> */}
        </div>
      </div>
      <div className="col-md-12 mb-4">
        <div style={{height:'100vh'}}>
          <img
          src={Banner2}
          alt="Second Image"
          style={{height:'100%'}}
            className="img-fluid"
          />
          {/* <div className="card-body">
            <p className="card-text">
              Your second paragraph here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="btn btn-primary">Contact Now</button>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  );
};

export default ImageSection;
