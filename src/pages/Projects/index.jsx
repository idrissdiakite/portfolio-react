import React from "react";
import { motion } from "framer-motion";
import Cards from "../../components/Cards";
import "./style.scss";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
      // initial="initial"
      // animate="in"
      // variants={variants}
      // transition={pageTransition}
    >
      <section className="projects">
        <h1 className="projects__title">Projets</h1>
        <Cards />
      </section>
    </motion.div>
  )
}

// Motion
const variants = {
  initial: {
    opacity: 0,
    scale: 1,
  },
  in: {
    opacity: 1,
    x: 0,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 2.5,
};

export default Projects;
