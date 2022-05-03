import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiAngular,
  SiPhp,
  SiSymfony,
  SiDocker,
  SiGatsby,
  SiGraphql,
  SiWordpress,
  SiAirtable,
  SiTailwindcss,
  SiSass,
  SiPostcss,
  SiBootstrap,
  SiFilezilla,
  SiSvg,
  SiGreensock,
  SiMysql,
} from "react-icons/si";

import zelda from "../../assets/cards/zelda.png";
import zeldaNY from "../../assets/cards/zelda-ny.png";
import birdiebox from "../../assets/cards/birdie-box.png";
import ilttcom from "../../assets/cards/ilttcom-react.png";
import artshop from "../../assets/cards/artshop-tailwind.png";
import pictureWp from "../../assets/cards/picture-wp.png";
import pictureGatsby from "../../assets/cards/picture-gatsby.png";
import js from "../../assets/cards/js.png";
import ilovethistrackcom from "../../assets/cards/ilovethistrackcom.png";
import contact from "../../assets/cards/gestionnaire-contact.png";
import serie from "../../assets/cards/series-angular.png";

import "./style.scss";

const projects = [
  {
    id: 1,
    name: "Zelda.fr",
    icons: (
      <ul className="icons">
        <li>
          <SiCss3 className="css" />
        </li>
        <li>
          <SiWordpress className="wordpress" />
        </li>
      </ul>
    ),
    img: <img src={zelda} alt="zelda.fr" class="img" loading="lazy" />,
    description: (
      <p>
        Refonte du site internet de Zelda Communication via Wordpress.
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="http://zelda.fr/"
          target="_blank"
          rel="noreferrer"
        >
          live
        </a>
      </p>
    ),
  },
  {
    id: 2,
    name: "Meilleurs voeux 2022",
    icons: (
      <ul className="icons">
        <li>
          <SiReact className="react" />
        </li>
        <li>
          <SiJavascript />
        </li>
        <li>
          <SiSass className="sass" />
        </li>
        <li>
          <SiSvg className="svg" />
        </li>
      </ul>
    ),
    img: <img src={zeldaNY} alt="birdie box" class="img" loading="lazy" />,
    description: (
      <p>
        Carte de voeux (numérique) à destination des clients de Zelda.
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/zelda-happy-new-year"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        <br />‣{" "}
        <a
          href="https://2022.zelda.fr/"
          target="_blank"
          rel="noreferrer"
        >
          live
        </a>
      </p>
    ),
  },
  {
    id: 3,
    name: "Birdie Box",
    icons: (
      <ul className="icons">
        <li>
          <SiReact className="react" />
        </li>
        <li>
          <SiJavascript />
        </li>
        <li>
          <SiSass className="sass" />
        </li>
        <li>
          <SiSvg className="svg" />
        </li>
      </ul>
    ),
    img: <img src={birdiebox} alt="birdie box" class="img" loading="lazy" />,
    description: (
      <p>
        Site vitrine réalisé (sous React) au sein de l'agence Zelda.
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/birdie-box"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        <br />‣{" "}
        <a
          href="https://www.birdie-box.com/"
          target="_blank"
          rel="noreferrer"
        >
          live
        </a>
      </p>
    ),
  },
  {
    id: 4,
    name: "ilttcom",
    icons: (
      <ul className="icons">
        <li>
          <SiReact className="react" />
        </li>
        <li>
          <SiJavascript />
        </li>
        <li>
          <SiSass className="sass" />
        </li>
        <li>
          <SiAirtable className="airtable" />
        </li>
      </ul>
    ),
    img: <img src={ilttcom} alt="ilttcom react" class="img" loading="lazy" />,
    description: (
      <p>
        Application musicale réalisée avec React, Airtable (base de donnée) et
        Scss.
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/ilttcom-react-airtable"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        <br />‣{" "}
        <a
          href="https://ilttcom.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          live
        </a>
      </p>
    ),
  },
  {
    id: 5,
    name: "Artshop",
    icons: (
      <ul className="icons">
        <li>
          <SiHtml5 className="html" />
        </li>
        <li>
          <SiTailwindcss className="tailwind" />
        </li>
        <li>
          <SiPostcss className="postcss" />
        </li>
      </ul>
    ),
    img: (
      <img src={artshop} alt="Artshop (Tailwind)" class="img" loading="lazy" />
    ),
    description: (
      <p>
        Site de vente d'oeuvres d'art entièrement mis en forme à l'aide du
        framework Tailwind.
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/artshop-tailwind"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        <br />‣{" "}
        <a
          href="https://drive.google.com/file/d/1sLLfqyYfETF59tDaqDbxJ_3zhF-OeYKb"
          target="_blank"
          rel="noreferrer"
        >
          demo
        </a>
      </p>
    ),
  },
  {
    id: 6,
    name: "Picture Organic Clothing",
    icons: (
      <ul className="icons">
        <li>
          <SiDocker className="docker" />
        </li>
        <li>
          <SiPhp className="php" />
        </li>
        <li>
          <SiWordpress className="wordpress" />
        </li>
        <li>
          <SiCss3 className="css" />
        </li>
        <li>
          <SiJavascript className="javascript" />
        </li>
      </ul>
    ),
    img: <img src={pictureWp} alt="POC Wordpress" class="img" loading="lazy" />,
    description: (
      <p>
        Création d'un thème Wordpress sur-mesure effectué lors de mon stage au
        sein de l'agence digitale Ultrō.
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/picture-wordpress-theme"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        <br />‣{" "}
        <a
          href="http://poc-wp.atwebpages.com/"
          target="_blank"
          rel="noreferrer"
        >
          live
        </a>
      </p>
    ),
  },
  {
    id: 7,
    name: "Picture Organic Clothing",
    icons: (
      <ul className="icons">
        <li>
          <SiGatsby className="gatsby" />
        </li>
        <li>
          <SiReact className="react" />
        </li>
        <li>
          <SiGraphql className="graphql" />
        </li>
        <li>
          <SiWordpress className="wordpress" />
        </li>
        <li>
          <SiCss3 className="css" />
        </li>
      </ul>
    ),
    img: (
      <img src={pictureGatsby} alt="POC gatsby" class="img" loading="lazy" />
    ),
    description: (
      <p>
        Intégration dynamique du blog de Picture Organic Clothing via GatsbyJS,
        un framework basé sur React et alimenté par GraphQL.
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/picture-wp-gatsbyjs"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        <br />‣{" "}
        <a
          href="https://drive.google.com/file/d/1T5zzW0QRBbjfzjGlWh0uzvURBvscKNgF"
          target="_blank"
          rel="noreferrer"
        >
          demo
        </a>
      </p>
    ),
  },
  {
    id: 8,
    name: "ilovethistrack.com",
    icons: (
      <ul className="icons">
        <li>
          <SiCss3 className="css" />
        </li>
        <li>
          <SiFilezilla className="filezila" />
        </li>
        <li>
          <SiWordpress className="wordpress" />
        </li>
        <li>
          <SiPhp className="php" />
        </li>
      </ul>
    ),
    img: (
      <img
        src={ilovethistrackcom}
        alt="ilovethistrack.com"
        class="img"
        loading="lazy"
      />
    ),
    description: <p>Site de musique réalisé sous Wordpress.</p>,
    links: (
      <p>
        ‣{" "}
        <a href="https://ilovethistrack.com" target="_blank" rel="noreferrer">
          live
        </a>
      </p>
    ),
  },
  {
    id: 9,
    name: "Projets JavaScript",
    icons: (
      <ul className="icons">
        <li>
          <SiHtml5 className="html" />
        </li>
        <li>
          <SiCss3 className="css" />
        </li>
        <li>
          <SiJavascript className="javascript" />
        </li>
        <li>
          <SiGreensock className="greensock" />
        </li>
        <li>
          <SiSvg className="svg" />
        </li>
      </ul>
    ),
    img: <img src={js} alt="Projets Javascript" class="img" loading="lazy" />,
    description: <p>Divers projets réalisés en JavaScript (Vanilla).</p>,
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/js-projects"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <br />‣{" "}
        <a
          href="https://test-js.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          live
        </a>
      </p>
    ),
  },
  {
    id: 10,
    name: "Gestionnaire de contacts",
    icons: (
      <ul className="icons">
        <li>
          <SiMysql className="mysql" />
        </li>
        <li>
          <SiPhp className="php" />
        </li>
        <li>
          <SiSymfony className="symfony" />
        </li>
        <li>
          <SiBootstrap className="bootstrap" />
        </li>
      </ul>
    ),
    img: (
      <img
        src={contact}
        alt="Gestionnaire de contact"
        class="img"
        loading="lazy"
      />
    ),
    description: (
      <p>
        Application Symfony permettant d'afficher une liste de contacts avec
        diverses informations. Formulaire de connexion, recherche, trie et CRUD
        complet.
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/gestionnaire-contact"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <br />‣{" "}
        <a
          href="https://drive.google.com/file/d/1ymH6R5VlYV9ljWj2izUu6CHX-Pce1aku"
          target="_blank"
          rel="noreferrer"
        >
          demo
        </a>
      </p>
    ),
  },
  {
    id: 11,
    name: "Gestionnaire de séries",
    icons: (
      <ul className="icons">
        <li>
          <SiMysql className="mysql" />
        </li>
        <li>
          <SiAngular className="angular" />
        </li>
        <li>
          <SiBootstrap className="bootstrap" />
        </li>
      </ul>
    ),
    img: (
      <img
        src={serie}
        alt="Gestionnaire de séries"
        class="img"
        loading="lazy"
      />
    ),
    description: (
      <p>
        Application Angular permettant d'afficher une liste de séries avec
        diverses informations (affiche, année de lancement, nombre de saisons,
        synopsis etc..).
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/series-manager-angular"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <br />‣{" "}
        <a
          href="https://drive.google.com/file/d/1zKj0Qpd6Dgx5sr9BwzaMvyFKUWKA7u76"
          target="_blank"
          rel="noreferrer"
        >
          demo
        </a>
      </p>
    ),
  },
];

const Cards = () => {
  return (
    <motion.div
      className="projects"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {projects.map((project) => (
        <motion.div class="project" key={project.id} variants={item}>
          <div className="info">
            <p class="name">{project.name}</p>
            {project.icons}
          </div>
          {project.img}
          <div className="description">{project.description}</div>
          <div className="links">{project.links}</div>
        </motion.div>
      ))}
    </motion.div>
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

export default Cards;
