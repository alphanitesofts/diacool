import React, { forwardRef, useEffect, useState } from "react";
import './ProductInvoice.css'
const imageUrl = 'https://supercoolacimages.alphanitesofts.net/';
const ProductInvoice = forwardRef((props, ref) => {
  // console.log("ProductInvoice component rendered", props);
  const { key_features, specification, product } = props
  const [generatedUrl, setGeneratedUrl] = useState("");

  useEffect(() => {
    // Your logic to generate the URL dynamically
    
    const dynamicUrl = window.location.href
    setGeneratedUrl(dynamicUrl);
  }, []);
  const formatDateTime = () => {
    const options = {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
      hour: "numeric",
      minute: "2-digit",
    };
    const dateTime = new Date().toLocaleDateString("en-US", options);
    const amPm = new Date().toLocaleTimeString("en-US", { hour12: true });
    return `${dateTime}`;
  };

  return (
    <div class="container" ref={ref}>
      <div class="row">
        <div class="col-md-12">
          <div class="panel panel-default plain" id="dash_0">
            <div class="panel-body p30">
              <div class="row">
                <div class="col-lg-12 top">
                  <div className="col-lg-6 date">
                    {formatDateTime()}
                  </div>
                  <div className="col-lg-6">SGS372HE</div>
                </div>
                <div class="col-lg-12">
                  <div class="invoice-details">
                    {/* <img src={`${imageUrl}${product.image[0]}`}/> */}
                    <h3>{product.name}</h3>
                  </div>
                </div>
                <div className="col-lg-12 table">
                  <div className="col-lg-6">
                    <div>
                      <h2><strong>Key Features</strong>
                      </h2>
                    </div>
                    <table>
                      <tr>
                        <th className="first">
                          <img
                            src={`${imageUrl}${key_features.image}`}
                            className="img-fluid lazyload"
                            alt={`${key_features.name}`}
                          />
                          <h5>{key_features.name}</h5>
                        </th>
                        <th>
                          <img
                            src={`${imageUrl}${key_features.image}`}
                            className="img-fluid lazyload"
                            alt={`${key_features.name}`}
                          />
                          <h5>{key_features.name}</h5>
                        </th>
                      </tr>
                    </table>
                  </div>
                  <div className="col-lg-6 ">
                    <div>
                      <h2>
                        <strong> Specifications</strong>
                      </h2>
                    </div>
                    <table>
                      <tr>
                        <th> <h5 className="speci">{specification.name}</h5>
                        <h5>{specification.value}</h5>
                        </th>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="invoice-footer ">
                  <p class="text-center">
                    {generatedUrl}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
})
export default ProductInvoice;
