import React from 'react';
import { motion } from 'framer-motion';

// Define default animation settings
const defaultAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

const AnimationWrapper = ({ children, animation = defaultAnimation, className = '' }) => {
  return (
    <motion.div
      initial={animation.initial}
      animate={animation.animate}
      exit={animation.exit}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;
