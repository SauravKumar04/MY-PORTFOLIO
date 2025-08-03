import React from 'react';
import { HiHeart, HiArrowUp, HiMail, HiCode, HiStar } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/SauravKumar04',
      icon: <FaGithub className="text-xl" />,
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saurav-kumar-32b61128a/',
      icon: <FaLinkedin className="text-xl" />,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:2023ugee038@nitjsr.ac.in',
      icon: <HiMail className="text-xl" />,
      color: 'hover:text-violet-400'
    }
  ];

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <footer className="relative py-20 px-6 lg:px-8 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/6 to-purple-500/6 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-sm"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          
          {/* Main Footer Content */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16" variants={itemVariants}>
            
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/3 backdrop-blur-2xl border border-white/8 rounded-3xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl font-display font-bold text-white mb-4">
                      Saurav<span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">.</span>
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-lg">
                      Full-Stack Developer passionate about creating innovative digital solutions with modern technologies and exceptional user experiences.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-slate-300 text-sm font-medium">Available for new opportunities</span>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center gap-4 pt-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-white/20`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white/3 backdrop-blur-2xl border border-white/8 rounded-3xl p-8">
              <h4 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
                <HiStar className="text-violet-400" />
                Navigation
              </h4>
              <div className="space-y-4">
                {quickLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-slate-300 hover:text-white transition-all duration-300 text-left hover:translate-x-2 transform font-medium"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/3 backdrop-blur-2xl border border-white/8 rounded-3xl p-8">
              <h4 className="text-xl font-display font-semibold text-white mb-6 flex items-center gap-2">
                <HiMail className="text-violet-400" />
                Get In Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:2023ugee038@nitjsr.ac.in"
                  className="block text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform font-medium flex items-center gap-2"
                >
                  <HiMail className="text-sm" />
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/saurav-kumar-32b61128a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform font-medium flex items-center gap-2"
                >
                  <FaLinkedin className="text-sm" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/SauravKumar04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-300 hover:text-white transition-all duration-300 hover:translate-x-2 transform font-medium flex items-center gap-2"
                >
                  <FaGithub className="text-sm" />
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div className="border-t border-white/10 pt-8" variants={itemVariants}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-slate-300">
                <span>© {currentYear} Designed & built with</span>
                <HiHeart className="text-red-400 animate-pulse" />
                <span>by Saurav Kumar</span>
              </div>

              {/* Tech Stack */}
              <div className="text-slate-300 text-sm flex items-center gap-2">
                <HiCode className="text-violet-400" />
                <span>Powered by React, Tailwind CSS & </span>
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent font-semibold">Innovation</span>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-white/20 p-4 rounded-2xl text-white hover:scale-110 transition-all duration-300"
                title="Back to top"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiArrowUp className="text-lg group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Additional Info */}
            <div className="text-center mt-8 pt-8 border-t border-white/5">
              <p className="text-slate-400 text-sm">
                All rights reserved. Built with modern web technologies for optimal performance and accessibility.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;