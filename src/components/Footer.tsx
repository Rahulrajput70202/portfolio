import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-800 border-t border-cyber-blue/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6 text-cyber-blue" />
            <span className="font-mono font-bold text-xl gradient-text">Rahul Bainade</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>© 2025 Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-cyber-pink fill-current" />
            </motion.div>
            <span>by Rahul Bainade</span>
          </div>

          <div className="text-gray-400 text-sm">
            <span className="font-mono">Software Developer & Cybersecurity Analyst</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-700/50 text-center"
        >
          <p className="text-gray-500 text-sm">
            Built with React, TypeScript, Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;