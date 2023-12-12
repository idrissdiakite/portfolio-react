import React from "react";
import { motion } from "framer-motion";
import Details from "../components/Details";

const Contact = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <h1 className="contact__title">Contact</h1>
      <Details />
    </motion.section>
  )
}

export default Contact;
