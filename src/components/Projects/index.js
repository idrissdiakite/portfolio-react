import React from "react";
import { motion } from "framer-motion";
import Cards from "./cards";
import "./style.scss";
import Title from "../Title";

const Projects = () => {
  return (
    <>
      <Title className="projects__title">Projets</Title>
      <motion.div
        className="projects__cards"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Cards />
      </motion.div>
    </>
  )
}

// Motion
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 2, staggerChildren: 1 }
  }
}

export default Projects;
