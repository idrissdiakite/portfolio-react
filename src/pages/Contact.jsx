import React from "react";
import MenuManager from "../components/Menu/MenuManager";
import Header from "../components/Menu";
import HomeButton from "../components/HomeButton";

const Contact = () => {
    return (
        <MenuManager>
        <Header />
        <div className="contact page container">
          <h1>Contact</h1>
          <p>Je suis actuellement à la recherche d'un poste de développeur web (front-end de préférence) sur Lyon.</p>
          <HomeButton />
        </div>
      </MenuManager>
    );
};

export default Contact;