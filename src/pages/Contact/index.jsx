import React from "react";
import { motion } from "framer-motion";
import Details from "../../components/Details";

import "./style.scss";

const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 3 }}
      // initial="initial"
      // animate="in"
      // variants={variants}
      // transition={pageTransition}
    >
      <section className="contact">
        <h1 className="contact__title">Contact</h1>
        <Details />
      </section>
    </motion.div>
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

export default Contact;
