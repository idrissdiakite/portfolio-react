import React from "react";
import { motion } from "framer-motion";
import Infos from "../../components/Infos";

import "./style.scss";

const Presentation = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      variants={variants}
      transition={pageTransition}
    >
      <section className="presentation">
        <h1>Qui je suis</h1>
        <Infos />
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

export default Presentation;
