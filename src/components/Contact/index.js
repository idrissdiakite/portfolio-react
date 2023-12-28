import React from "react";
import { motion } from "framer-motion";
import Details from "./details";
import "./style.scss";

const Contact = () => {
  return (
    <>
      <h1 className="contact__title">Contact</h1>
      <motion.div 
        className="contact__suptitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", ease: "anticipate", duration: 3 }}
      >
        <p>Actuellement en poste au sein de l'agence Digital Cover.</p>
        <p>Ouvert à toutes propositions - développeur front-end/créatif.</p>
      </motion.div>
      <Details />
    </>
  )
}

export default Contact;
