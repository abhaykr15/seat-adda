import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "./img/logo-seat-adda.jpg";
import About from "./About";

export default function Header() {
  const [showToggleItem, setShowToggleItem] = useState(false);

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <span
        class="material-symbols-outlined h-menu"
        onClick={() => {
          showToggleItem ? setShowToggleItem(false) : setShowToggleItem(true);
        }}
      >
        menu
      </span>
      <div className="h-items">
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>

        <Link to="/faq-11">FAQ</Link>
        <Link to="/login">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-circle"
            viewBox="0 0 16 16"
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path
              fill-rule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
            />
          </svg>{" "}
          Login/Register
        </Link>
      </div>
      {showToggleItem && (
        <div className="h-toggle-items">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq-11">FAQ</Link>
          <Link to="/login">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path
                fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
              />
            </svg>{" "}
            Login/Register
          </Link>
        </div>
      )}
    </div>
  );
}
