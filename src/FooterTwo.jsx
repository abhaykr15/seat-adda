import React from "react";
import "./footerTwo.css";

export default function FooterTwo() {
  return (
    <div className="footer-2 container-fluid">
      <div className="links">
        <a className="border-right" href="/operators">
          Operators
        </a>
        <a className="border-right" href="/routes">
          Routes
        </a>
        <a  href="/about">
          About
        </a>
      </div>
      <div className="copyright">
        <p>© 2023 Web, Inc. All rights reserved.</p>
      </div>
    </div>
  );
}
