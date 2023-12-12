import React from "react";
import PageTransition from "../utils/Transitions/transition";
import Content from "../components/Experiences";

const Experience = () => {
  return (
    <PageTransition className="experiences">
      <Content />
    </PageTransition>
  )
}

export default Experience;
