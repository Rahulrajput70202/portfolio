import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code, Shield } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Terminal className="w-12 h-12 text-cyber-blue" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Code className="w-12 h-12 text-cyber-purple" />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Shield className="w-12 h-12 text-cyber-pink" />
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
                <img
            src="/about-me.jpg"
            alt="Rahul Bainade"
            className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-cyber-blue neon-blue"
          />

        </motion.div>

        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-4 typewriter gradient-text"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 3 }}
        >
          Hi, I'm Rahul Bainade
        </motion.h1>

        <motion.p
          className="text-xl text-gray-300 typewriter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Software Developer & Cybersecurity Analyst
        </motion.p>

        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="flex justify-center">
            <div className="w-16 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
