import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineHome,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai"

const contactDetails = [
  {
    icon: <AiOutlinePhone />,
    link: <a href="tel:0669674585">06.69.67.45.85</a>,
  },
  {
    icon: <AiOutlineMail />,
    link: (
      <a href="mailto:idriss.diakite@hotmail.fr">idriss.diakite@hotmail.fr</a>
    ),
  },
  {
    icon: <AiOutlineHome />,
    link: <p>Lyon (69003)</p>,
  },
  {
    icon: <AiFillLinkedin />,
    link: (
      <a
        href="https://www.linkedin.com/in/idiakite"
        target="_blank"
        rel="noreferrer"
      >
        linkedin.com/in/idiakite
      </a>
    ),
  },
  {
    icon: <AiFillGithub className="icon" />,
    link: (
      <a
        href="https://github.com/idrissdiakite"
        target="_blank"
        rel="noreferrer"
      >
        github.com/idrissdiakite
      </a>
    ),
  },
]

const Details = () => {
  return (
    <>
      <div className="contact__details">
      <motion.p
        className="contact__desc"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", ease: "anticipate", duration: 2 }}
      >
        Me contacter:
      </motion.p>
        <motion.ul className="contact__links">
          {contactDetails.map((detail, index) => (
            <Detail key={index} detail={detail} />
          ))}
        </motion.ul>
      </div>
    </>
  )
}

export default Details;

const Detail = ({ detail }) => {
  const [ref, inView] = useInView()

  return (
    <motion.li 
      className="contact__link"
      ref={ref} 
      initial={{ opacity: 0, x: 100 }} 
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      transition={{ type: "tween", ease: "anticipate", duration: 1 }}
    >
      {detail.icon}
      {detail.link}
    </motion.li>
  )
}


