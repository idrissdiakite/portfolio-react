import React from "react";
import Title from "../Title";
import { motion } from "framer-motion";
import Infos from "./infos";
import "./style.scss";

const Me = () => {
  return (
    <>
      <Title className="whoiam__title">Qui je suis</Title>
      <motion.p
        className="whoiam__suptitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", ease: "anticipate", duration: 2 }}
      >
        En 10 points:
      </motion.p>
      <div className="whoiam__wrapper">
        <Infos />
      </div>
    </>
  )
}

export default Me;
