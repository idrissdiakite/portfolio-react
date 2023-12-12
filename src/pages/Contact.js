import React from "react";
import { motion } from "framer-motion";
import Content from "../components/Contact";

const Contact = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Content />
    </motion.section>
  )
}

export default Contact;
