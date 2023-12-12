import React from "react";
import PageTransition from "../utils/Transitions/transition";
import Content from "../components/Contact";

const Contact = () => {
  return (
    <PageTransition className="contact">
      <Content />
    </PageTransition>
  )
}

export default Contact;
