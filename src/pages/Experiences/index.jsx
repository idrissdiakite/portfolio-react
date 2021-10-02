import React from "react";
import Button from "../../components/Button";
import Jobs from "../../components/Jobs";
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
          <Jobs />
        </div>
        <Button />
      </section>
    </MenuManager>
  );
};

export default Experience;
