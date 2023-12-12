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
        initial="initial"
        animate="in"
        variants={variants}
        transition={titleTransition}
      >
        <span>Idriss</span> <br />
        <span>Diakite</span>
      </motion.h1>
      <div className="home__suptitle">
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
