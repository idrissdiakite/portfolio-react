import React from "react";
import { motion } from "framer-motion";
import Infos from "./infos";
import "./style.scss";

const Me = () => {
  return (
    <>
      <h1 className="whoiam__title">Qui je suis</h1>
      <motion.p
        className="whoiam__suptitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", ease: "anticipate", duration: 2 }}
      >
        Me, myself and I en 10 points:
      </motion.p>
      <div className="whoiam__wrapper">
        <Infos />
      </div>
    </>
  )
}

export default Me;
