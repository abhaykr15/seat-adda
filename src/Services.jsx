import React from "react";
import "./services.css";
import Support from "./img/Support.png";
import Route from "./img/Route.png";
import RegisterBus from "./img/Register bus.png";
import Partner from "./img/partner.png";
import Discount from "./img/Discount.png";

export default function Services() {
  return (
    <div className="services container">
      <div className="row services-row">
        <div className="col">
          <div>
            <img src={Support} alt="support" />
          </div>
          <h2>24X7</h2>
          <h5>CUSTOMER SUPPORT</h5>
        </div>
        <div className="col">
          <div>
            <img src={Route} alt="route" />
          </div>
          <h2>100+</h2>
          <h5>ROUTES</h5>
        </div>
        <div className="col">
          <div>
            <img src={Discount} alt="discount" />
          </div>
          <h2>INSTANT</h2>
          <h5>DISCOUNT</h5>
        </div>
        <div className="col">
          <div>
            <img src={RegisterBus} alt="register-bus" />
          </div>
          <h2>500+</h2>
          <h5>BUS REGISTER</h5>
        </div>
        <div className="col">
          <div>
            <img src={Partner} alt="bus-partner" />
          </div>
          <h2>50+</h2>
          <h5>BUS PARTNERS</h5>
        </div>
      </div>
    </div>
  );
}
