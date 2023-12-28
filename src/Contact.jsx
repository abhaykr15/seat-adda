import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="contact-1 container-fluid">
      <div className="container mt-4">
        <h2>Contact Us</h2>

        <p>
          If you have any questions or need assistance, feel free to reach out
          to us.
        </p>

        <h4>Contact Information</h4>
        <ul>
          <li>Email: info@seatadda.com</li>
          <li>Phone: +91 123 456 7890</li>
        </ul>

        <h4>Visit Us</h4>
        <p>
          Seat Adda Bus Booking Services
          <br />
          123 Bus Lane
          <br />
          City, State - 12345
          <br />
          India
        </p>

        <h4>Feedback</h4>
        <p>
          We value your feedback. Send us your suggestions and comments at
          feedback@seatadda.com.
        </p>
      </div>
    </div>
  );
}
