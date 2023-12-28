import React from "react";
import "./offers.css";
import offer_1 from "./img/offer_1.jpg";
import offer_2 from "./img/offer_2.jpg";
import offer_3 from "./img/offer_3.jpg";
import offer_4 from "./img/offer_4.jpg";

export default function Offers() {
  return (
    <div className="offers">
      <div className="container py-3 shadow">
        <div className="row offer-row-1 mb-3">
          <div className="web-offers ">
            <h2 style={{ fontSize: "1.5rem" }}>Web Offers</h2>
          </div>
          <div className="others">
            <div>
              <p>All Offers</p>
            </div>
            <div>
              <p>Bus Offers</p>
            </div>
            <div style={{backgroundColor:"#dfdfe7", borderRadius:".3rem"}}>
              <p style={{color:"black"}}>View All</p>
            </div>
          </div>
        </div>
        <div className="row offer-row-2 ">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active " data-bs-interval="5000">
                <div className="d-flex">
                  <img src={offer_1} className="d-block img-right  " alt="..." />
                  <img src={offer_2} className="d-block " alt="..." />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div className="d-flex">
                  <img src={offer_2} className="d-block img-right  " alt="..." />
                  <img src={offer_3} className="d-block " alt="..." />
                </div>
              </div>

              <div className="carousel-item" data-bs-interval="5000">
                <div className="d-flex">
                  <img src={offer_3} className="d-block img-right " alt="..." />
                  <img src={offer_4} className="d-block " alt="..." />
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <div className="d-flex">
                  <img src={offer_4} className="d-block img-right " alt="..." />
                  <img src={offer_1} className="d-block " alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
