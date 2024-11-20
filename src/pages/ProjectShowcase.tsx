import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import projectsData from '../data/projects.json';

function ProjectShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Project Showcase - TechSolutions</title>
        <meta name="description" content="Explore our portfolio of successful projects across various industries." />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-dark-100">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
              alt="Project Showcase"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Success Stories
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Explore our portfolio of innovative solutions that have transformed businesses across industries
            </motion.p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20" ref={ref}>
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {projectsData.projects.map((project) => {
                const IconComponent = Icons[project.icon as keyof typeof Icons];
                
                return (
                  <motion.div
                    key={project.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <div className="aspect-video relative">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-white/90 text-gray-900 rounded-full text-sm font-medium">
                          {project.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-lg">
                        {IconComponent && <IconComponent className="h-6 w-6 text-primary-500" />}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{project.title}</h3>
                      
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <Link
                        to={`/projects/${project.id}`}
                        className="group inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-200"
                      >
                        View Project
                        <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProjectShowcase;