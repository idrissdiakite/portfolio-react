import React from "react";
import Menu from "../../components/Menu";
import MenuManager from "../../components/Menu/MenuManager";

import { AiOutlineMail, AiOutlinePhone, AiOutlineHome, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import "./style.scss";

const Contact = () => {
  return (
    <MenuManager>
      <Menu />
      <section className="contact">
        <h1>Contact</h1>
        <div className="main-container">
          <p>
            Actuellement à la recherche d'un poste de <br />
            développeur web (front-end de préférence).
          </p>

          <p>Disponible de suite - et particulièrement motivé 🕺🏽</p>

          <div className="contact-container">
          <h2>Me contacter:</h2>
            <ul>
            <li>
                <AiOutlinePhone className="icon"/>
                <a href="tel:0669674585">06.69.67.45.85</a>
              </li>

              <li>
                <AiOutlineMail className="icon"/>
                <a href="mailto:idriss.diakite@hotmail.fr">idriss.diakite@hotmail.fr</a>
              </li>

              <li>
                <AiOutlineHome className="icon"/>
                <span>Rue du Griffon - 69001 Lyon</span>
              </li>

              <li>
                <AiFillLinkedin className="icon"/>
                <a href="https://www.linkedin.com/in/idiakite" target="_blank" rel="noreferrer">linkedin.com/in/idiakite</a>
              </li>

              <li>
                <AiFillGithub className="icon"/>
                <a href="https://github.com/idrissdiakite" target="_blank" rel="noreferrer">github.com/idrissdiakite</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MenuManager>
  );
};

export default Contact;
