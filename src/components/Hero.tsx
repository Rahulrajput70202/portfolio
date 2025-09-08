import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Instagram, Facebook } from 'lucide-react';

const Hero: React.FC = () => {
  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/in/rahul-bainade-919985327', color: 'text-blue-400' },
    { icon: Github, href: 'https://github.com/Rahulrajput70202', color: 'text-gray-300' },
    { icon: Instagram, href: 'https://instagram.com/rahul_rajput_vll', color: 'text-pink-400' },
    { icon: Facebook, href: 'https://facebook.com/share/1JZ4daiBBC', color: 'text-blue-500' },
  ];

  const handleDownloadResume = () => {
    // Create a dummy PDF download
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Rahul_Bainade_Resume.pdf';
    link.click();
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative cyber-grid">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/50 to-dark-800/50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
           <motion.img
            src="/about-me.jpg"
            alt="Rahul Bainade"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 border-4 border-cyber-blue neon-blue"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="gradient-text glitch" data-text="Rahul Bainade">
            Rahul Bainade
          </span>
        </motion.h1>

        <motion.div
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 font-mono"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-cyber-blue">Software Developer</span>
          <span className="text-gray-500 mx-2">&</span>
          <span className="text-cyber-purple">Cybersecurity Analyst</span>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Passionate about building secure applications and analyzing cyber threats. 
          Experienced in Python development, penetration testing, and security automation.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.button
            onClick={handleDownloadResume}
            className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 neon-blue"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.7)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.button>

          <motion.button
            onClick={handleContactClick}
            className="px-8 py-4 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue hover:text-dark-900 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail className="w-5 h-5" />
            <span>Contact </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="flex justify-center space-x-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} hover:scale-110 transition-transform duration-200`}
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="w-8 h-8" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyber-blue rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
