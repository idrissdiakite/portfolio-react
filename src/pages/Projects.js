import React from "react";
import Content from "../components/Projects";
import PageTransition from "../utils/Transitions/transition";

const Projects = () => {
  return (
    <PageTransition className="projects">
      <Content />
    </PageTransition>
  )
}

export default Projects;
