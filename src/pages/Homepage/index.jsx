import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import Cursor from "../../components/Cursor";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import MenuManager from "../../components/Menu/MenuManager";
import ParticleBackground from "../../Particles/ParticleBackground";

import "./style.scss";

const Home = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500); // durée d'affichage du loader
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <MenuManager>
      <motion.div
        initial="initial"
        animate="in"
        variants={variants}
        transition={pageTransition}
      >
        {/* <Cursor /> */}
        <Header />

        <section className="homepage">
          <ParticleBackground />

          <motion.h1
            className="homepage__title"
            initial="initial"
            animate="in"
            variants={variants}
            transition={titleTransition}
          >
            Idriss <br />
            Diakite
          </motion.h1>

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

const titleTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 5.5,
};

export default Home;
