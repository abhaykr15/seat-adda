import React from "react";

import Form from "./Form";
import Offers from "./Offers";
import Services from "./Services";
import TextDetail from "./TextDetail";
import Faqs from "./Faqs";
import BusStop from "./BusStop";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterMobile from "./FooterMobile";
import Chat from "./Chat.jsx";

export default function Home() {
  return (
    <div className="home">
      <Form />
      <Offers />
      <Services />
      <TextDetail />
      <Faqs />
      <BusStop />
      <FooterOne />
      <FooterTwo />
      <FooterMobile />
      <Chat />
    </div>
  );
}
