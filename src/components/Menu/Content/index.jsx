import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import cn from "classnames";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

import "./style.scss";

const internalLinks = [
  {
    id: 1,
    url: "/",
    name: 'Accueil',
  },
  {
    id: 2,
    url: "/presentation",
    name: 'Qui je suis',
  },
  {
    id: 3,
    url: "/experiences",
    name: 'Expériences',
  },
  {
    id: 4,
    url: "/projets",
    name: 'Projets',
  },
  {
    id: 5,
    url: "/contact",
    name: 'Contact',
  },
];

const Content = () => {
  const { open } = useContext(MenuContext);

  return (
    <>
      <div className={cn("menu__wrapper", { open })}>
        <nav className="nav">
          <ul className="nav__links">
            {internalLinks.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>

          <ul className="nav__icons">
            <li>
              <a href="https://www.linkedin.com/in/idiakite" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
            </li>
            <li>
              <a href="https://github.com/idrissdiakite" target="_blank" rel="noreferrer">
                <AiOutlineGithub />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Content;
