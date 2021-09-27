import React from "react";
import MenuManager from "../components/Menu/MenuManager";
import Header from "../components/Menu";
import HomeButton from "../components/HomeButton";

const Contact = () => {
    return (
        <MenuManager>
        <Header />
        <div className="info page container">
          <h1>Contact</h1>
          <HomeButton />
        </div>
      </MenuManager>
    );
};

export default Contact;