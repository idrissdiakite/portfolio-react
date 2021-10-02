import React from "react";
import Button from "../../components/Button";
import Cards from "../../components/Cards";
import Menu from "../../components/Menu";
import MenuManager from "../../components/Menu/MenuManager";

import "./style.scss";

const Projects = () => {
  return (
    <MenuManager>
      <Menu />
      <section className="my-projects">
        <h1>Projets</h1>
        <div className="main-container">
        <Cards />
        </div>
        <Button />
      </section>
    </MenuManager>
  );
};

export default Projects;