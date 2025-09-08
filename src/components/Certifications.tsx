import { AnimatePresence, motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, X } from 'lucide-react';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certifications = [
    {
      title: 'IIRS ISRO Certificate',
      year: '2024',
      issuer: 'IIRS ISRO',
      image: '/cer1.png',
      link: 'https://www.linkedin.com/posts/rahul-bainade-919985327_geodata-cybersecurity-iirs-activity-7280641638425579521-aIdL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMSuUB06Mk8lv-SalMTtmVOlzj68rsCBs',
      description: 'Advanced certification in space technology and remote sensing applications.',
      skills: ['Remote Sensing', 'GIS', 'Satellite Technology']
    },
    {
      title: 'Udemy Cybersecurity Certificate',
      year: '2024',
      issuer: 'Udemy',
      image: '/cer2.png',
      link: 'https://www.linkedin.com/posts/rahul-bainade-919985327_cybersecurity-expertise-continuouslearning-activity-7289159488698273793-jzJ9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMSuUB06Mk8lv-SalMTtmVOlzj68rsCBs',
      description: 'Comprehensive cybersecurity training covering ethical hacking and security analysis.',
      skills: ['Ethical Hacking', 'Network Security', 'Vulnerability Assessment']
    },
    {
      title: 'Microsoft & LinkedIn Career Essentials in Cybersecurity',
      year: '2024',
      issuer: 'Microsoft & LinkedIn',
      image: '/cer3.png',
      link: 'https://www.linkedin.com/posts/rahul-bainade-919985327_certificate-of-completion-activity-7257440550293753856-34uE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMSuUB06Mk8lv-SalMTtmVOlzj68rsCBs',
      description: 'Professional certification in cybersecurity fundamentals and career development.',
      skills: ['Cybersecurity Fundamentals', 'Career Development', 'Industry Standards']
    },
    {
      title: 'Cybersecurity Analyst Job Simulation – TATA Forage',
      year: '2025',
      issuer: 'TATA Forage',
      image: '/cer4.png',
      link: 'https://www.linkedin.com/posts/rahul-bainade-919985327_cybersecurity-professionaldevelopment-jobsimulation-activity-7277192771889713153-FlxS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMSuUB06Mk8lv-SalMTtmVOlzj68rsCBs',
      description: 'Practical simulation of cybersecurity analyst role with real-world scenarios.',
      skills: ['Incident Response', 'Security Analysis', 'Threat Detection']
    },
    {
      title: 'Cyber Job Simulation – Deloitte Forage',
      year: '2024',
      issuer: 'Deloitte Forage',
      image: '/cer5.png',
      link: '',
      description: 'Professional cybersecurity simulation program with industry best practices.',
      skills: ['Risk Assessment', 'Security Consulting', 'Business Security']
    },
    {
      title: 'VaultofCodes Internship – Python Programming',
      year: '2024',
      issuer: 'VaultofCodes',
      image: '/cer6.png',
      link: 'https://www.linkedin.com/posts/rahul-bainade-919985327_intership-certificate-activity-7369260036512063489-b0Um?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFKMSuUB06Mk8lv-SalMTtmVOlzj68rsCBs',
      description: '1-month internship in Python Programming with hands-on experience in real-world projects.',
      skills: ['Python Programming', 'Project Execution', 'Problem Solving']
    },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src = `https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`;
  };

  return (
    <section id="certifications" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
              className="bg-dark-700/50 rounded-xl border border-cyber-blue/20 overflow-hidden backdrop-blur-sm hover:border-cyber-blue/50 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(0, 245, 255, 0.2)" }}
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative overflow-hidden">
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={handleImageError}
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-cyber-blue" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Award className="w-5 h-5 text-cyber-blue" />
                  <span className="px-2 py-1 bg-cyber-blue/20 text-cyber-blue text-xs font-semibold rounded-full">
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2 text-white group-hover:text-cyber-blue transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-cyber-blue font-semibold mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm line-clamp-3">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-3">
                    <Award className="w-8 h-8 text-cyber-blue" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{selectedCert.title}</h3>
                      <p className="text-cyber-blue font-semibold">{selectedCert.issuer}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedCert(null)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <a href={selectedCert.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full max-w-2xl mx-auto rounded-lg mb-6 border border-cyber-blue/20"
                    onError={handleImageError}
                  />
                </a>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <span>Completed in {selectedCert.year}</span>
                  </div>
                  
                  <p className="text-gray-300 leading-relaxed">{selectedCert.description}</p>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-cyber-green">Skills Acquired</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill: string, skillIndex: number) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-cyber-green/20 text-cyber-green rounded-full text-sm font-mono"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certifications;