import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'MGM University',
      duration: '2023 – 2027',
      status: 'In Progress',
      description: 'Pursuing comprehensive computer science education with focus on software development and cybersecurity.',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Sant Dnyaneshwar School',
      duration: '2021 – 2022',
      status: 'Completed',
      description: 'Completed higher secondary education with strong foundation in mathematics and science.',
    },
  ];

  return (
    <section id="education" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyber-blue to-cyber-purple rounded-full"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <motion.div
                    className="bg-dark-700/50 p-6 rounded-xl border border-cyber-blue/20 backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 0 30px rgba(0, 245, 255, 0.2)",
                      borderColor: "rgba(0, 245, 255, 0.5)"
                    }}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <GraduationCap className="w-6 h-6 text-cyber-blue" />
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        edu.status === 'In Progress' 
                          ? 'bg-cyber-green/20 text-cyber-green' 
                          : 'bg-cyber-blue/20 text-cyber-blue'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-white">{edu.degree}</h3>
                    <p className="text-cyber-blue font-semibold mb-2">{edu.institution}</p>
                    <div className="flex items-center space-x-2 mb-3 text-gray-400">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{edu.duration}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <motion.div
                  className="relative z-10 w-6 h-6 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full border-4 border-dark-800"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.5 }}
                  whileHover={{ scale: 1.5 }}
                />

                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;