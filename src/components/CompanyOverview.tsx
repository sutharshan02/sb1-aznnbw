import React from 'react';
import { Shield, Users, Target, Award, Zap, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    icon: Shield,
    title: 'Proven Expertise',
    description: 'Over a decade of experience delivering cutting-edge technology solutions across industries.'
  },
  {
    icon: Users,
    title: 'Dedicated Team',
    description: '50+ skilled professionals committed to bringing your vision to life.'
  },
  {
    icon: Target,
    title: 'Client-Focused Approach',
    description: 'We prioritize understanding your unique needs and delivering tailored solutions.'
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Rigorous testing and quality control processes to ensure excellence.'
  },
  {
    icon: Zap,
    title: 'Rapid Development',
    description: 'Agile methodology for faster delivery without compromising quality.'
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance services.'
  }
];

function CompanyOverview() {
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
    <section className="py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
          >
            Why Choose TechSolutions
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            We combine technical excellence with business acumen to deliver exceptional results that drive your success
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="bg-blue-100 rounded-full p-4 inline-block mb-6">
                <feature.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CompanyOverview;