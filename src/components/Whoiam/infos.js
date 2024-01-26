import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  IoStopwatchOutline,
  IoLocationOutline,
  IoSchoolOutline,
  IoEarthOutline,
  IoEarOutline,
  IoHeartOutline,
  IoMusicalNotesOutline,
  IoPawOutline,
  IoSunnyOutline,
  IoStarOutline
} from "react-icons/io5"

const infos = [
  {
    icon: <IoLocationOutline />,
    text: "Né à Annecy, vis actuellement à Lyon.",
  },
  {
    icon: <IoHeartOutline />,
    text: "Passionné de musique, d'informatique, de cinéma, de sport et d'art en général.",
  },
  {
    icon: <IoSchoolOutline />,
    text: "Titulaire (également) d'un BTS Management des Unités Commerciales.",
  },
  {
    icon: <IoEarOutline />,
    text: "Toujours à l'écoute, excellent relationnel, sens aïgu des responsabilités.",
  },
  {
    icon: <IoSunnyOutline />,
    text: "Ouvert d'esprit, curieux, créatif et autonome.",
  },
  {
    icon: <IoStarOutline />,
    text: "Goût prononcé pour le travail en équipe, l'ui/ux et les raclettes en été.",
  },
  {
    icon: <IoMusicalNotesOutline />,
    text: <span>Mélomane de naissance et accessoirement curator sur <a href="https://open.spotify.com/user/ilovethistrack.com" target="_blank" rel="noreferrer">Spotify</a>.</span>,
  },
  {
    icon: <IoStopwatchOutline />,
    text: "Sportif, cours une à deux fois par semaine.",
  },
  {
    icon: <IoEarthOutline />,
    text: "Globe-trotter, a vécu 6 mois à Londres et déjà visité 5 continents.",
  },
  {
    icon: <IoPawOutline />,
    text: "Doublement Papa, d'un petit garçon et d'un petit beagle.",
  },
]

const Infos = () => {
  return (
    <ul className="whoiam__infos">
      {infos.map((info, index) => (
        <Info key={index} info={info} />
      ))}
    </ul>
  )
}

export default Infos;

const Info = ({ info }) => {
  const [ref, inView] = useInView()

  return (
    <motion.li 
      className="whoiam__info" 
      ref={ref} 
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      transition={{ type: "tween", ease: "easeOut", duration: 1 }}
    >
      <span className="whoiam__info--icon">{info.icon}</span>
      <p className="whoiam__info--text">{info.text}</p>
    </motion.li>
  )
}
