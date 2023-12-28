import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePaperClip } from "react-icons/ai";

const jobs = [
  {
    title: "Développeur web - Zelda",
    subtitle: "cdi - octobre 2021 à ce jour",
    description: (
      <p>
        - Développement d'un jeu numérique |{" "}
        <span>
          NuxtJS - Typescript - Wordpress/ACF (bo) - Axios - Phaser - Lottie -
          Sass
        </span>{" "}
        <br />- Développement d'une carte de voeux numérique |{" "}
        <span>React - React Lottie - TSParticles - Framer Motion - Scss </span>
        <br />- Création d'un thème Wordpress sur-mesure |{" "}
        <span>Wordpress - PHP - ACF - Javascript - Sass</span>
        <br />- Refonte et développement de sites web via Wordpress |{" "}
        <span>ThemeForest - Elementor/WPBakery, Woocommerce + Stripe (CB, Paypal, Apple Pay, Google Pay), WP Rocket, Yoast SEO, Mailchimp, Contact Form 7, Poedit (traductions) etc..</span>
        <br />- Rédaction de documentations technique |{" "}
        <span>Google Docs - Pages (Mac)</span>
        <br />- Gestion hébergements serveurs + bases de données |{" "}
        <span>OVH - O2Switch - MySQL</span>
        <br />- Tests compatibilité navigateur et accessibilité |{" "}
        <span>Lighthouse - Caniuse - W3C Link checker etc</span>
        <br />- Suivi de projets + Relation clientèle |{" "}
        <span>Mail - Téléphone - Visio</span> <br />- Outils / Applications |{" "}
        <span>
          Skype - Trello - Gitlab - FileZila - Mamp Pro - Illustrator - Google
          Drive
        </span>
      </p>
    ),
  },
  {
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
    title: "Fondateur - ilovethistrack.com",
    subtitle: "janvier 2015 à juillet 2021",
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
  const [isVisible, setIsVisible] = useState(-1)

  const toggleClass = (id) => setIsVisible(id)

  return (
    <>
      <div className="experiences__items">
        {jobs.map((job, index) => (
          <motion.div className="experiences__item" key={index} variants={item}>
            <div onClick={() => toggleClass(index)} key={index} className="experiences__item--top">
              <p className="experiences__item--title">{job.title}</p>
              <p className="experiences__item--suptitle">{job.subtitle}</p>
            </div>
            <div className={ isVisible === index ? "experiences__item--content show" : "experiences__item--content"}>{job.description}</div>
          </motion.div>
        ))}
      </div>
      <motion.div className="experiences__cv" variants={item} >
        <AiOutlinePaperClip className="experiences__cv--icon" />
        <a href="./assets/CV.pdf" download>Télécharger mon CV</a>
      </motion.div>
    </>
  );
};

// Motion
const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default Jobs;
