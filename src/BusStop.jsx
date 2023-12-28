import React from "react";
import "./busStop.css";
import Bus_stop from "./img/bus-stop-pana.svg";
import AppStore from "./img/app-store.png";
import PlayStore from "./img/google-play.png";
import StarLogo from "./img/star.webp";

export default function BusStop() {
  return (
    <div className="busStop container-fluid">
      <div className="row shadow">
        <div className="col-lg-6 col-12 bus-stop-img-container">
          <img src={Bus_stop} alt="bus-stop" />
        </div>
        <div className="col-lg-6 col-12 busStop-row-2">
          <h2>Install Web App & Make Travel a Lot of Fun</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="row ">
            <div className="row row-cols-md-2 row-cols-1">
              <div className="get-notified my-2 px-3">
                <h3>Get Notified</h3>
                <p>When the bus starts and is about to reach you</p>
              </div>
              <div className="get-notified my-2 px-3">
                <h3>Trusted by Thousands</h3>
                <p>Over 1000 reviews from our customers.</p>
              </div>
              <div className="get-notified my-2 px-3">
                <h3>Lightning Fast</h3>
                <p>Book in 30 seconds even on Low Network.</p>
              </div>
              <div className="get-notified my-2 px-3">
                <h3>Enjoy Other Stuff</h3>
                <p>Games, offers, Free Rides and a lot more.</p>
              </div>
            </div>
            <div className="logo-container">
              <div>
                <img
                  className="store-logo"
                  src={AppStore}
                  alt="app-store-logo"
                />
              </div>
              <div>
                <img
                  className="store-logo"
                  src={PlayStore}
                  alt="play-store-logo"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img src={StarLogo} alt="star-logo" />
                <p style={{fontWeight:"500",fontSize:"1.2rem"}}>4.6/5 based on 966 reviews</p>
              </div>

              <div className="col">
                <p>Trusted by 1000+ Travellers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
