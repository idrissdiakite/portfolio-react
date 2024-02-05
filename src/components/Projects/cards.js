import React from "react";
import { useRef, createRef } from 'react'; 
import {
  SiHtml5,
  SiCss3,
  SiGreensock,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextDotJs,
  SiSpotify,
  SiPhp,
  SiDocker,
  SiGatsby,
  SiGraphql,
  SiWordpress,
  SiAirtable,
  SiTailwindcss,
  SiSass,
  SiPostcss,
  SiBootstrap,
  SiFilezilla,
  SiSvg,
  // SiMysql,
  SiNetlify,
  SiWoo,
  SiStripe,
  SiGooglepay,
  SiApplepay,
  SiPaypal
} from "react-icons/si";
import { RiVuejsFill } from "react-icons/ri";
import anyos from "../../assets/cards/anyos.png";
import quodagis from "../../assets/cards/quodagis.png";
import bycap from "../../assets/cards/bycap.png";
import spotify from "../../assets/cards/spotify.png";
import jeu from "../../assets/cards/jeu.png";
import paillet from "../../assets/cards/paillet.png";
import zeldaNY from "../../assets/cards/zelda-ny.png";
import ateliers from "../../assets/cards/ateliers.png";
import birdiebox from "../../assets/cards/birdie-box.png";
import portfolio from "../../assets/cards/portfolio.png";
import ilttcom from "../../assets/cards/ilttcom-react.png";
import artshop from "../../assets/cards/artshop-tailwind.png";
import pictureWp from "../../assets/cards/picture-wp.png";
import pictureGatsby from "../../assets/cards/picture-gatsby.png";

