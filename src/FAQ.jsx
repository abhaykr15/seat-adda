import React from "react";
import "./faq.css";

const FaqPage = () => {
  return (
    <div className="faq-11 container-fluid">
      <div className="container mt-4">
        <h2>Frequently Asked Questions (FAQ)</h2>

        <h4>General Questions</h4>
        <div>
          <h5>1. How can I book a bus ticket on Seat Adda?</h5>
          <p>
            Booking a bus ticket on Seat Adda is easy. Simply visit our website,
            select your destination, choose your preferred bus, and complete the
            booking process online.
          </p>

          <h5>2. Are there any discounts or offers available?</h5>
          <p>
            Yes, we frequently offer exciting discounts, cashback, and special
            offers on bus ticket bookings. Keep an eye on our promotions page
            for the latest deals.
          </p>

          {/* Add more questions and answers as needed */}
        </div>

        <h4>Payment and Refunds</h4>
        <div>
          <h5>1. What payment methods are accepted?</h5>
          <p>
            We accept various payment methods, including credit cards, debit
            cards, and net banking. Check our payment options during the booking
            process for more details.
          </p>

          <h5>2. How can I request a refund?</h5>
          <p>
            If you need to request a refund, please contact our customer support
            team. Refund policies may vary based on the specific circumstances
            of your booking.
          </p>

          {/* Add more questions and answers as needed */}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
