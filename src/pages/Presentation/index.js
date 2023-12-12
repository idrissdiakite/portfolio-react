import React from "react";
import { motion } from "framer-motion";
import Infos from "../../components/Infos";
import "./style.scss";

const Presentation = () => {
  return (
    <motion.section
      className="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <h1 className="presentation__title">Qui je suis</h1>
      <Infos />
    </motion.section>
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
