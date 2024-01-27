import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Title = ({ className, children }) => {
  const controls = useAnimation()
  const [scrollDirection, setScrollDirection] = useState('down')

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.scrollY
      setScrollDirection(yOffset > 0 ? 'up' : 'down')
      controls.start({
        y: yOffset * 0.6,
        opacity: yOffset > 0 ? 0.05 : 1
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [controls])

  return (
    <motion.h1
      className={className}
      initial={{ y: 0, opacity: 1 }}
      animate={controls}
      transition={{ 
        opacity: { type: 'tween', ease: 'easeOut', duration: 0.5 },
        y: { type: 'tween', ease: 'linear', duration: 0.1 },
        skewX: { type: 'tween', ease: 'easeOut', duration: 1 }, // Transition spécifique pour skewX
        skewY: { type: 'tween', ease: 'easeOut', duration: 1 } //
       }}
    >
      {children}
    </motion.h1>
  );
};

export default Title;

// const Title = ({ className, children }) => {
//   return (
//     <motion.h1
//       className={className}
//       initial={{ x: '-150%' }}
//       animate={{ x: 0 }}
//       transition={{ type: 'tween', ease: 'easeOut', duration: 0.5, delay: 0.25 }}
//     >
//       {children}
//     </motion.h1>
//   );
// };

// export default Title;