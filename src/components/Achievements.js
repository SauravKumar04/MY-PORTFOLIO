import React from 'react';
import { HiCode, HiAcademicCap, HiExternalLink, HiCheckCircle } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Achievements = () => {
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
    <section id="achievements" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/6 to-pink-500/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-violet-500/6 to-purple-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
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
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Achievements
                </span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
              
              <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
                Demonstrating expertise through consistent problem-solving and continuous learning in the tech industry.
              </p>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" variants={itemVariants}>
            
            {/* DSA Problems Card */}
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
                    <HiCode className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">400+ DSA Problems</h3>
                    <p className="text-slate-400 font-medium">Solved on leading platforms</p>
                  </div>
                </div>

                {/* Platforms */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <HiCheckCircle className="text-violet-400 text-xl flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-white font-medium">GeeksforGeeks</p>
                      <p className="text-slate-400 text-sm">Comprehensive problem-solving practice</p>
                    </div>
                    <a 
                      href="https://www.geeksforgeeks.org/user/sauravkuzhb/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-400 hover:text-violet-300 transition-colors duration-300"
                    >
                      <HiExternalLink className="text-xl" />
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <HiCheckCircle className="text-purple-400 text-xl flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-white font-medium">LeetCode</p>
                      <p className="text-slate-400 text-sm">Advanced algorithmic challenges</p>
                    </div>
                    <a 
                      href="https://leetcode.com/u/saurav_kumar_2002/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                    >
                      <HiExternalLink className="text-xl" />
                    </a>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl p-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-display font-bold text-white">400+</div>
                      <div className="text-slate-400 text-sm">Problems Solved</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display font-bold text-white">100+</div>
                      <div className="text-slate-400 text-sm">Days Streak</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Certification Card */}
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
                    <HiAcademicCap className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-white">Backend Development</h3>
                    <p className="text-slate-400 font-medium">FreeCodeCamp Certification</p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <HiCheckCircle className="text-pink-400 text-xl flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-white font-medium">Backend Development & APIs</p>
                      <p className="text-slate-400 text-sm">Comprehensive backend skills certification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <HiCheckCircle className="text-violet-400 text-xl flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-white font-medium">FreeCodeCamp</p>
                      <p className="text-slate-400 text-sm">Industry-recognized certification platform</p>
                    </div>
                  </div>
                </div>

                {/* Certificate Link */}
                <div className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">View Certificate</p>
                      <p className="text-slate-400 text-sm">Verified credential</p>
                    </div>
                    <a 
                      href="https://www.freecodecamp.org/certification/sauravkumar9798/back-end-development-and-apis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-6 py-3 rounded-xl text-white font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <HiExternalLink className="text-lg relative z-10" />
                      <span className="relative z-10">View</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Additional Info */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
            <div className="bg-white/3 backdrop-blur-2xl border border-white/8 rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-slate-300 leading-relaxed font-light text-lg">
                These achievements reflect my commitment to mastering both algorithmic problem-solving and practical backend development skills. 
                Each solved problem and earned certification represents a step toward becoming a more proficient and well-rounded developer.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
