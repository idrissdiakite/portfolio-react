import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import { motion } from "framer-motion";
import cn from "classnames";

import "./style.scss";

const Button = () => {
  const { open, setOpen } = useContext(MenuContext);
  return (
    <>
      <div className={cn("menu__btn", { open })}>
        <button onClick={() => setOpen(!open)}>
          <span></span>
        </button>
      </div>
      <motion.button 
        className={cn("menu__btn--mobile", { open })} 
        onClick={() => setOpen(!open)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        Menu
      </motion.button>
    </>
  );
};

export default Button;
