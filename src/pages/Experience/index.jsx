import React from "react";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import MenuManager from "../../components/Menu/MenuManager";

import "./style.scss";

const Experience = () => {
  return (
    <MenuManager>
      <Menu />
      <section className="experience">
        <h1>Experiences</h1>
        <div className="main-container">
          <div class="jobs">
            <div class="job">
              <div class="title">
                <h3>Développeur frontend - Ultrō</h3>
                <p>stage - février à mai 2021</p>
              </div>
              <div class="description">
                <p>
                  - Création d'un thème Wordpress sur-mesure{" "}
                  <span>(Docker, PHP, WP Query, JavaScript)</span> <br />-
                  Intégration dynamique d'un site avec GatsbyJS{" "}
                  <span>(React, JavaScript, GraphQL, Wordpress)</span>
                  <br />- Intégration statique & gestion du responsive à partir
                  de maquettes <span>(HTML, CSS)</span>
                  <br />- Gestion de contenu sur différents CMS{" "}
                  <span>(Wordpress, Contentful, Shopify)</span>
                </p>
                <p>
                  Outils utilisés:{" "}
                  <span>
                    Zoom, Slack, Bitbucket, Active Collab, DropBox, Pixelmator..
                  </span>
                </p>
              </div>
            </div>

            <div class="job">
              <div class="title">
                <h3>Développeur web et web mobile fullstack - Human Booster</h3>
                <p>formation - juillet 2020 à mai 2021</p>
              </div>
              <div class="description">
                <p>
                  1. Développer la partie front-end d'une application web et web
                  mobile: <br />
                  - Maquetter une application <br />- Réaliser une interface
                  utilisateur web statique et adaptable <span>(HTML, CSS)</span>
                  <br />- Développer une interface utilisateur web dynamique{" "}
                  <span>(JavaScript, Angular)</span>
                  <br />- Réaliser une interface utilisateur avec une solution
                  de gestion de contenu <span>(Wordpress)</span>
                </p>

                <p>
                  2. Développer la partie back-end d'une application web et web
                  mobile:
                  <br />- Créer une base de données
                  <span> (MCD, MLD, MPD, SQL)</span>
                  <br />- Développer les composants d’accès aux données{" "}
                  <span>(Web Service Rest)</span>
                  <br />- Développer la partie back-end d’une application web et
                  web mobile <span>(PHP, Symfony)</span>
                  <br />- Elaborer et mettre en œuvre des composants dans une
                  application de gestion de contenu{" "}
                  <span>(Wordpress, PHP)</span>
                </p>
              </div>
            </div>

            <div class="job">
              <div class="title">
                <h3>Fondateur - ilovethistrack.com</h3>
                <p>janvier 2015 à aout 2020</p>
              </div>
              <div class="description">
                <p>
                  - Création site de musique via Wordpress{" "}
                  <span>(playlists et coups de coeur en tous genres)</span>{" "}
                  <br />- Création logo et charte graphique{" "}
                  <span>(Pixelmator Pro)</span>
                  <br />- Mise en page du site <span>(HTML, CSS, PHP)</span>
                  <br />- Ajout, suppression, modification et transfert de
                  fichiers <span>FileZila</span>
                  <br />- Création de contenu multimédia{" "}
                  <span>(Final Cut Pro)</span>
                  <br />
                  - Mise en ligne de contenu sur Youtube
                  <br />- Communication{" "}
                  <span>(facebook, twitter, instagram..)</span>
                </p>
              </div>
            </div>

            <div class="job">
              <div class="title">
                <h3>Responsable Adjoint - Bexley</h3>
                <p>cdi - mars 2014 à novembre 2019</p>
              </div>
              <div class="description">
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
                  - Remises en banque
                  <br />
                  - Gestion de caisse
                  <br />
                  - Gestion des stocks
                  <br />
                  - Inventaires tournant
                  <br />
                  - Réassort boutique
                  <br />
                  - Réception et gestion des livraisons
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button />
      </section>
    </MenuManager>
  );
};

export default Experience;
