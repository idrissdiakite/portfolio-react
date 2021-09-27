import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import cn from "classnames";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

import "./style.scss";

const internalLinks = [
  {
    id: 1,
    url: "/",
    name: <span>Qui je suis</span>,
  },
  {
    id: 2,
    url: "/",
    name: <span>Dipômes</span>,
  },
  {
    id: 3,
    url: "/",
    name: <span>Expériences</span>,
  },
  {
    id: 4,
    url: "/",
    name: <span>Projets</span>,
  },
  {
    id: 5,
    url: "/",
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
                <a href="/">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="/">
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
