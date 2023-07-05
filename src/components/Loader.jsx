import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: 'easeOut'
      }
    }
  }
};

const Loader = () => {
  return (
    <div className='bg-green-500 w-full h-[850px]'>
      <motion.div className="loader bg-red-500"
        variants={loaderVariants}
        animate="animationOne"
      >
        
      </motion.div>
    </div>
  )
}

export default Loader;