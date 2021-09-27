import React from "react";
import MenuManager from "../components/Menu/MenuManager";
import Header from "../components/Menu";
import HomeButton from "../components/HomeButton";

const Project = () => {
    return (
        <MenuManager>
        <Header />
        <div className="projects page container">
          <h1>Projets</h1>
          <HomeButton />
        </div>
      </MenuManager>
    );
};

export default Project;