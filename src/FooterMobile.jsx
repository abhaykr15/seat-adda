import React from "react";
import "./footerMobile.css";

export default function FooterMobile() {
  return (
    <div className="footer-m container-fluid">
      <div className="row row-cols-5">
        <div className="footer-list home">
          <span class="material-symbols-outlined" style={{ color: "red" }}>
            home
          </span>
          <p style={{ color: "red" }}>Home</p>
        </div>
        <div className="footer-list booking">
          <span class="material-symbols-outlined">edit_calendar</span>
          <p>Booking</p>
        </div>
        <div className="footer-list menu">
          <span class="material-symbols-outlined">widgets</span>
          <p>Menu</p>
        </div>
        <div className="footer-list wallet">
          <span class="material-symbols-outlined">account_balance_wallet</span>
          <p>Wallet</p>
        </div>
        <div className="footer-list ">
          <span class="material-symbols-outlined">chat</span>
          <p>Chat</p>
        </div>
      </div>
    </div>
  );
}
