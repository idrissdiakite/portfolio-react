import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import "./style.scss";

const contactDetails = [
  {
    id: 1,
    icon: <AiOutlinePhone className="icon" />,
    link: <a href="tel:0669674585">06.69.67.45.85</a>,
  },
  {
    id: 2,
    icon: <AiOutlineMail className="icon" />,
    link: (
      <a href="mailto:idriss.diakite@hotmail.fr">idriss.diakite@hotmail.fr</a>
    ),
  },
  {
    id: 3,
    icon: <AiOutlineHome className="icon" />,
    link: <span>Lyon (69001)</span>,
  },
  {
    id: 4,
    icon: <AiFillLinkedin className="icon" />,
    link: (
      <a
        href="https://www.linkedin.com/in/idiakite"
        target="_blank"
        rel="noreferrer"
      >
        linkedin.com/in/idiakite
      </a>
    ),
  },
  {
    id: 5,
    icon: <AiFillGithub className="icon" />,
    link: (
      <a
        href="https://github.com/idrissdiakite"
        target="_blank"
        rel="noreferrer"
      >
        github.com/idrissdiakite
      </a>
    ),
  },
];

const Details = () => {
  return (
    <>
      <motion.div
        className="header"
        initial="initial"
        animate="in"
        variants={variants}
        transition={header}
      >
        <p>
          Actuellement à la recherche d'un poste de{" "}
          <span>
            {" "}
            <br />{" "}
          </span>{" "}
          développeur web (front-end de préférence).
        </p>

        <p>
          Disponible de suite <span>-</span> et particulièrement motivé 🕺🏽
        </p>
      </motion.div>

      <motion.div
        className="details"
        initial="initial"
        animate="in"
        variants={variants}
        transition={details}
      >
        <h2>Me contacter:</h2>
        <motion.ul variants={container} initial="hidden" animate="visible">
          {contactDetails.map((detail) => (
            <motion.li key={detail.id} variants={item}>
              {detail.icon}
              {detail.link}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </>
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

const header = {
  type: "tween",
  ease: "anticipate",
  duration: 3,
};

const details = {
  type: "tween",
  ease: "anticipate",
  duration: 6,
};

// Motion
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { y: 0, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default Details;
