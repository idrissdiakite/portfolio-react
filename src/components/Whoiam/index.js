import React from "react";
import { motion } from "framer-motion";
import Infos from "./infos";
import "./style.scss";

const Me = () => {
  return (
    <>
      <h1 className="whoiam__title">Qui je suis <span>⇩</span></h1>
      <motion.p
        className="whoiam__suptitle"
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", ease: "anticipate", duration: 2 }}
      >
        10 points:
      </motion.p>
      <div className="whoiam__wrapper">
        <Infos />
      </div>
    </>
  )
}

export default Me;
