import React from 'react';
import { HiMail, HiPhone, HiLocationMarker, HiArrowRight, HiExternalLink } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const contactInfo = [
    {
      icon: <HiMail className="text-2xl" />,
      title: 'Email',
      value: '2023ugee038@nitjsr.ac.in',
      href: 'mailto:2023ugee038@nitjsr.ac.in',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: <HiPhone className="text-2xl" />,
      title: 'Phone',
      value: '+91 1234567890',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <HiLocationMarker className="text-2xl" />,
      title: 'Location',
      value: 'Jamshedpur, India',
      href: '#',
      color: 'from-pink-500 to-violet-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SauravKumar04',
      icon: <FaGithub className="text-2xl" />,
      description: 'View my projects and contributions',
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saurav-kumar-32b61128a/',
      icon: <FaLinkedin className="text-2xl" />,
      description: 'Connect with me professionally',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Email',
      url: 'mailto:2023ugee038@nitjsr.ac.in',
      icon: <HiMail className="text-2xl" />,
      description: 'Send me a direct message',
      color: 'from-violet-600 to-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/6 to-purple-500/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500/4 to-violet-500/4 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* Header */}
          <motion.div className="text-center space-y-8" variants={itemVariants}>
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-display font-black text-white leading-tight tracking-tight">
                Get In <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Touch</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
              
              <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
                Ready to collaborate on your next project? Let's discuss how we can bring your ideas to life.
              </p>
            </div>
          </motion.div>

          {/* Contact Content */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" variants={itemVariants}>
            
            {/* Contact Information */}
            <motion.div className="space-y-8" variants={itemVariants}>
              
              {/* Contact Info Card */}
              <motion.div 
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/12 to-purple-500/12 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/4 backdrop-blur-2xl border border-white/8 rounded-3xl p-8">
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <HiMail className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">Contact Information</h3>
                      <p className="text-slate-400 font-medium">Get in touch with me</p>
                    </div>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div
                        key={info.title}
                        className="flex items-center gap-4 p-4 bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl hover:bg-white/5 transition-all duration-300 group/item"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white group-hover/item:scale-110 transition-transform duration-300`}>
                          {info.icon}
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="text-white font-semibold text-lg">{info.title}</h4>
                          {info.href !== '#' ? (
                            <a
                              href={info.href}
                              className="text-slate-300 hover:text-violet-300 transition-all duration-300 font-medium text-base group-hover/item:translate-x-1"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-slate-300 font-medium text-base">{info.value}</p>
                          )}
                        </div>
                        
                        {info.href !== '#' && (
                          <HiArrowRight className="text-slate-400 group-hover/item:text-violet-400 group-hover/item:translate-x-1 transition-all duration-300" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Quick Stats Card */}
              <motion.div 
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/12 to-pink-500/12 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/4 backdrop-blur-2xl border border-white/8 rounded-3xl p-8">
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <HiArrowRight className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">Quick Stats</h3>
                      <p className="text-slate-400 font-medium">Response metrics</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl">
                      <div className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-display">24h</div>
                      <div className="text-slate-400 text-sm">Response Time</div>
                    </div>
                    <div className="text-center p-4 bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-display">Always</div>
                      <div className="text-slate-400 text-sm">Ready to Collaborate</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links & CTA */}
            <motion.div className="space-y-8" variants={itemVariants}>
              
              {/* Social Links Card */}
              <motion.div 
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/12 to-violet-500/12 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/4 backdrop-blur-2xl border border-white/8 rounded-3xl p-8">
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-2xl flex items-center justify-center">
                      <HiExternalLink className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">Social Media</h3>
                      <p className="text-slate-400 font-medium">Connect with me online</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl hover:bg-white/5 transition-all duration-300 group/item"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.1,
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white group-hover/item:scale-110 transition-transform duration-300 shadow-lg`}>
                            {social.icon}
                          </div>
                          
                          <div className="flex-1">
                            <h4 className="text-white font-semibold text-lg">{social.name}</h4>
                            <p className="text-slate-400 text-sm">{social.description}</p>
                          </div>
                          
                          <HiArrowRight className="text-slate-400 group-hover/item:text-violet-400 group-hover/item:translate-x-1 transition-all duration-300" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Call to Action Card */}
              <motion.div 
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/12 to-purple-500/12 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/4 backdrop-blur-2xl border border-white/8 rounded-3xl p-8 text-center">
                  
                  <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <HiMail className="text-2xl text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-display font-bold text-white mb-4">
                    Ready to work together?
                  </h4>
                  
                  <p className="text-slate-400 leading-relaxed mb-8">
                    Drop me a message and let's discuss how we can bring your ideas to life with cutting-edge technology and exceptional design.
                  </p>
                  
                  <a
                    href="mailto:2023ugee038@nitjsr.ac.in"
                    className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-violet-500/25 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <HiMail className="text-xl group-hover:scale-110 transition-transform duration-300 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
