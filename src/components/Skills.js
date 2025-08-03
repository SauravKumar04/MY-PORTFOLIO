import React from 'react';
import { SiHtml5, SiCss3, SiJavascript, SiTailwindcss, SiReact, SiMongodb, SiNodedotjs, SiExpress } from 'react-icons/si';
import { HiCode, HiDesktopComputer, HiServer, HiCog, HiLightningBolt } from 'react-icons/hi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <HiCode className="text-2xl" />,
      skills: ['C/C++', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      title: 'Fundamentals',
      icon: <HiDesktopComputer className="text-2xl" />,
      skills: ['DSA', 'OOPs', 'OS', 'DBMS'],
      color: 'from-emerald-500 to-teal-500',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500'
    },
    {
      title: 'Frontend',
      icon: <SiReact className="text-2xl" />,
      skills: ['HTML5', 'CSS3', 'React', 'Tailwind'],
      color: 'from-violet-500 to-purple-500',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500'
    },
    {
      title: 'Backend',
      icon: <HiServer className="text-2xl" />,
      skills: ['Node.js', 'Express', 'MongoDB', 'APIs'],
      color: 'from-orange-500 to-red-500',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-500'
    },
    {
      title: 'Tools & Platforms',
      icon: <HiCog className="text-2xl" />,
      skills: ['Git', 'GitHub', 'VS Code'],
      color: 'from-pink-500 to-rose-500',
      iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500'
    }
  ];

  const technologies = [
    { icon: <SiHtml5 />, name: 'HTML5', color: 'text-orange-500', level: 95 },
    { icon: <SiCss3 />, name: 'CSS3', color: 'text-blue-500', level: 90 },
    { icon: <SiJavascript />, name: 'JavaScript', color: 'text-yellow-400', level: 88 },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: 'text-cyan-400', level: 92 },
    { icon: <SiReact />, name: 'React', color: 'text-cyan-400', level: 85 },
    { icon: <SiMongodb />, name: 'MongoDB', color: 'text-green-500', level: 80 },
    { icon: <SiNodedotjs />, name: 'Node.js', color: 'text-green-400', level: 82 },
    { icon: <SiExpress />, name: 'Express.js', color: 'text-gray-400', level: 78 }
  ];

  return (
    <section id="skills" className="min-h-screen py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-violet-500/30 backdrop-blur-sm">
            <HiLightningBolt className="text-violet-400 text-sm" />
            <span className="text-violet-300 text-sm font-medium">Technical Expertise</span>
          </div>
          
          <h2 className="text-display-2 font-display font-black text-white">
            My <span className="text-gradient-primary">Skills</span>
          </h2>
          
          <p className="text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and core competencies in modern web development
          </p>
        </div>

        {/* Skills Grid - Cleaner design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 hover:border-violet-500/30 rounded-2xl p-6 group transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${category.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-display font-bold text-white mb-4 group-hover:text-gradient-primary transition-all duration-300">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center justify-between py-2 px-3 rounded-lg bg-slate-800/30 hover:bg-slate-800/50 transition-all duration-300 border border-transparent hover:border-slate-700/50"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <span className="text-slate-300 font-medium text-sm">{skill}</span>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Proficiency - Clean grid layout */}
        <div className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-display-3 font-display font-bold text-white mb-4">
              Technology <span className="text-gradient-primary">Proficiency</span>
            </h3>
            <p className="text-slate-400 text-lg">
              My expertise level with core web development technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-slate-800/30 hover:bg-slate-800/50 border border-slate-700/30 hover:border-violet-500/30 rounded-xl p-6 transition-all duration-300 group hover:shadow-lg hover:shadow-violet-500/10 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`text-3xl ${tech.color} group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">{tech.name}</span>
                      <span className="text-slate-400 text-sm font-mono">{tech.level}%</span>
                    </div>
                  </div>
                </div>
                
                <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${tech.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;