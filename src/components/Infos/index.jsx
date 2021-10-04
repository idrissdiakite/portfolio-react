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
} from "react-icons/io5";

import "./style.scss";

const infos = [
  {
    id: 1,
    icon: <IoLocationOutline className="icon" />,
    text: "Né à Annecy en 1990, j'habite à Lyon depuis maintenant plus de 20ans.",
  },
  {
    id: 2,
    icon: <IoHeartOutline className="icon" />,
    text: "Passionné de musique, d'informatique, de cinéma, de sport et d'art en général.",
  },
  {
    id: 3,
    icon: <IoSchoolOutline className="icon" />,
    text: "Issu initialement d'un cursus commercial, je possède un BTS Management des Unités Commerciales.",
  },
  {
    id: 4,
    icon: <IoEarOutline className="icon" />,
    text: "Toujours à l'écoute, je possède un excellent relationnel, le sens des responsabilités ainsi qu'une grande capacité d'adaptation.",
  },
  {
    id: 5,
    icon: <IoSunnyOutline className="icon" />,
    text: "Rigoureux, curieux, créatif et autonome, j'ai un goût prononcé pour le travail bien fait (et beau visuellement).",
  },
  {
    id: 6,
    icon: <IoMusicalNotesOutline className="icon" />,
    text: "J'ai créé un site de musique en autodidacte (cf. ilovethistrack.com) et partage des playlists en tous genres sur Spotify.",
  },
  {
    id: 7,
    icon: <IoEarthOutline className="icon" />,
    text: "Particulièrement ouvert d'esprit, j'ai vécu 6 mois à Londres et ai eu la chance de visiter de nombreux pays (4 continents différents).",
  },
  {
    id: 8,
    icon: <IoStopwatchOutline className="icon" />,
    text: "J'ai pratiqué de nombreux sports dans ma vie (foot, tennis, taekwendo..) et cours une à deux fois par semaine.",
  },
  {
    id: 9,
    icon: <IoPawOutline className="icon" />,
    text: "Papa d'un petit Beagle croisé Jagd Terrier (beaucoup d'amour pour les animaux).",
  },
];

const Infos = () => {
  return (
    <div className="infos">
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

export default Infos;
