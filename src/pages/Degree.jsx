import React from "react";
import MenuManager from "../components/Menu/MenuManager";
import Header from "../components/Menu";
import HomeButton from "../components/HomeButton";

const Degree = () => {
    return (
        <MenuManager>
        <Header />
        <div className="degrees page container">
          <h1>Diplômes</h1>
          <HomeButton />
        </div>
      </MenuManager>
    );
};

export default Degree;