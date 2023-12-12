import React from "react";
import { motion } from "framer-motion";
import Particles from "../../utils/Particles/Particle";
import "./style.scss";

const Home = () => {
  return (
    <>
      <Particles />
      <motion.h1
        className="home__title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      >
        <span>Idriss</span>
        <span>Diakite</span>
      </motion.h1>
      <motion.div 
        className="home__suptitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >Développeur front-end</motion.div>
    </>
  )
}

// Motion
const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 5.5,
}

export default Home;
