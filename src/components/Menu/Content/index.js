import { useEffect, useContext } from "react";
import { MenuContext } from "../MenuManager";
import cn from "classnames";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { motion } from 'framer-motion';

import "./style.scss";

const internalLinks = [
  {
    id: 1,
    url: "/",
    name: 'Accueil',
  },
  {
    id: 2,
    url: "/whoiam",
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
  const { open, setOpen } = useContext(MenuContext)

  const scrollTop = () => {
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    const handleScroll = () => {
      document.body.style.overflow = open ? 'hidden' : 'visible';
    }

    !open && handleScroll()
    open && window.addEventListener('scroll', handleScroll)
  
    return () => {
      handleScroll()
      window.removeEventListener('scroll', handleScroll);
    }
  }, [open])

  return (
    <>
      <div className={cn("menu__wrapper", { open })}>
        <nav className="nav">
          <ul className="nav__links">
            {internalLinks.map((link) => (
              <motion.li 
                key={link.id} 
                onClick={() => {
                  setOpen(!open)
                  scrollTop()}
                }
                transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
                whileHover={{ 
                  rotateX: 40,
                  rotateY: 0
                }}
              >
                <Link to={link.url}>{link.name}</Link>
              </motion.li>
            ))}
          </ul>

          <ul className="nav__icons">
            <motion.li
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
              whileHover={{ 
                rotateX: 30,
                rotateY: 0
              }}
            >
              <a href="https://www.linkedin.com/in/idiakite" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
            </motion.li>
            <motion.li
              transition={{ type: 'tween', ease: 'easeOut', duration: 0.5 }}
              whileHover={{ 
                rotateX: 30,
                rotateY: 0
              }}
            >
              <a href="https://github.com/idrissdiakite" target="_blank" rel="noreferrer">
                <AiOutlineGithub />
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Content;
