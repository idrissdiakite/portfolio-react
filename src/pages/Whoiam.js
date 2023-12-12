import React from "react";
import Content from "../components/Whoiam";
import PageTransition from "../utils/Transitions/transition";

const Whoiam = () => {
  return (
    <PageTransition className="presentation">
      <Content />
    </PageTransition>
  )
}

export default Whoiam;
