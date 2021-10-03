import React from "react";
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
} from "react-icons/si";

import ilttcom from "../../assets/ilttcom-react.png";
import artshop from "../../assets/artshop-tailwind.png";
import pictureWp from "../../assets/picture-wp.png";
import pictureGatsby from "../../assets/picture-gatsby.png";
import js from "../../assets/js.png";
import ilovethistrackcom from "../../assets/ilovethistrackcom.png";
import contact from "../../assets/gestionnaire-contact.png";
import serie from "../../assets/series-angular.png";

import "./style.scss";

const projects = [
  {
    id: 1,
    name: "ilttcom (react-airtable-scss)",
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
    img: <img src={ilttcom} alt="ilttcom react" class="img" />,
    description: (
      <p>
        Application musicale réalisée avec React, Airtable (en guise de base de
        donnée) et SCSS (pour la mise en forme).
      </p>
    ),
    links: (
      <p>
        ‣{" "}
        <a
          href="https://github.com/idrissdiakite/ilttcom-react-airtable"
          rel="noreferrer"
        >
          github
        </a>{" "}
        <br />‣{" "}
        <a
          href="https://drive.google.com/file/d/19XmZkntqQG8eKVYJceQT8wImXwHJabgT"
          rel="noreferrer"
        >
          demo
        </a>
      </p>
    ),
  },
  {
    id: 2,
    name: "Artshop (tailwind)",
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
    img: <img src={artshop} alt="Artshop (Tailwind)" class="img" />,
    description: (
      <p>
        Site (fictif) de vente d'oeuvres d'art entièrement mis en forme à l'aide
        du framework CSS Tailwind.
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
    id: 3,
    name: "Picture Organic Clothing (wordpress-php)",
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
    img: <img src={pictureWp} alt="POC Wordpress" class="img" />,
    description: (
      <p>
        Création d'un thème Wordpress sur-mesure effectué lors de mon stage au
        sein de l'agence digitale Ultrō pour le compte de Picture Organic
        Clothing.
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
          href="https://drive.google.com/file/d/1smJFAmxSP8zreWFDw4ewoZ3Tj-kUhPUN"
          target="_blank"
          rel="noreferrer"
        >
          demo
        </a>
      </p>
    ),
  },
  {
    id: 4,
    name: "Picture Organic Clothing (gatsbyjs-react-graphql)",
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
    img: <img src={pictureGatsby} alt="POC gatsby" class="img" />,
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
    id: 5,
    name: "ilovethistrack.com (wordpress)",
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
    img: <img src={ilovethistrackcom} alt="ilovethistrack.com" class="img" />,
    description: <p>Site de musique indépendant à caractère éducatif.</p>,
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
    id: 6,
    name: "Projets JavaScript (js vanilla)",
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
      </ul>
    ),
    img: <img src={js} alt="Projets Javascript" class="img" />,
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
      </p>
    ),
  },
  {
    id: 7,
    name: "Gestionnaire de contacts (php-symfony-bootstrap)",
    icons: (
      <ul className="icons">
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
    img: <img src={contact} alt="Gestionnaire de contact" class="img" />,
    description: (
      <p>
        Application Symfony permettant d'afficher une liste de contacts avec
        diverses informations. Formulaire de connexion, recherche, trie et CRUD complet.
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
    id: 8,
    name: "Gestionnaire de séries (angular-bootstrap)",
    icons: (
      <ul className="icons">
        <li>
          <SiAngular className="angular" />
        </li>
        <li>
          <SiBootstrap className="bootstrap" />
        </li>
      </ul>
    ),
    img: <img src={serie} alt="Gestionnaire de séries" class="img" />,
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
    <div className="projects">
      {projects.map((project) => (
        <div class="project" key={project.id}>
          <div className="info">
            <p class="name">{project.name}</p>
            {project.icons}
          </div>
          {project.img}
          <div className="description">{project.description}</div>
          <div className="links">{project.links}</div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
