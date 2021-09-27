import React from "react";
import MenuManager from "../components/Menu/MenuManager";
import Header from "../components/Menu";
import HomeButton from "../components/HomeButton";

const Info = () => {
  return (
    <MenuManager>
      <Header />
      <div className="info page container">
        <h1>Qui je suis ?</h1>
        <HomeButton />
      </div>
    </MenuManager>
  );
};

export default Info;
