import React from "react";
import { motion } from "framer-motion";
import Infos from "./infos";
import "./style.scss";

const Me = () => {
  return (
    <>
      <h1 className="whoiam__title">Qui je suis</h1>
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
      <div className="whoiam__wrapper">
        <Infos />
      </div>
    </>
  )
}

export default Me;
