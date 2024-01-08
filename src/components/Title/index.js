import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ className, children }) => {
  return (
    <motion.h1
      className={className}
      initial={{ x: '-150%' }}
      animate={{ x: 0 }}
      transition={{ type: 'tween', ease: 'anticipate', duration: 1.5 }}
    >
      {children}
    </motion.h1>
  );
};

export default Title;