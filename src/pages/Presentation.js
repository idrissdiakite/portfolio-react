import React from "react";
import { motion } from "framer-motion";
import Infos from "../components/Infos";

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

export default Presentation;
