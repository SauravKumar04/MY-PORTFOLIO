import React from 'react';
import { HiExternalLink, HiCode, HiStar, HiEye, HiCalendar } from 'react-icons/hi';
import { SiJavascript, SiReact, SiNodedotjs, SiExpress, SiMongodb } from 'react-icons/si';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'InvoX - NextGen Invoicing',
      subtitle: 'Full-Stack MERN Application',
      description: 'A comprehensive invoicing platform featuring secure OTP-based authentication, dynamic PDF generation, integrated payment processing (UPI, Stripe, PayPal, Crypto), real-time analytics dashboard, and automated email notifications for seamless business operations.',
      features: ['OTP Authentication', 'PDF Generation', 'Payment Integration', 'Real-time Analytics', 'Email Automation'],
      techStack: [
        { name: 'JavaScript', icon: <SiJavascript />, color: 'bg-gradient-to-r from-yellow-400 to-yellow-500' },
        { name: 'React', icon: <SiReact />, color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-gradient-to-r from-green-400 to-green-500' },
        { name: 'Express', icon: <SiExpress />, color: 'bg-gradient-to-r from-gray-600 to-gray-700' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-gradient-to-r from-green-500 to-green-600' },
        { name: 'Stripe', icon: <HiCode />, color: 'bg-gradient-to-r from-purple-500 to-purple-600' }
      ],
      github: 'https://github.com/SauravKumar04',
      live: 'https://invox-invoicing.netlify.app/',
      gradient: 'from-blue-600 to-purple-600',
      status: 'Live',
      date: 'June 2025'
    },
    {
      title: 'medCare - Doctor Appointment System',
      subtitle: 'Healthcare Management Platform',
      description: 'A sophisticated medical appointment platform with multi-role authentication (patients, doctors, admins), advanced doctor search with specialty filtering, integrated Razorpay payment gateway, real-time appointment management, and comprehensive admin dashboard.',
      features: ['Multi-role Auth', 'Doctor Search', 'Payment Gateway', 'Appointment Management', 'Admin Dashboard'],
      techStack: [
        { name: 'JavaScript', icon: <SiJavascript />, color: 'bg-gradient-to-r from-yellow-400 to-yellow-500' },
        { name: 'React', icon: <SiReact />, color: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
        { name: 'Node.js', icon: <SiNodedotjs />, color: 'bg-gradient-to-r from-green-400 to-green-500' },
        { name: 'Express', icon: <SiExpress />, color: 'bg-gradient-to-r from-gray-600 to-gray-700' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-gradient-to-r from-green-500 to-green-600' },
        { name: 'Razorpay', icon: <HiCode />, color: 'bg-gradient-to-r from-blue-500 to-blue-600' }
      ],
      github: 'https://github.com/SauravKumar04',
      live: 'https://medcare-frontend.netlify.app/',
      gradient: 'from-green-600 to-teal-600',
      status: 'Live',
      date: 'July 2025'
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
    <section id="projects" className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6 lg:px-8 relative overflow-hidden">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-violet-500/30 backdrop-blur-sm">
                <HiStar className="text-violet-400 text-sm" />
                <span className="text-violet-300 text-sm font-medium">Featured Work</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-display font-black text-white leading-tight tracking-tight">
                My <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 rounded-full mx-auto"></div>
              
              <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
                Showcasing my latest work and technical achievements in full-stack development
              </p>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8" variants={itemVariants}>
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="group relative"
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/12 to-purple-500/12 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-white/4 backdrop-blur-2xl border border-white/8 rounded-3xl p-8">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-xs font-semibold`}>
                        Full Stack
                      </div>
                      <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                        {project.status}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                      <HiCalendar className="text-sm" />
                      <span className="font-mono">{project.date}</span>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="mb-8">
                    <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-2 group-hover:text-gradient-primary transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-violet-300 font-medium mb-4">{project.subtitle}</p>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-white/5 text-slate-300 text-sm rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <div
                          key={tech.name}
                          className={`${tech.color} text-white px-3 py-2 rounded-xl text-sm font-medium flex items-center gap-2 badge-tech shadow-lg`}
                        >
                          <span className="text-xs">{tech.icon}</span>
                          {tech.name}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-white/5 backdrop-blur-2xl border border-white/20 hover:border-white/30 flex-1 px-6 py-3 rounded-2xl text-white font-semibold text-sm flex items-center justify-center gap-3 transition-all duration-300 hover:bg-white/10 hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <HiCode className="text-lg group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                      <span className="relative z-10">View Code</span>
                    </a>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 flex-1 px-6 py-3 rounded-2xl text-white font-semibold text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-2xl hover:shadow-violet-500/25 hover:scale-105"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <HiExternalLink className="text-lg group-hover:scale-110 transition-transform duration-300 relative z-10" />
                      <span className="relative z-10">Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div className="text-center space-y-6" variants={itemVariants}>
            <div className="bg-white/4 backdrop-blur-2xl border border-white/8 rounded-3xl p-12 max-w-4xl mx-auto">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HiEye className="text-2xl text-white" />
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white">
                  Want to see <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">more</span>?
                </h3>
                
                <p className="text-slate-400 text-lg leading-relaxed">
                  Explore my complete portfolio of projects, experiments, and open-source contributions on GitHub.
                </p>
                
                <a
                  href="https://github.com/SauravKumar04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 shadow-2xl hover:shadow-violet-500/25 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <HiCode className="text-xl group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                  <span className="relative z-10">View All Projects</span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;