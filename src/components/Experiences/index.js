import React from "react";
import { motion } from "framer-motion";
import Jobs from "./jobs";
import "./style.scss";

const Experiences = () => {
  return (
    <>
      <h1 className="experiences__title">Experiences</h1>
      <motion.p
        className="whoiam__suptitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", ease: "anticipate", duration: 2 }}
      >
        Désireux de me professionnaliser dans le développement web, j'ai
        quitté mon poste de Manager Adjoint en 2019. Titulaire du titre
        professionnel "Développeur web et web mobile full stack" (Bac+2)
        depuis mai 2021.

      </motion.p>
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