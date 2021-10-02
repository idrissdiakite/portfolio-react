import React from "react";
import Button from "../../components/Button";
import Menu from "../../components/Menu";
import MenuManager from "../../components/Menu/MenuManager";

import "./style.scss";

const Presentation = () => {
  return (
    <MenuManager>
      <Menu />
      <section className="presentation">
        <h1>Qui je suis</h1>
        <div className="main-container">
          <p>
            Après plus de 10 années passées dans l'univers de la vente, j'ai
            décidé fin 2019 de quitter mon poste de manager adjoint afin de me
            professionnaliser dans le développement web. ~ Titulaire du Titre
            Professionnel "Développeur web et web mobile full stack" (Bac +2).
          </p>
        </div>
        <Button />
      </section>
    </MenuManager>
  );
};

export default Presentation;
