import React from "react";
import { motion } from "framer-motion";
import Cards from "../components/Cards";

const Projects = () => {
  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <h1 className="projects__title">Projets</h1>
      <Cards />
    </motion.section>
  )
}

export default Projects;
