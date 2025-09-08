import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Shield, MapPin, Phone, Mail } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="bg-dark-700/50 p-8 rounded-xl border border-cyber-blue/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-cyber-blue">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Aspiring Python Developer with a strong cybersecurity background. 
                Built tools like IDS, Privacy Leak Analyzer, and backup systems. 
                Experienced in automation, APIs, and security testing with tools like 
                Wireshark, Burp Suite, and Kali Linux.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyber-blue" />
                  <span className="text-gray-300">Chh. Sambhajinagar, India</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-cyber-blue" />
                  <span className="text-gray-300">+91 7020495451</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-cyber-blue" />
                  <span className="text-gray-300">rahulrajput97800@gmail.com</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                className="bg-gradient-to-br from-cyber-blue/10 to-cyber-purple/10 p-6 rounded-xl border border-cyber-blue/20 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 245, 255, 0.3)" }}
              >
                <Code className="w-12 h-12 text-cyber-blue mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Development</h4>
                <p className="text-gray-400 text-sm">Python, C++, Full-Stack Development</p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-cyber-purple/10 to-cyber-pink/10 p-6 rounded-xl border border-cyber-purple/20 text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(128, 0, 255, 0.3)" }}
              >
                <Shield className="w-12 h-12 text-cyber-purple mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Cybersecurity</h4>
                <p className="text-gray-400 text-sm">Penetration Testing, Security Analysis</p>
              </motion.div>
            </div>

            <motion.div
              className="bg-dark-700/50 p-6 rounded-xl border border-cyber-green/20"
              whileHover={{ borderColor: "rgba(0, 255, 128, 0.5)" }}
            >
              <h4 className="text-xl font-bold mb-4 text-cyber-green">Current Focus</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                  <span>Advanced Python Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                  <span>Cloud Security Implementation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyber-green rounded-full"></div>
                  <span>Security Automation Tools</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;