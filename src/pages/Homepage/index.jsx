import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "../../components/Loader";
import ParticleBackground from "../../Particles/ParticleBackground";
import "./style.scss";
// import Cursor from "../../components/Cursor";


const Home = () => {
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit')

    if (!isFirstVisit) {
      setTimeout(() => {
        setLoader(false)
        localStorage.setItem('isFirstVisit', 'false')
      }, 2500)
    } else { setLoader(false) }
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <motion.div
      initial="initial"
      animate="in"
      variants={variants}
      transition={pageTransition}
    >
    {/* <Cursor /> */}
      <section className="homepage">
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

const titleTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 5.5,
};

export default Home;
