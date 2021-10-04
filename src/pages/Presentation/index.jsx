import React from "react";
import { motion } from "framer-motion";
import Infos from "../../components/Infos";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import MenuManager from "../../components/Menu/MenuManager";

import "./style.scss";

const Presentation = () => {
  return (
    <MenuManager>

      <motion.div
        initial="initial"
        animate="in"
        variants={variants}
        transition={pageTransition}>

        <Menu />

      <section className="presentation">
        <h1>Qui je suis</h1>

        <div className="main-container">
          <p>
            Après plus de 10 années passées dans l'univers de la vente, j'ai
            décidé fin 2019 de quitter mon poste de manager adjoint afin de me
            professionnaliser dans le développement web. ~ Titulaire du Titre
            Professionnel "Développeur web et web mobile full stack" (Bac +2).
          </p>
          <Infos />
        </div>

        <Button />

      </section>
      
      </motion.div>
      
    </MenuManager>
  );
};

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
