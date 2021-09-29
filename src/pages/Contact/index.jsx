import React from "react";
import Menu from "../../components/Menu";
import MenuManager from "../../components/Menu/MenuManager";

import "./style.scss";

const Contact = () => {
  return (
    <MenuManager>
    <Menu />
      <section className="contact">
        <h1>Contact</h1>
      </section>
    </MenuManager>
  );
};

export default Contact;
