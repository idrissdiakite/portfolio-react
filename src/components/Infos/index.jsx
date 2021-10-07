import React from "react";
import { motion } from "framer-motion";

import {
  IoStopwatchOutline,
  IoLocationOutline,
  IoSchoolOutline,
  IoEarthOutline,
  IoEarOutline,
  IoHeartOutline,
  IoMusicalNotesOutline,
  IoPawOutline,
  IoSunnyOutline,
  IoStarOutline
} from "react-icons/io5";

import "./style.scss";

const infos = [
  {
    id: 1,
    icon: <IoLocationOutline className="icon" />,
    text: "Né à Annecy, vis actuellement à Lyon.",
  },
  {
    id: 2,
    icon: <IoHeartOutline className="icon" />,
    text: "Passionné de musique, d'informatique, de cinéma, de sport et d'art en général.",
  },
  {
    id: 3,
    icon: <IoSchoolOutline className="icon" />,
    text: "Également titulaire d'un BTS Management des Unités Commerciales.",
  },
  {
    id: 4,
    icon: <IoEarOutline className="icon" />,
    text: "Toujours à l'écoute, excellent relationnel, sens aïgu des responsabilités.",
  },
  {
    id: 5,
    icon: <IoSunnyOutline className="icon" />,
    text: "Ouvert d'esprit, curieux, créatif et autonome.",
  },
  {
    id: 6,
    icon: <IoStarOutline className="icon" />,
    text: "Goût prononcé pour le travail en équipe, l'UI/UX et les raclettes en été.",
  },
  {
    id: 7,
    icon: <IoMusicalNotesOutline className="icon" />,
    text: <span>Mélomane de naissance et accessoirement curator sur <a href="https://open.spotify.com/user/ilovethistrack.com?si=9ca1553a0af04aec" target="_blank" rel="noreferrer">Spotify</a>.</span>,
  },
  {
    id: 8,
    icon: <IoStopwatchOutline className="icon" />,
    text: "Sportif, cours une à deux fois par semaine.",
  },
  {
    id: 9,
    icon: <IoEarthOutline className="icon" />,
    text: "A vécu 6 mois à Londres et déjà visité 4 continents différents.",
  },
  {
    id: 10,
    icon: <IoPawOutline className="icon" />,
    text: "Papa d'un petit Beagle croisé Jagd Terrier.",
  },
];

const Infos = () => {
  return (
    <div className="infos">
      <motion.div
        className="header"
        initial="initial"
        animate="in"
        variants={variants}
        transition={transition}
      >
        <p>
          Désireux de me professionnaliser dans le développement web, j'ai
          quitté mon poste de Manager Adjoint en 2019. <span> <br /> </span>Titulaire du titre
          professionnel "Développeur web et web mobile full stack" (Bac+2)
          depuis mai 2021.
        </p>
      </motion.div>

      <motion.ul variants={container} initial="hidden" animate="visible">
        {infos.map((info) => (
          <motion.li key={info.id} variants={item}>
            <span>{info.icon}</span>
            <p>{info.text}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
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

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 4,
};

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 3,
      staggerChildren: 1,
    },
  },
};

const item = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6
    },
  },
};

export default Infos;