const projects = [
  {
    name: "Anyos",
    icons: (
      <ul className="card__icons">
        <li><SiWordpress className="wordpress" title="Wordpress" /></li>
        <li><SiJavascript className="javascript" title="Javascript" /></li>
        <li><SiSass className="sass" title="Sass" /></li>
        <li><SiBootstrap className="bootstrap" title="Bootstrap" /></li>
        <li><SiFilezilla className="filezila" title="FileZila" /></li>
        <li><SiGreensock className="greensock" title="Greensock" /></li>
        <li><SiSvg className="svg" title="SVG" /></li>
      </ul>
    ),
    img: <img src={anyos} alt="Anyos" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/anyos/tree/main" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://anyos.fr/" target="_blank" rel="noreferrer">live</a></li>
      </ul>
    ),
  },
  {
    name: "Quodagis",
    icons: (
      <ul className="card__icons">
        <li><SiWordpress className="wordpress" title="Wordpress" /></li>
        <li><SiJavascript className="javascript" title="Javascript" /></li>
        <li><SiSass className="sass" title="Sass" /></li>
        <li><SiBootstrap className="bootstrap" title="Bootstrap" /></li>
        <li><SiFilezilla className="filezila" title="FileZila" /></li>
        <li><SiGreensock className="greensock" title="Greensock" /></li>
        <li><SiSvg className="svg" title="SVG" /></li>
      </ul>
    ),
    img: <img src={quodagis} alt="Quodagis" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/quodagis/tree/main" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://quodagis.fr/" target="_blank" rel="noreferrer">live</a></li>
      </ul>
    ),
  },
  {
    name: "Bycap",
    icons: (
      <ul className="card__icons">
        <li><SiWordpress className="wordpress" title="Wordpress" /></li>
        <li><SiJavascript className="javascript" title="Javascript" /></li>
        <li><SiSass className="sass" title="Sass" /></li>
        <li><SiBootstrap className="bootstrap" title="Bootstrap" /></li>
        <li><SiFilezilla className="filezila" title="FileZila" /></li>
        <li><SiGreensock className="greensock" title="Greensock" /></li>
        <li><SiSvg className="svg" title="SVG" /></li>
      </ul>
    ),
    img: <img src={bycap} alt="Bycap" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/bycap-wp-gsap" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://by-cap.com/" target="_blank" rel="noreferrer">live</a></li>
      </ul>
    ),
  },
  {
    name: "Spotify clone",
    icons: (
      <ul className="card__icons">
        <li><SiSpotify className="spotify" title="Spotify" /></li>
        <li><SiNextDotJs className="nextjs" title="Nextjs" /></li>
        <li><SiTailwindcss className="tailwind" title="Tailwind" /></li>
      </ul>
    ),
    img: <img src={spotify} alt="Spotify clone" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/spotify-clone-nextjs" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://www.youtube.com/watch?v=K-TKYTH5JrM" target="_blank" rel="noreferrer">démo</a></li>
      </ul>
    ),
  },
  {
    name: "Jeu Prends le Bus",
    icons: (
      <ul className="card__icons">
        <li><RiVuejsFill className="vuejs" title="Vuejs" /></li>
        <li><SiWordpress className="wordpress" title="Wordpress" /></li>
        <li><SiSvg className="svg" title="SVG" /></li>
        <li><SiJavascript className="javascript" title="Javascript" /></li>
        <li><SiTypescript className="typescript" title="TypeScript" /></li>
        <li><SiFilezilla className="filezila" title="FileZila" /></li>
        <li><SiSass className="sass" title="Sass" /></li>
      </ul>
    ),
    img: <img src={jeu} alt="Jeu Prends le Bus" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/jeu-prends-le-bus-nuxt" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="http://demo.jeu-prends-le-bus.zelllda.fr/" target="_blank" rel="noreferrer">live/démo</a></li>
      </ul>
    ),
  },
  {
    name: "Paillet",
    icons: (
      <ul className="card__icons">
        <li><SiPhp className="php" title="PHP" /></li>
        <li><SiWordpress className="wordpress" title="Wordpress" /></li>
        <li><SiFilezilla className="filezila" title="FileZila" /></li>
        <li><SiJavascript className="javascript" title="Javascript" /></li>
        <li><SiTypescript className="typescript" title="TypeScript" /></li>
        <li><SiSass className="sass" title="Sass" /></li>
      </ul>
    ),
    img: <img src={paillet} alt="Paillet" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/paillet-wordpress" target="_blank" rel="noreferrer">github</a></li>
      </ul>
    ),
  },
  {
    name: "Meilleurs voeux 2022",
    icons: (
      <ul className="card__icons">
        <li><SiReact className="react" title="React" /></li>
        <li><SiJavascript className="javascript" title="Javascript" /></li>
        <li><SiSass className="sass" title="Sass" /></li>
        <li><SiSvg className="svg" title="SVG" /></li>
      </ul>
    ),
    img: <img src={zeldaNY} alt="birdie box" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/zelda-happy-new-year" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://2022.zelda.fr/" target="_blank" rel="noreferrer">live</a></li>
      </ul>
    ),
  },
  {
    name: "Ateliers",
    icons: (
      <ul className="card__icons">
        <li><SiWoo className="woocommerce" title="Woocommerce" /></li>
        <li><SiWordpress className="wordpress" title="Wordpress" /></li>
        <li><SiFilezilla className="filezila" title="FileZila" /></li>
        <li><SiStripe className="stripe" title="Stripe" /></li>
        <li><SiPaypal className="paypal" title="Paypal" /></li>
        <li><SiGooglepay className="googlepay" title="Google Pay" /></li>
        <li><SiApplepay title="Apple Pay" /></li>
      </ul>
    ),
    img: <img src={ateliers} alt="birdie box" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/ateliers-wordpress" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://ateliersbysergelabrosse.ch/" target="_blank" rel="noreferrer">live</a></li>
      </ul>
    ),
  },
  {
    name: "Birdie Box",
    icons: (
      <ul className="card__icons">
        <li><SiReact className="react" title="React" /></li>
        <li><SiJavascript className="javascript" title="Javascript" /></li>
        <li><SiSass className="sass" title="Sass" /></li>
        <li><SiSvg className="svg" title="SVG" /></li>
      </ul>
    ),
    img: <img src={birdiebox} alt="birdie box" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/birdie-box" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://www.birdie-box.com/" target="_blank" rel="noreferrer">live</a></li>
      </ul>
    ),
  },
  {
    name: "Portfolio",
    icons: (
      <ul className="card__icons">
        <li><SiReact className="react" title="React" /></li>
        <li><SiJavascript className="javascript" title="Javascript" /></li>
        <li><SiSass className="sass" title="Sass" /></li>
        <li><SiNetlify className="netlify" title="Netlify" /></li>
      </ul>
    ),
    img: <img src={portfolio} alt="portfolio" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/portfolio-react" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://idrissdiakite.netlify.app/" target="_blank" rel="noreferrer">live</a></li>
      </ul>
    ),
  },
  {
    name: "ilttcom",
    icons: (
      <ul className="card__icons">
        <li><SiReact className="react" title="React" /></li>
        <li><SiAirtable className="airtable" title="Airtable" /></li>
        <li><SiJavascript className="javascript" title="Javascript" /></li>
        <li><SiSass className="sass" title="Sass" /></li>
        <li><SiNetlify className="netlify" title="Netlify" /></li>
      </ul>
    ),
    img: <img src={ilttcom} alt="ilttcom react" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/ilttcom-react-airtable" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://ilttcom.netlify.app/" target="_blank" rel="noreferrer">live</a></li>
      </ul>
    ),
  },
  {
    name: "Artshop",
    icons: (
      <ul className="card__icons">
        <li><SiTailwindcss className="tailwind" title="Tailwind" /></li>
        <li><SiPostcss className="postcss" title="PostCSS" /></li>
        <li><SiHtml5 className="html" title="HTML" /></li>
        <li><SiNetlify className="netlify" title="Netlify" /></li>
      </ul>
    ),
    img: (<img src={artshop} alt="Artshop (Tailwind)" loading="lazy" />),
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/artshop-tailwind" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://youtu.be/GDyM2mVWCW8?si=ajLyIuD030eD65u-" target="_blank" rel="noreferrer">demo</a></li>
      </ul>
    ),
  },
  {
    name: "Picture Organic Clothing",
    icons: (
      <ul className="card__icons">
        <li><SiDocker className="docker" title="Docker" /></li>
        <li><SiPhp className="php" title="PHP" /></li>
        <li><SiWordpress className="wordpress" title="Wordpress" /></li>
        <li><SiCss3 className="css" title="CSS" /></li>
        <li><SiJavascript className="javascript" title="Javascripthp" /></li>
      </ul>
    ),
    img: <img src={pictureWp} alt="POC Wordpress" loading="lazy" />,
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/picture-wordpress-theme" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://youtu.be/X2kX9eSSveI?si=WSqPVzDbZQDkYyiy" target="_blank" rel="noreferrer">demo</a></li>
      </ul>
    ),
  },
  {
    name: "Picture Organic Clothing",
    icons: (
      <ul className="card__icons">
        <li><SiGatsby className="gatsby" title="Gatsby" /></li>
        <li><SiReact className="react" title="React" /></li>
        <li><SiGraphql className="graphql" title="GraphQL" /></li>
        <li><SiWordpress className="wordpress" title="Wordpress" /></li>
        <li><SiCss3 className="css" title="CSS" /></li>
      </ul>
    ),
    img: (<img src={pictureGatsby} alt="POC gatsby" loading="lazy" />),
    links: (
      <ul>
        <li><span>‣</span><a href="https://github.com/idrissdiakite/picture-wp-gatsbyjs" target="_blank" rel="noreferrer">github</a></li>
        <li><span>‣</span><a href="https://youtu.be/HH5K28mIiEk?si=y28ElToezK0eoxvL" target="_blank" rel="noreferrer">demo</a></li>
      </ul>
    ),
  },
]

