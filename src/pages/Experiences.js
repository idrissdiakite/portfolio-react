import React from "react";
import { motion } from "framer-motion";
import Jobs from "../components/Jobs";

const Experience = () => {
  return (
    <motion.section
      className="experiences"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <h1 className="experiences__title">Experiences</h1>
      <Jobs />
    </motion.section>
  )
}

export default Experience;
