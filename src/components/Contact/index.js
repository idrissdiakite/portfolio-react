import React from "react";
import Title from "../Title";
import { motion } from "framer-motion";
import Details from "./details";
import "./style.scss";

const Contact = () => {
  return (
    <>
      <Title className="contact__title">Contact</Title>
      <motion.div 
        className="contact__suptitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", ease: "anticipate", duration: 3 }}
      >
        <p>Potentiellement disponible à partir d'avril (2024).</p>
        <p>Ouvert aux propositions - développeur front-end/créatif.</p>
      </motion.div>
      <Details />
    </>
  )
}

export default Contact;
