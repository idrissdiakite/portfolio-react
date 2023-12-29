import React from "react";
import { motion } from "framer-motion";
import Jobs from "./jobs";
import "./style.scss";

const Experiences = () => {
  return (
    <>
      <h1 className="experiences__title">Experiences</h1>
      <motion.p
        className="experiences__suptitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", ease: "anticipate", duration: 2 }}
      >
        Après plus de 10 années passées dans l'univers de la vente, j'ai décidé fin 2019 de quitter mon poste de manager adjoint afin de me professionnaliser dans le développement web. Titulaire du Titre Professionnel "Développeur web et web mobile full stack" (bac +2), je suis actuellement en cdi au sein de l'agence Digital Cover en tant que développeur créatif.
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