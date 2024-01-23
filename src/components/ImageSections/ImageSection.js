import React from 'react';
import Banner from '../../Image/Diakool_banner1.png'
import Banner2 from '../../Image/Diakool_banner2.png'

const ImageSection = () => {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-12 mb-4">
        <div className="card">
          <img
          src={Banner}
          alt="First Image"
            className="card-img-top img-fluid"
          />
          <div className="card-body">
            <p className="card-text">
              Your first paragraph here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="btn btn-primary">Contact Now</button>
          </div>
        </div>
      </div>
      <div className="col-md-12 mb-4">
        <div className="card">
          <img
          src={Banner2}
          alt="Second Image"
            className="card-img-top img-fluid"
          />
          <div className="card-body">
            <p className="card-text">
              Your second paragraph here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <button className="btn btn-primary">Contact Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default ImageSection;
