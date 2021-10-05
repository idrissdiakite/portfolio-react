import React from "react";
import { motion } from "framer-motion";
import Menu from "../../components/Menu";
import Button from "../../components/Button";
import Details from "../../components/Details";
import MenuManager from "../../components/Menu/MenuManager";

import "./style.scss";

const Contact = () => {
  return (
    <MenuManager>
      <motion.div
        initial="initial"
        animate="in"
        variants={variants}
        transition={pageTransition}
      >
        <Menu />
        <section className="contact">
          <h1>Contact</h1>
          <div className="main-container">
            <Details />
          </div>
        </section>
        <Button />
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

export default Contact;
