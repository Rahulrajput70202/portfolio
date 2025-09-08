import { motion } from 'framer-motion';
import { Code, Database, ExternalLink, Github, Shield } from 'lucide-react';
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Auto Backup System',
      description: 'Desktop application for automated backups with email alerts. Features scheduled backups, file compression, and notification system.',
      technologies: ['Python', 'Tkinter', 'Email API', 'File System'],
      github: 'https://github.com/Rahulrajput70202/Auto-backup',
      linkedin: 'https://www.linkedin.com/posts/rahul-bainade-919985327_python-tkinter-project-activity-7367574905182119936-R0ls',
      icon: Database,
      color: 'cyber-blue',
      features: [
        'Automated backup scheduling',
        'Email notification system',
        'File compression',
        'User-friendly GUI'
      ]
    },
    {
      title: 'Privacy Leak Analyzer',
      description: 'APK privacy risk analyzer with dashboard. Analyzes Android applications for potential privacy vulnerabilities and data leaks.',
      technologies: ['Python', 'Androguard', 'Security Analysis', 'Dashboard'],
      github: 'https://github.com/Rahulrajput70202/-Privacy-Leak-Analyzer-',
      linkedin: 'https://www.linkedin.com/posts/rahul-bainade-919985327_cybersecurity-androidsecurity-pythonprojects-activity-7353117306501107713-Wv_U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMSuUB06Mk8lv-SalMTtmVOlzj68rsCBs',
      icon: Shield,
      color: 'cyber-purple',
      features: [
        'APK static analysis',
        'Privacy risk assessment',
        'Interactive dashboard',
        'Vulnerability reporting'
      ]
    },
    {
      title: 'Store Management System',
      description: 'Java Swing application for store inventory and billing management. Complete solution for retail store operations.',
      technologies: ['Java', 'Swing', 'SQLite', 'GUI Development'],
      github: 'https://github.com/Rahulrajput70202/java-store-management-',
      linkedin: 'https://www.linkedin.com/posts/rahul-bainade-919985327_java-storemanagement-mysql-activity-7349803616926318592-yk1z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMSuUB06Mk8lv-SalMTtmVOlzj68rsCBs',
      icon: Code,
      color: 'cyber-green',
      features: [
        'Inventory management',
        'Billing system',
        'Customer database',
        'Sales reporting'
      ]
    },
    {
      title: 'Restaurant Name & Menu Generator',
      description: 'AI-powered web app that generates unique restaurant names, catchy taglines, and full menus using Python, Streamlit, and Google Gemini AI.',
      technologies: ['Python', 'Streamlit', 'Google Gemini AI', 'Web Development'],
      github: 'https://github.com/Rahulrajput70202/restaurant-project',
      linkedin: 'https://www.linkedin.com/posts/rahul-bainade-919985327_python-streamlit-googlegemini-activity-7369372443251085313-boaX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMSuUB06Mk8lv-SalMTtmVOlzj68rsCBs',
      image: '/project-restaurant.png',
      icon: Code,
      color: 'cyber-blue',
      features: [
        'AI-generated restaurant names',
        'Dynamic menu creation',
        'Country & style selection',
        'Download menu functionality'
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              className="bg-dark-700/50 rounded-xl border border-cyber-blue/20 overflow-hidden backdrop-blur-sm hover:border-cyber-blue/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 245, 255, 0.2)" }}
            >
              {project.image && (
                <div className="relative overflow-hidden">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <motion.div
                    className={`p-3 rounded-lg bg-${project.color}/20`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <project.icon className={`w-6 h-6 text-${project.color}`} />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyber-blue transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-cyber-green">Key Features</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-cyber-green rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3 text-cyber-purple">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-cyber-purple/20 text-cyber-purple rounded text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                  {project.linkedin && (
                    <motion.a
                      href={project.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-cyber-green to-cyber-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Post</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Want to see more of my work?</p>
          <motion.a
            href="https://github.com/Rahulrajput70202"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-cyber-blue text-cyber-blue font-semibold rounded-lg hover:bg-cyber-blue hover:text-dark-900 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;