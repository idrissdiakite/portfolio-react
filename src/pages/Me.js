import React from "react";
import Content from "../components/Me";
import PageTransition from "../utils/Transitions/transition";

const Me = () => {
  return (
    <PageTransition className="presentation">
      <Content />
    </PageTransition>
  )
}

export default Me;
