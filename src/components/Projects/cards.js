import React from "react";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
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
  SiNetlify,
  SiWoo,
  SiStripe,
  SiGooglepay,
  SiApplepay,
  SiPaypal


} from "react-icons/si";

import { RiVuejsFill } from "react-icons/ri";

import jeu from "../../assets/cards/jeu.png";
import paillet from "../../assets/cards/paillet.png";
import zeldaNY from "../../assets/cards/zelda-ny.png";
import ateliers from "../../assets/cards/ateliers.png";
import birdiebox from "../../assets/cards/birdie-box.png";
import portfolio from "../../assets/cards/portfolio.png";
import ilttcom from "../../assets/cards/ilttcom-react.png";
import artshop from "../../assets/cards/artshop-tailwind.png";
import pictureWp from "../../assets/cards/picture-wp.png";
import pictureGatsby from "../../assets/cards/picture-gatsby.png";
import js from "../../assets/cards/js.png";
import contact from "../../assets/cards/gestionnaire-contact.png";
import serie from "../../assets/cards/series-angular.png";

const projects = [
  {
    id: 1,
    name: "Jeu Prends le Bus",
    icons: (
      <ul className="icons">
        <li>
          <RiVuejsFill className="vuejs" title="Vuejs" />
        </li>
        <li>
          <SiWordpress className="wordpress" title="Wordpress" />
        </li>
        <li>
          <SiSvg className="svg" title="SVG" />
        </li>
        <li>
          <SiJavascript className="javascript" title="Javascript" />
        </li>
        <li>
          <SiTypescript className="typescript" title="TypeScript" />
        </li>
        <li>
          <SiFilezilla className="filezila" title="FileZila" />
        </li>
        <li>
          <SiSass className="sass" title="Sass" />
        </li>
      </ul>
    ),
    img: <img src={jeu} alt="Jeu Prends le Bus" class="img" loading="lazy" />,
    description: (
      <p>
        Jeu numérique développé sous Nuxtjs (front) et
        Wordpress + ACF (back).
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/jeu-prends-le-bus-nuxt"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
        <br />‣{" "}
        <a href="http://demo.jeu-prends-le-bus.zelllda.fr/" target="_blank" rel="noreferrer">
          live/démo
        </a>
      </p>
    ),
  },
  {
    id: 2,
    name: "Paillet",
    icons: (
      <ul className="icons">
        <li>
          <SiPhp className="php" title="PHP" />
        </li>
        <li>
          <SiWordpress className="wordpress" title="Wordpress" />
        </li>
        <li>
          <SiFilezilla className="filezila" title="FileZila" />
        </li>
        <li>
          <SiJavascript className="javascript" title="Javascript" />
        </li>
        <li>
          <SiTypescript className="typescript" title="TypeScript" />
        </li>
        <li>
          <SiSass className="sass" title="Sass" />
        </li>
      </ul>
    ),
    img: <img src={paillet} alt="Paillet" class="img" loading="lazy" />,
    description: (
      <p>Co-développement d'un thème Wordpress (+ ACF) from scratch.</p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/paillet-wordpress"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      </p>
    ),
  },
  {
    id: 4,
    name: "Meilleurs voeux 2022",
    icons: (
      <ul className="icons">
        <li>
          <SiReact className="react" title="React" />
        </li>
        <li>
          <SiJavascript className="javascript" title="Javascript" />
        </li>
        <li>
          <SiSass className="sass" title="Sass" />
        </li>
        <li>
          <SiSvg className="svg" title="SVG" />
        </li>
      </ul>
    ),
    img: <img src={zeldaNY} alt="birdie box" class="img" loading="lazy" />,
    description: (
      <p>Carte de voeux (numérique) à destination des clients de Zelda.</p>
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
        <a href="https://2022.zelda.fr/" target="_blank" rel="noreferrer">
          live
        </a>
      </p>
    ),
  },
  {
    id: 5,
    name: "Ateliers",
    icons: (
      <ul className="icons">
        <li>
        <SiWoo className="woocommerce" title="Woocommerce" />
        </li>
        <li>
        <SiWordpress className="wordpress" title="Wordpress" />
        </li>
        <li>
        <SiFilezilla className="filezila" title="FileZila" />
        </li>
        <li>
        <SiStripe className="stripe" title="Stripe" />
        </li>
        <li>
        <SiPaypal className="paypal" title="Paypal" />
        </li>
        <li>
        <SiGooglepay className="googlepay" title="Google Pay" />
        </li>
        <li>
        <SiApplepay title="Apple Pay" />
        </li>
      </ul>
    ),
    img: <img src={ateliers} alt="birdie box" class="img" loading="lazy" />,
    description: (
      <p>Site (Wordpress) de réservation de cours de cuisine en ligne.</p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/ateliers-wordpress"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        <br />‣{" "}
        <a href="https://ateliersbysergelabrosse.ch/" target="_blank" rel="noreferrer">
          live
        </a>
      </p>
    ),
  },
  {
    id: 6,
    name: "Birdie Box",
    icons: (
      <ul className="icons">
        <li>
          <SiReact className="react" title="React" />
        </li>
        <li>
          <SiJavascript className="javascript" title="Javascript" />
        </li>
        <li>
          <SiSass className="sass" title="Sass" />
        </li>
        <li>
          <SiSvg className="svg" title="SVG" />
        </li>
      </ul>
    ),
    img: <img src={birdiebox} alt="birdie box" class="img" loading="lazy" />,
    description: (
      <p>Site vitrine réalisé (sous React) au sein de l'agence Zelda.</p>
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
        <a href="https://www.birdie-box.com/" target="_blank" rel="noreferrer">
          live
        </a>
      </p>
    ),
  },
  {
    id: 7,
    name: "Portfolio",
    icons: (
      <ul className="icons">
        <li>
          <SiReact className="react" title="React" />
        </li>
        <li>
          <SiJavascript className="javascript" title="Javascript" />
        </li>
        <li>
          <SiSass className="sass" title="Sass" />
        </li>
        <li>
          <SiNetlify className="netlify" title="Netlify" />
        </li>
      </ul>
    ),
    img: <img src={portfolio} alt="portfolio" class="img" loading="lazy" />,
    description: (
      <p>
        Portfolio personnel développé avec React.
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/portfolio-react"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>{" "}
        <br />‣{" "}
        <a href="https://idrissdiakite.netlify.app/" target="_blank" rel="noreferrer">
          live
        </a>
      </p>
    ),
  },
  {
    id: 8,
    name: "ilttcom",
    icons: (
      <ul className="icons">
        <li>
          <SiReact className="react" title="React" />
        </li>
        <li>
          <SiAirtable className="airtable" title="Airtable" />
        </li>
        <li>
          <SiJavascript className="javascript" title="Javascript" />
        </li>
        <li>
          <SiSass className="sass" title="Sass" />
        </li>
        <li>
          <SiNetlify className="netlify" title="Netlify" />
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
        <a href="https://ilttcom.netlify.app/" target="_blank" rel="noreferrer">
          live
        </a>
      </p>
    ),
  },
  {
    id: 9,
    name: "Artshop",
    icons: (
      <ul className="icons">
        <li>
          <SiTailwindcss className="tailwind" title="Tailwind" />
        </li>
        <li>
          <SiPostcss className="postcss" title="PostCSS" />
        </li>
        <li>
          <SiHtml5 className="html" title="HTML" />
        </li>
        <li>
          <SiNetlify className="netlify" title="Netlify" />
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
          href="https://youtu.be/GDyM2mVWCW8?si=ajLyIuD030eD65u-"
          target="_blank"
          rel="noreferrer"
        >
          demo
        </a>
      </p>
    ),
  },
  {
    id: 10,
    name: "Picture Organic Clothing",
    icons: (
      <ul className="icons">
        <li>
          <SiDocker className="docker" title="Docker" />
        </li>
        <li>
          <SiPhp className="php" title="PHP" />
        </li>
        <li>
          <SiWordpress className="wordpress" title="Wordpress" />
        </li>
        <li>
          <SiCss3 className="css" title="CSS" />
        </li>
        <li>
          <SiJavascript className="javascript" title="Javascripthp" />
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
          href="https://youtu.be/X2kX9eSSveI?si=WSqPVzDbZQDkYyiy"
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
    name: "Picture Organic Clothing",
    icons: (
      <ul className="icons">
        <li>
          <SiGatsby className="gatsby" title="Gatsby" />
        </li>
        <li>
          <SiReact className="react" title="React" />
        </li>
        <li>
          <SiGraphql className="graphql" title="GraphQL" />
        </li>
        <li>
          <SiWordpress className="wordpress" title="Wordpress" />
        </li>
        <li>
          <SiCss3 className="css" title="CSS" />
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
          href="https://youtu.be/HH5K28mIiEk?si=y28ElToezK0eoxvL"
          target="_blank"
          rel="noreferrer"
        >
          demo
        </a>
      </p>
    ),
  },
  {
    id: 13,
    name: "Projets JavaScript",
    icons: (
      <ul className="icons">
        <li>
          <SiHtml5 className="html" title="HTML" />
        </li>
        <li>
          <SiCss3 className="css" title="CSS" />
        </li>
        <li>
          <SiJavascript className="javascript" title="Javascript" />
        </li>
        <li>
          <SiGreensock className="greensock" title="GSAP" />
        </li>
        <li>
          <SiSvg className="svg" title="SVG" />
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
        <a href="https://test-js.netlify.app" target="_blank" rel="noreferrer">
          live
        </a>
      </p>
    ),
  },
  {
    id: 14,
    name: "Gestionnaire de contacts",
    icons: (
      <ul className="icons">
        <li>
          <SiMysql className="mysql" title="MySQL" />
        </li>
        <li>
          <SiPhp className="php" title="PHP" />
        </li>
        <li>
          <SiSymfony className="symfony" title="Symfony" />
        </li>
        <li>
          <SiBootstrap className="bootstrap" title="Bootstrap" />
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
          href="https://youtu.be/B_eBvb3zPhM?si=dKS8XdeWa5b0Pw6x"
          target="_blank"
          rel="noreferrer"
        >
          demo
        </a>
      </p>
    ),
  },
  {
    id: 15,
    name: "Gestionnaire de séries",
    icons: (
      <ul className="icons">
        <li>
          <SiMysql className="mysql" title="MySQL" />
        </li>
        <li>
          <SiAngular className="angular" title="Angular" />
        </li>
        <li>
          <SiBootstrap className="bootstrap" title="Bootstrap" />
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
          href="https://youtu.be/plx5WmSU6ic?si=oaRP2V7qgdF6ZxOH"
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
      className="projects__wrapper"
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
