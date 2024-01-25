import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "react-intersection-observer"

const Accordion = ({ title, subtitle, description, isOpen, onClick }) => {
  const [ref, inView] = useInView()

  return (
    <>
      <motion.div 
        className="experiences__item"
        ref={ref}
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
        transition={{ type: "tween", ease: "easeOut", duration: 1 }}
      >
        <motion.div className="experiences__item--top" initial={false} onClick={onClick}>
          <div className="experiences__item--title">{title} <span>({subtitle})</span></div>
        </motion.div>
        <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{ open: { opacity: 1, height: "auto" }, collapsed: { opacity: 0, height: 0 } }}
            transition={{ duration: 1, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <motion.div 
              className="experiences__item--content"
              variants={{ collapsed: { scale: 0.9 }, open: { scale: 1 } }}
              transition={{ duration: 0.1 }}
            >
              {description}
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Accordion;