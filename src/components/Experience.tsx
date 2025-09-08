import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, Code, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experience = [
    {
      title: 'Python Programming Intern',
      company: 'Vault of Codes',
      duration: '2 Months',
      type: 'Internship',
      description: 'Worked on Python-based projects and gained hands-on experience in programming and software development practices.',
      technologies: ['Python', 'Software Development', 'Project Management'],
      achievements: [
        'Developed multiple Python applications',
        'Learned industry best practices',
        'Collaborated with development team',
        'Gained practical programming experience'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.8 }}
              className="mb-12"
            >
              <div className="bg-dark-700/50 p-8 rounded-xl border border-cyber-blue/20 backdrop-blur-sm hover:border-cyber-blue/50 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <Briefcase className="w-6 h-6 text-cyber-blue" />
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-cyber-green/20 text-cyber-green rounded-full">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-xl text-cyber-blue font-semibold mb-2">{exp.company}</p>
                    <div className="flex items-center space-x-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyber-purple flex items-center space-x-2">
                      <Code className="w-5 h-5" />
                      <span>Technologies Used</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="px-3 py-1 bg-cyber-purple/20 text-cyber-purple rounded-full text-sm font-mono"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(128, 0, 255, 0.3)" }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyber-green">Key Achievements</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          className="flex items-start space-x-2 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.6 + achIndex * 0.1, duration: 0.5 }}
                        >
                          <div className="w-2 h-2 bg-cyber-green rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 p-8 rounded-xl border border-cyber-blue/20">
            <h3 className="text-2xl font-bold mb-4 text-cyber-blue">Looking for Opportunities</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm actively seeking full-time opportunities in software development and cybersecurity. 
              Ready to contribute to innovative projects and grow with a dynamic team.
            </p>
            <motion.button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-5 h-5" />
              <span>Get In Touch</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;