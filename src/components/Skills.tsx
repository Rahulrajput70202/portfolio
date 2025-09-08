import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Shield, Database, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'cyber-blue',
      skills: ['Python', 'Java', 'C++', 'SQL']
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'cyber-purple',
      skills: ['Security Concepts', 'Security Analysis', 'Penetration Testing', 'Vulnerability Assessment']
    },
    {
      title: 'Tools & Technologies',
      icon: Database,
      color: 'cyber-green',
      skills: ['Git', 'SQLite', 'JSON', 'Nmap', 'Metasploit', 'Burp Suite', 'Wireshark', 'Androguard', 'SQLMap']
    },
    {
      title: 'Specializations',
      icon: Wrench,
      color: 'cyber-pink',
      skills: ['Python Security Automation', 'Cloud Security Basics']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + categoryIndex * 0.1, duration: 0.8 }}
              className="bg-dark-700/50 p-6 rounded-xl border border-cyber-blue/20 backdrop-blur-sm hover:border-cyber-blue/50 transition-all duration-300"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 245, 255, 0.1)" }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  className={`p-3 rounded-lg bg-${category.color}/20`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </motion.div>
                <h3 className={`text-xl font-bold text-${category.color}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      delay: 0.4 + categoryIndex * 0.1 + skillIndex * 0.05, 
                      duration: 0.5 
                    }}
                    className="flex items-center space-x-3 group"
                    whileHover={{ x: 5 }}
                  >
                    <motion.div
                      className={`w-2 h-2 bg-${category.color} rounded-full`}
                      animate={{ 
                        boxShadow: [
                          `0 0 0px rgba(0, 245, 255, 0.5)`,
                          `0 0 10px rgba(0, 245, 255, 0.8)`,
                          `0 0 0px rgba(0, 245, 255, 0.5)`
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: skillIndex * 0.2
                      }}
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 p-8 rounded-xl border border-cyber-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-cyber-blue">Continuous Learning</h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Passionate about staying updated with the latest technologies and security trends. 
              Always exploring new tools and methodologies to enhance my development and cybersecurity expertise.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;