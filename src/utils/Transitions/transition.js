import { motion } from "framer-motion";

const Transition = ({ className, children }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      {children}
    </motion.section>
  )
}

export default Transition;