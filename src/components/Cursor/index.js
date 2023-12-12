import React from "react";
import { motion } from "framer-motion";

import "./style.scss";

const Cursor = () => {
  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      // on écoute/récupère le mouvement de la souris
      const { clientX, clientY } = e;
      // console.log(e)
      const mouseX = clientX - cursorRef.current.clientWidth / 2; // permet d'obtenir la position centrale de l'élément
      const mouseY = clientY - cursorRef.current.clientHeight / 2;

      cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      // console.log(cursorRef)
    });
  }, []);

  return (
    <motion.div
      className="cursor"
      ref={cursorRef}
      initial="initial"
      animate="in"
      variants={variants}
      transition={cursorTransition}
    ></motion.div>
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

const cursorTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 5,
};

export default Cursor;
