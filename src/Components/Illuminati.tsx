import React from 'react';
import { motion } from 'framer-motion';

const IlluminatiEye = () => {
  return (
    <motion.svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.path
        d="M50 25 C20 25 5 50 5 50 C5 50 20 75 50 75 C80 75 95 50 95 50 C95 50 80 25 50 25 Z"
        fill="none"
        stroke="#8B5CF6"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.circle
        cx="50"
        cy="50"
        r="15"
        fill="#8B5CF6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.svg>
  );
};

export default IlluminatiEye;