const Cards = () => {
  const projectPairs = projects.reduce((acc, project, index) => {
    const pairIndex = Math.floor(index / 2)

    if (!acc[pairIndex]) { acc[pairIndex] = [] }
    acc[pairIndex].push(project)

    return acc
  }, [])

    const imageRefs = useRef([])

    const manageMouseMove = (e, pairIndex) => {
      const isMobile = window.innerWidth < 1200

      if (!isMobile) {
        const { clientX } = e
        const xPercent = (clientX / window.innerWidth) * 100
    
        imageRefs.current[pairIndex] = imageRefs.current[pairIndex] || []
    
        imageRefs.current[pairIndex].forEach((ref, index) => {
          if (ref.current) {
            const widthPercent = index === 0 ? 66.66 - xPercent * 0.33 : 33.33 + xPercent * 0.33
            ref.current.style.width = `${widthPercent}%`;
          }
        })
      }
    }

  return (
    <>
      {projectPairs.map((pair, pairIndex) => {
        imageRefs.current[pairIndex] = imageRefs.current[pairIndex] || pair.map(() => createRef())

        return (
          <div onMouseMove={(e) => manageMouseMove(e, pairIndex)} className="cards" key={pairIndex}>
            {pair.map((project, index) => {
              const cardRef = imageRefs.current[pairIndex][index]

              return (
                <div className="card" key={index} ref={cardRef}>
                  <div className="card__wrapper">
                    <div className="card__image">{project.img}</div>
                    <div className="card__content">
                      <div className="card__top">
                        <p className="card__name">{project.name}</p>
                        {project.icons}
                      </div>
                      <div className="card__links">{project.links}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )
      })}
    </>
  );
}

export default Cards;
