import React from "react";

function Department(){
    return(
        <section className="department_section layout_padding">
        <div className="department_container">
          <div className="container ">
            <div className="heading_container heading_center">
              <h2>
                Hot Categories
              </h2>
              <p>
                Asperiores sunt consectetur impedit nulla molestiae delectus repellat laborum dolores doloremque accusantium
              </p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/airconditioner.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Split A.C
                    </h5>
                    <p>
                      fact that a reader will be distracted by the readable page when looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/windowac.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Window A.C
                    </h5>
                    <p>
                      fact that a reader will be distracted by the readable page when looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/portableac.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Portable A.C
                    </h5>
                    <p>
                      fact that a reader will be distracted by the readable page when looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="box ">
                  <div className="img-box">
                    <img src="images/aircurtain.png" alt />
                  </div>
                  <div className="detail-box">
                    <h5>
                      Air Curtain
                    </h5>
                    <p>
                      fact that a reader will be distracted by the readable page when looking at its layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="productlisting">
                View All
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Department