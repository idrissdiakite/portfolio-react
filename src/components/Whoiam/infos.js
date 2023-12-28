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

const infos = [
  {
    icon: <IoLocationOutline className="icon" />,
    text: "Né à Annecy, vis actuellement à Lyon.",
  },
  {
    icon: <IoHeartOutline className="icon" />,
    text: "Passionné de musique, d'informatique, de cinéma, de sport et d'art en général.",
  },
  {
    icon: <IoSchoolOutline className="icon" />,
    text: "Également titulaire d'un BTS Management des Unités Commerciales.",
  },
  {
    icon: <IoEarOutline className="icon" />,
    text: "Toujours à l'écoute, excellent relationnel, sens aïgu des responsabilités.",
  },
  {
    icon: <IoSunnyOutline className="icon" />,
    text: "Ouvert d'esprit, curieux, créatif et autonome.",
  },
  {
    icon: <IoStarOutline className="icon" />,
    text: "Goût prononcé pour le travail en équipe, l'UI/UX et les raclettes en été.",
  },
  {
    icon: <IoMusicalNotesOutline className="icon" />,
    text: <span>Mélomane de naissance et accessoirement curator sur <a href="https://open.spotify.com/user/ilovethistrack.com?si=9ca1553a0af04aec" target="_blank" rel="noreferrer">Spotify</a>.</span>,
  },
  {
    icon: <IoStopwatchOutline className="icon" />,
    text: "Sportif, cours une à deux fois par semaine.",
  },
  {
    icon: <IoEarthOutline className="icon" />,
    text: "A vécu 6 mois à Londres et déjà visité 4 continents.",
  },
  {
    icon: <IoPawOutline className="icon" />,
    text: "Papa d'un petit Beagle croisé Jagd Terrier.",
  },
];

const Infos = () => {
  return (
    <motion.ul className="whoiam__infos" variants={container} initial="hidden" animate="visible">
      {infos.map((info, index) => (
        <motion.li className="whoiam__info" key={index} variants={item}>
          <span className="whoiam__info--icon">{info.icon}</span>
          <p className="whoiam__info--text">{info.text}</p>
         </motion.li>
      ))}
    </motion.ul>
  )
}

// Motion
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    }
  }
}

const item = {
  hidden: { x: 300, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.6
    },
  },
};

export default Infos;
