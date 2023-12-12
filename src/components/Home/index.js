import React from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../../Particles/ParticleBackground";

const Home = () => {
  return (
    <>
      <ParticleBackground />
      <motion.h1
        className="homepage__title"
        initial="initial"
        animate="in"
        variants={variants}
        transition={titleTransition}
      >
        <span>Idriss</span> <br />
        <span>Diakite</span>
      </motion.h1>
      <div className="homepage__suptitle">
        Développeur front-end
      </div>
    </>
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

// const pageTransition = {
//   type: "tween",
//   ease: "anticipate",
//   duration: 2.5,
// };

const titleTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 5.5,
};

export default Home;
