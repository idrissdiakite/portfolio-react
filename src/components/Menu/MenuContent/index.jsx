import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import cn from "classnames";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

import "./style.scss";

const internalLinks = [
  {
    id: 1,
    url: "/",
    name: <span>Accueil</span>,
  },
  {
    id: 2,
    url: "/presentation",
    name: <span>Qui je suis</span>,
  },
  {
    id: 3,
    url: "/experiences",
    name: <span>Expériences</span>,
  },
  {
    id: 4,
    url: "/projets",
    name: <span>Projets</span>,
  },
  {
    id: 5,
    url: "/contact",
    name: <span>Contact</span>,
  },
];

const MenuContent = () => {
  const { open } = useContext(MenuContext);

  return (
    <>
      <div className="menu-holder">
        <div className={cn("menu-inside", { open })}>
          <div className="menu-nav-container">
            <ul className="nav-links">
              {internalLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.url}>{link.name}</a>
                </li>
              ))}
            </ul>

            <ul className="nav-icons">
              <li>
                <a
                  href="https://www.linkedin.com/in/idiakite"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/idrissdiakite"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuContent;
