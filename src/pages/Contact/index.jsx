import React from "react";
import { motion } from "framer-motion";
import Menu from "../../components/Menu";
import MenuManager from "../../components/Menu/MenuManager";

import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import "./style.scss";
import Button from "../../components/Button";

const Contact = () => {
  return (
    <MenuManager>
      <motion.div
        initial="initial"
        animate="in"
        variants={variants}
        transition={pageTransition}
      >
        <Menu />
        <section className="contact">
          <h1>
            Contact
          </h1>
          <div className="main-container">
            <motion.p
              initial="initial"
              animate="in"
              variants={variants}
              transition={firstP}
            >
              Actuellement à la recherche d'un poste de <br />
              développeur web (front-end de préférence).
            </motion.p>

            <motion.p
              initial="initial"
              animate="in"
              variants={variants}
              transition={secondP}
            >
              Disponible de suite - et particulièrement motivé 🕺🏽
            </motion.p>

            <motion.div
              initial="initial"
              animate="in"
              variants={variants}
              transition={contact}
              className="contact-container"
            >
              <h2>Me contacter:</h2>
              <ul>
                <li>
                  <AiOutlinePhone className="icon" />
                  <a href="tel:0669674585">06.69.67.45.85</a>
                </li>

                <li>
                  <AiOutlineMail className="icon" />
                  <a href="mailto:idriss.diakite@hotmail.fr">
                    idriss.diakite@hotmail.fr
                  </a>
                </li>

                <li>
                  <AiOutlineHome className="icon" />
                  <span>Lyon (69001)</span>
                </li>

                <li>
                  <AiFillLinkedin className="icon" />
                  <a
                    href="https://www.linkedin.com/in/idiakite"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/idiakite
                  </a>
                </li>

                <li>
                  <AiFillGithub className="icon" />
                  <a
                    href="https://github.com/idrissdiakite"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/idrissdiakite
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </section>
        <Button />
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

const firstP = {
  type: "tween",
  ease: "anticipate",
  duration: 4,
};

const secondP = {
  type: "tween",
  ease: "anticipate",
  duration: 4.5,
};

const contact = {
  type: "tween",
  ease: "anticipate",
  duration: 6,
};

export default Contact;
