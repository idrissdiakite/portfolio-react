import React from "react";
import MenuManager from "../components/Menu/MenuManager";
import Header from "../components/Menu";
import HomeButton from "../components/HomeButton";

const Experience = () => {
    return (
        <MenuManager>
        <Header />
        <div className="experiences page container">
          <h1>Expériences</h1>
          <p>coucou les petits loups</p>
          <HomeButton />
        </div>
      </MenuManager>
    );
};

export default Experience;