import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HomeSlider from '../components/HomeSlider';
import CompanyOverview from '../components/CompanyOverview';
import ClientTestimonials from '../components/ClientTestimonials';
import { Code, Globe, Smartphone, Brain, Database, Cloud, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    link: '/services/software-development'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern and responsive web applications',
    link: '/services/web-development'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps',
    link: '/services/mobile-development'
  },
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Intelligent solutions powered by AI',
    link: '/services/ai-development'
  },
  {
    icon: Database,
    title: 'Blockchain Development',
    description: 'Secure and decentralized blockchain solutions',
    link: '/services/blockchain-development'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Comprehensive cloud solutions and management',
    link: '/services/cloud-infrastructure'
  }
];

function Home() {
  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const [servicesRef, servicesInView] = useInView({
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div>
      <HomeSlider />
      
      {/* About Company Section */}
      <section className="py-20" ref={aboutRef}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={containerVariants}>
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                Transforming Businesses Through Technology
              </motion.h2>
              <motion.div
                className="space-y-4 text-gray-600"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>
                  TechSolutions is a leading technology company specializing in innovative software solutions that help businesses thrive in the digital age. With over a decade of experience, we've successfully delivered hundreds of projects across various industries.
                </motion.p>
                <motion.p variants={itemVariants}>
                  Our team of expert developers, designers, and consultants works tirelessly to transform your ideas into powerful, scalable solutions that drive growth and efficiency.
                </motion.p>
              </motion.div>
              <motion.div
                className="mt-8 flex space-x-4"
                variants={itemVariants}
              >
                <Link
                  to="/about"
                  className="group inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              variants={imageVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-6"
                variants={itemVariants}
                custom={1}
              >
                <div className="text-4xl font-bold text-blue-600 mb-1">10+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-gray-50" ref={servicesRef}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.h2
              className="text-4xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Our Services
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              We offer comprehensive technology solutions to help your business thrive in the digital age
            </motion.p>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate={servicesInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <Link
                  to={service.link}
                  className="block bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-200"
                >
                  <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <span className="text-blue-600 font-semibold group-hover:translate-x-1 transition-transform duration-200 inline-flex items-center">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <CompanyOverview />
      
      {/* Clients & Testimonials */}
      <ClientTestimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals
            </p>
            <Link
              to="/get-quote"
              className="group inline-block px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Get Your Free Quote
              <ArrowRight className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;