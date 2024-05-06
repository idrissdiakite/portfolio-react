import React from 'react';
import Button from './Button';
import Content from './Content';
import { motion } from "framer-motion";

const Menu = () => {
  return (
    <>
      <motion.div 
        className="menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 3 }}>
          <Button />
          <Content />
      </motion.div>
    </>
  )
}

export default Menu;