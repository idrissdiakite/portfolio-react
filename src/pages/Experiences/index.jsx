import React from "react";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import Jobs from "../../components/Jobs";
import Menu from "../../components/Menu";

import "./style.scss";

const Experience = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={variants}
      transition={pageTransition}
    >
      <Menu />
      <section className="experience">
        <h1>Experiences</h1>
        <div className="main-container">
          <Jobs />
        </div>
        <Button />
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

export default Experience;
