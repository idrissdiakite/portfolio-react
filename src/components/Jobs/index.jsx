import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePaperClip } from "react-icons/ai";

import "./style.scss";

const jobs = [
  {
    id: 1,
    title: "Développeur frontend - Ultrō",
    subtitle: "stage - février à mai 2021",
    description: (
      <p>
        - Création d'un thème Wordpress sur-mesure |{" "}
        <span>Docker, PHP, WP Query, JavaScript</span> <br />- Intégration
        dynamique d'un site avec GatsbyJS |{" "}
        <span>React, GraphQL, JS, Wordpress</span>
        <br />- Intégration statique & gestion du responsive à partir de
        maquettes | <span>HTML, CSS</span>
        <br />- Gestion de contenus sur différents CMS |{" "}
        <span>Wordpress, Contentful, Shopify</span>
      </p>
    ),
  },
  {
    id: 2,
    title: "Développeur fullstack - Human Booster",
    subtitle: "formation - juillet 2020 à mai 2021",
    description: (
      <p>
        1. Développer la partie front-end d'une application web et web mobile:{" "}
        <br />- Maquetter une application | <span>Figma</span>
        <br />- Réaliser une interface utilisateur web statique et adaptable |{" "}
        <span>HTML, CSS</span>
        <br />- Développer une interface utilisateur web dynamique |{" "}
        <span>JavaScript, Angular</span>
        <br />- Réaliser une interface utilisateur avec une solution de gestion
        de contenu | <span>Wordpress</span>
        <br />
        <br />
        2. Développer la partie back-end d'une application web et web mobile:
        <br />- Créer une base de données |<span> MCD, MLD, MPD, SQL</span>
        <br />- Développer les composants d’accès aux données |{" "}
        <span>Web Service Rest</span>
        <br />- Développer la partie back-end d’une application web |{" "}
        <span>PHP, Symfony</span>
        <br />- Elaborer et mettre en œuvre des composants dans une application
        de gestion de contenu | <span>Wordpress, PHP</span>
      </p>
    ),
  },
  {
    id: 3,
    title: "Fondateur - ilovethistrack.com",
    subtitle: "janvier 2015 à aout 2020",
    description: (
      <p>
        - Création site de musique | <span>Wordpress</span> <br />- Création
        logo et charte graphique | <span>Pixelmator Pro</span>
        <br />- Mise en page du site | <span>HTML, CSS, PHP</span>
        <br />- Ajout, suppression, modification et transfert de fichiers |{" "}
        <span>FileZila</span>
        <br />- Création et mise en ligne de contenus multimédias |{" "}
        <span>Final Cut Pro, Youtube</span>
        <br />- Communication réseaux sociaux |{" "}
        <span>Facebook, Twitter, Instagram..</span>
      </p>
    ),
  },
  {
    id: 4,
    title: "Responsable Adjoint - Bexley",
    subtitle: "cdi - mars 2014 à novembre 2019",
    description: (
      <p>
        - Participation aux recrutements
        <br />
        - Tutorat / Formation des nouveaux collaborateurs
        <br />
        - Analyse des indicateurs commerciaux
        <br />
        - Vente / Service après-vente
        <br />
        - Aménagement du point de vente
        <br />
        - Remises en banque / Gestion de caisse
        <br />
        - Réception et gestion des livraisons
        <br />
        - Gestion des stocks / Inventaires tournant
        <br />
      </p>
    ),
  },
];

const Jobs = () => {
  const [isVisible, setVisible] = useState(1); // "1" permet d'afficher par défault la description du premier job

  const toggleClass = (id) => setVisible(id);

  return (
    <>
      <motion.div
        className="jobs"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {jobs.map((job) => (
          <motion.div
            className="job"
            key={job.id}
            variants={item}
          >
            <div
              onClick={() => toggleClass(job.id)} // lorsqu'on clique sur la div on déclenche la fonction "toggleClass" qui prend en paramètre l'id du job
              key={job.id}
              className="header"
            >
              <p className="title">{job.title}</p>
              <p className="subtitle">{job.subtitle}</p>
            </div>
            <div
              className={
                isVisible === job.id ? "show-description" : "description" // si l'id du state correspond à l'id du job on remplace la classe "description" par "show-description"
              }
            >
              {job.description}
            </div>
          </motion.div>
        ))}

        <motion.div
        variants={item}
        className="cv">
        <AiOutlinePaperClip className="icon" />
        <a href="./assets/CV.pdf" download>Télécharger mon CV</a>
        </motion.div>
        
      </motion.div>
    </>
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

export default Jobs;
