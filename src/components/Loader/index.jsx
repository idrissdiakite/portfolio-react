import React from "react";
import { motion } from "framer-motion";
import LoaderGif from "./../../assets/loader/loaderrr.gif";

import "./style.scss";

const Loader = () => {
  return (
    <motion.div 
      className="loader"
      initial="initial"
      animate="in"
      variants={pageVariants}
      transition={pageTransition}
      >
      <img src={LoaderGif} alt="loader" />
    </motion.div>
  );
};

// Motion
const pageVariants = {
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
  duration: 1.8,
};

export default Loader;
