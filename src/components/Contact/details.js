import React from "react";
import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

const contactDetails = [
  {
    icon: <AiOutlinePhone />,
    link: <a href="tel:0669674585">06.69.67.45.85</a>,
  },
  {
    icon: <AiOutlineMail />,
    link: (
      <a href="mailto:idriss.diakite@hotmail.fr">idriss.diakite@hotmail.fr</a>
    ),
  },
  {
    icon: <AiOutlineHome />,
    link: <p>Lyon (69003)</p>,
  },
  {
    icon: <AiFillLinkedin />,
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
        className="contact__details"
        initial="initial"
        animate="in"
        variants={variants}
        transition={details}
      >
        <h2>Me contacter:</h2>
        <motion.ul className="contact__links" variants={container} initial="hidden" animate="visible">
          {contactDetails.map((detail, index) => (
            <motion.li className="contact__link" key={index} variants={item}>
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
  initial: { opacity: 0 },
  in: { opacity: 1 }
}

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
