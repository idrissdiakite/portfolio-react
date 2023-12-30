import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePaperClip } from "react-icons/ai";

const jobs = [
  {
    title: "Développeur créatif - Digital Cover",
    subtitle: "cdi - janvier 2023 à ce jour",
    description: (
      <ul>
        <li>・ Création de sites web/thèmes wordpress sur-mesure <span>(php/laravel/blade, acf/cpt ui, es6, gsap/scrolltrigger, taxi.js, lenis...)</span></li>
        <li>・ Rédaction de documentations techniques <span>(google docs)</span></li>
        <li>・ Tests compatibilité navigateurs et accessibilité <span>(lighthouse, caniuse..)</span></li>
        <li>・ Gestion hébergements serveurs + création bases de données <span>(ovh)</span></li>
        <li>・ Outils/applications <span>(twist, monday, gitlab, figma, filezila, mamp pro, pixelmator pro)</span></li>
      </ul>
    ),
  },
  {
    title: "Développeur full stack - Zelda",
    subtitle: "cdi - octobre 2021 à novembre 2022",
    description: (
      <ul>
        <li>・ Développement d'un jeu numérique <span>(nuxtjs, typescript, wp/acf, axios, phaser, lottie, sass)</span></li>
        <li>・ Développement d'une carte de voeux numérique <span>(react, react lottie, tsparticles, framer motion, scss)</span></li>
        <li>・ Création d'un thème Wordpress sur-mesure <span>(php, wp/acf, javascript, sass)</span></li>
        <li>・ Refonte/développement de sites web WP <span>(elementor/wpbakery, woocommerce/stripe, wprocket, yoast, mailchimp, poedit..)</span></li>
        <li>・ Gestion hébergements serveurs + bases de données <span>(ovh, o2switch, mysql)</span></li>
        <li> ・ Tests compatibilité navigateur et accessibilité <span>(lighthouse, caniuse, w3c link checker...)</span></li>
        <li>・ Suivi de projets + relation clientèle <span>(mail, téléphone, visio)</span></li>
        <li>・ Outils/applications <span>(skype, trello, gitlab, filezila, mamp pro, illustrator, google drive)</span></li>
      </ul>
    ),
  },
  {
    title: "Développeur frontend - Ultrō",
    subtitle: "stage - février à mai 2021",
    description: (
      <ul>
        <li>・ Création d'un thème Wordpress sur-mesure <span>(docker, php, wp query, javascript)</span></li>
        <li>・ Intégration dynamique d'un site avec GatsbyJS <span>(react, graphQL, wordpress javascript)</span></li>
        <li>・ Intégration statique & gestion du responsive à partir de maquettes <span>(html, css)</span></li>
        <li>・ Gestion de contenus sur différents CMS <span>(wordpress, contentful, shopify)</span></li>
        <li>・ Outils/applications <span>(zoom, slack, bitbucket, active collab, dropBox, pixelmator)</span></li>
      </ul>
    ),
  },
  {
    title: "Développeur full stack - Human Booster",
    subtitle: "formation - juillet 2020 à mai 2021",
    description: (
      <ul>
        <li>・ Maquetter une application <span>(figma)</span></li>
        <li>・ Réaliser une interface utilisateur web statique et adaptable <span>(html, css)</span></li>
        <li>・ Développer une interface utilisateur web dynamique <span>(angular, javascript)</span></li>
        <li>・ Réaliser une interface utilisateur avec une solution de gestion de contenu <span>(wordpress)</span></li>
        <li>・ Créer une base de données <span>(mcd, mld, mpd, sql)</span></li>
        <li>・ Développer les composants d’accès aux données <span>(web service rest)</span></li>
        <li>・ Développer la partie back-end d’une application web <span>(symfony, wordpress)</span></li>
        <li>・ Elaborer et mettre en œuvre des composants dans une application de gestion de contenu <span>(php, wordpress)</span></li>
      </ul>
    ),
  },
  {
    title: "Fondateur - ilovethistrack.com",
    subtitle: "janvier 2015 à juillet 2021",
    description: (
      <ul>
        <li>・ Création site de musique <span>(wordpress, themeforest)</span></li>
        <li>・ Création logo et charte graphique <span>(pixelmator pro)</span></li>
        <li>・ Mise en page du site <span>(php, css)</span></li>
        <li>・ Ajout, suppression, modification et transfert de fichiers <span>(filezila)</span></li>
        <li>・ Création et mise en ligne de contenus multimédias <span>(final cut pro, youtube)</span></li>
        <li>・ Communication réseaux sociaux <span>(facebook, twitter, instagram)</span></li>
      </ul>
    ),
  },
  {
    title: "Responsable Adjoint - Bexley",
    subtitle: "cdi - mars 2014 à novembre 2019",
    description: (
      <ul>
        <li>・ Participation aux recrutements</li>
        <li>・ Tutorat / Formation des nouveaux collaborateurs</li>
        <li>・ Analyse des indicateurs commerciaux</li>
        <li>・ Remises en banque / Gestion de caisse</li>
        <li>・ Gestion des stocks / Inventaires tournant</li>
        <li>・ Vente / Service après-vente</li>
      </ul>
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
              <div className="experiences__item--title">{job.title} <span>({job.subtitle})</span></div>
            </div>
            <div className={isVisible === index ? "experiences__item--content show" : "experiences__item--content"}>{job.description}</div>
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
