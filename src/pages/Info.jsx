import React from "react";
import MenuManager from "../components/Menu/MenuManager";
import Header from "../components/Menu";
import HomeButton from "../components/Button";

const Info = () => {
  return (
    <MenuManager>
      <Header />
      <div className="info page container">
        <h1>Qui je suis ?</h1>
        <p>Après plus de 10 années passées dans l'univers de la vente, j'ai décidé fin 2019 de quitter mon poste de manager adjoint afin de me professionnaliser dans le développement web. 
        ~ Titulaire du Titre Professionnel "Développeur web et web mobile full stack" (Bac +2).</p>

        <HomeButton />
      </div>
    </MenuManager>
  );
};

export default Info;
