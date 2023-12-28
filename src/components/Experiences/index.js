import React from "react";
import { motion } from "framer-motion";
import Jobs from "./jobs";
import "./style.scss";

const Experiences = () => {
  return (
    <>
      <h1 className="experiences__title">Experiences</h1>
      <motion.div
        className="experiences__wrapper"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <Jobs />
      </motion.div>
    </>
  )
}

export default Experiences;

// Motion
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 1, staggerChildren: 0.1 },
  },
};