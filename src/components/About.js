import React from 'react';
import { HiDownload, HiMail, HiAcademicCap, HiCode, HiOfficeBuilding, HiStar, HiUser, HiLightningBolt } from 'react-icons/hi';
import { motion } from 'framer-motion';

const About = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.txt';
    link.download = 'Saurav_Kumar_Resume.txt';
    link.click();
  };

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
    <section id="about" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/8 to-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/4 to-purple-500/4 rounded-full blur-3xl"></div>
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
              <h1 className="text-6xl lg:text-7xl font-display font-black text-white leading-[0.9] tracking-tight">
                About{' '}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Me
                </span>
              </h1>
              
              <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div className="space-y-12" variants={itemVariants}>
            
            {/* Description Card with Profile Image */}
            <motion.div className="w-full max-w-6xl mx-auto" variants={itemVariants}>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/12 to-purple-500/12 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/4 backdrop-blur-2xl border border-white/8 rounded-3xl p-8 lg:p-12">
                  
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
                    
                    {/* Profile Image */}
                    <motion.div 
                      className="flex-shrink-0"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        {/* Animated Background Rings */}
                        <div className="absolute -inset-6 bg-gradient-to-r from-violet-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>
                        <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-violet-500/15 rounded-full blur-xl group-hover:blur-2xl transition-all duration-700 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        
                        {/* Profile Image Container */}
                        <div className="relative">
                          <motion.div 
                            className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden relative glass-image-container"
                            whileHover={{ rotateY: 5, rotateX: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            {/* Glassmorphic Frame */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/4  border border-white/15 rounded-full"></div>
                            
                            {/* Image */}
                            <img
                              src="/profile.jpeg"
                              alt="Saurav Kumar - Full Stack Developer"
                              className="w-full h-full  object-cover rounded-full"
                              style={{ imageRendering: 'high-quality',objectPosition: 'center top', }}
                            />
                            
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/8 via-transparent to-purple-500/8 rounded-full"></div>
                            
                            {/* Subtle Border Glow */}
                            <div className="absolute inset-0 rounded-full border border-white/15 shadow-2xl"></div>
                          </motion.div>
                          
                          {/* Floating Accent Elements */}
                          <motion.div 
                            className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <HiStar className="text-white text-sm" />
                          </motion.div>
                          
                          <motion.div 
                            className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl"
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                          ></motion.div>
                          
                          {/* Subtle Corner Accents */}
                          <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-violet-400 rounded-full opacity-60"></div>
                          <div className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60"></div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Description Content */}
                    <div className="flex-1 space-y-6">
                      {/* Name and Title */}
                      <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
                          <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                            Saurav Kumar
                          </span>
                        </h2>
                        <p className="text-lg lg:text-xl text-slate-300 font-medium">Full-Stack Developer</p>
                      </div>

                      <div className="space-y-6">
                        <p className="text-lg lg:text-xl text-slate-200 leading-relaxed font-light">
                          Currently pursuing engineering at{' '}
                          <span className="text-violet-300 font-medium">NIT Jamshedpur</span>{' '}
                          with a passion for building robust, scalable applications that solve real-world challenges.
                        </p>
                        
                        <p className="text-base lg:text-lg text-slate-300 leading-relaxed font-light">
                          Specializing in{' '}
                          <span className="text-violet-300 font-medium">JavaScript, React, Node.js, and MongoDB</span>
                          , I create performant, user-centric solutions using modern design principles and cutting-edge technologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Profile Details Cards */}
            <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-4xl mx-auto" variants={itemVariants}>
              
              {/* College Card */}
              <motion.div 
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/12 to-purple-500/12 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/4 backdrop-blur-2xl border border-white/8 rounded-3xl p-8">
                  
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <HiOfficeBuilding className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">NIT Jamshedpur</h3>
                      <p className="text-slate-400 font-medium">Prestigious Engineering Institute</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <HiAcademicCap className="text-violet-400 text-xl flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-white font-medium">Bachelor of Technology</p>
                        <p className="text-slate-400 text-sm">Computer Science & Engineering</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <HiLightningBolt className="text-purple-400 text-xl flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-white font-medium">Active Student</p>
                        <p className="text-slate-400 text-sm">Pursuing excellence in tech education</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl p-4">
                    <div className="text-center">
                      <div className="text-3xl font-display font-bold text-white mb-1">8.37</div>
                      <div className="text-slate-400 text-sm">Current CGPA</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Projects & Skills Card */}
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
                      <HiCode className="text-white text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white">Development Portfolio</h3>
                      <p className="text-slate-400 font-medium">Full-Stack Projects & Skills</p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <HiUser className="text-pink-400 text-xl flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-white font-medium">5+ Projects Completed</p>
                        <p className="text-slate-400 text-sm">Real-world applications built</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <HiLightningBolt className="text-violet-400 text-xl flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-white font-medium">Modern Tech Stack</p>
                        <p className="text-slate-400 text-sm">React, Node.js, MongoDB, JavaScript</p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl p-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-display font-bold text-white">5+</div>
                        <div className="text-slate-400 text-sm">Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-display font-bold text-white">100%</div>
                        <div className="text-slate-400 text-sm">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center" variants={itemVariants}>
              <motion.button
                onClick={downloadResume}
                className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-white/30 px-8 py-4 rounded-2xl text-white font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <HiDownload className="text-xl group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.button>
              
              <motion.button
                onClick={scrollToContact}
                className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 px-8 py-4 rounded-2xl text-white font-semibold text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-violet-500/25 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <HiMail className="text-xl group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Let's Connect</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;