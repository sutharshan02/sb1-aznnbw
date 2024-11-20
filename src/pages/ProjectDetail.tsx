import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle, Trophy, AlertCircle } from 'lucide-react';
import * as Icons from 'lucide-react';
import projectsData from '../data/projects.json';

function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you're looking for doesn't exist.</p>
          <Link
            to="/projects"
            className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[project.icon as keyof typeof Icons];

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
        <title>{`${project.title} - TechSolutions`}</title>
        <meta name="description" content={project.shortDescription} />
      </Helmet>

      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-dark-100">
          <div className="absolute inset-0">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover opacity-30"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-100 to-transparent" />
          <div className="relative h-full max-w-7xl mx-auto px-4 flex items-end pb-20">
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4"
              >
                <span className="px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                  {project.category}
                </span>
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {project.title}
              </motion.h1>
              <motion.div
                className="flex flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-white rounded-full text-sm backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Description */}
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="prose max-w-none">
                    {project.fullDescription.map((paragraph, index) => (
                      <p key={index} className="text-gray-600 mb-4 text-lg leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>

                {/* Screenshots */}
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-8 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Screenshots</h2>
                  <div className="grid gap-6">
                    {project.screenshots.map((screenshot, index) => (
                      <motion.div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-md"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                      >
                        <img
                          src={screenshot}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="w-full h-auto"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Challenges */}
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges & Solutions</h2>
                  <div className="space-y-6">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Challenge {index + 1}</h3>
                        <p className="text-gray-600">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Features */}
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
                  <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Results */}
                <motion.div
                  className="bg-white rounded-xl shadow-lg p-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Results Achieved</h2>
                  <ul className="space-y-4">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <Trophy className="h-6 w-6 text-primary-500 mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* CTA */}
                <motion.div
                  className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg p-8 text-white"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-2xl font-bold mb-4">Interested in a Similar Project?</h2>
                  <p className="mb-6">Let's discuss how we can help you achieve similar results.</p>
                  <Link
                    to={`/get-quote?project=${project.id}`}
                    className="group inline-flex items-center justify-center w-full px-6 py-3 bg-white text-primary-500 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
            <Link
              to="/projects"
              className="inline-flex items-center text-gray-600 hover:text-primary-500 transition-colors duration-200"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Projects
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default ProjectDetail;