import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Code, Globe, Smartphone, Brain, Database, Cloud, CheckCircle, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

const servicesData = {
  'software-development': {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1605379399642-870262d3d051?w=800&q=80',
      'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?w=800&q=80'
    ],
    longDescription: [
      'Our software development services deliver cutting-edge solutions that transform businesses. We combine technical expertise with industry knowledge to create custom applications that drive efficiency and growth.',
      'From enterprise-level systems to specialized tools, we handle the complete software development lifecycle. Our agile approach ensures transparent communication and rapid delivery of value.'
    ],
    features: [
      'Custom Enterprise Software',
      'Cloud-based Solutions',
      'Legacy System Modernization',
      'API Development & Integration',
      'Quality Assurance & Testing'
    ],
    benefits: [
      'Increased Operational Efficiency',
      'Reduced Costs',
      'Improved Scalability',
      'Enhanced Security',
      'Better User Experience'
    ]
  },
  'web-development': {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern and responsive web applications',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&q=80'
    ],
    longDescription: [
      'We create powerful, responsive web applications that deliver exceptional user experiences. Our web development team combines creative design with technical excellence to build solutions that stand out.',
      'Using the latest technologies and best practices, we ensure your web presence is fast, secure, and scalable. From e-commerce platforms to complex web applications, we build solutions that drive results.'
    ],
    features: [
      'Responsive Web Design',
      'E-commerce Solutions',
      'Content Management Systems',
      'Progressive Web Apps',
      'Web Portal Development'
    ],
    benefits: [
      'Global Reach',
      '24/7 Accessibility',
      'Improved Customer Engagement',
      'Better Brand Visibility',
      'Increased Sales'
    ]
  },
  'mobile-development': {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
      'https://images.unsplash.com/photo-1596742578443-7682ef7b7c1d?w=800&q=80'
    ],
    longDescription: [
      'Our mobile development expertise spans iOS, Android, and cross-platform solutions. We create intuitive, high-performance apps that users love and businesses rely on.',
      'From concept to deployment, we handle every aspect of mobile app development, ensuring your app stands out in the crowded marketplace while delivering real value to users.'
    ],
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-platform Solutions',
      'Mobile UI/UX Design',
      'App Store Optimization'
    ],
    benefits: [
      'Wider Market Reach',
      'Enhanced User Experience',
      'Offline Functionality',
      'Push Notifications',
      'Mobile-First Approach'
    ]
  },
  'ai-development': {
    icon: Brain,
    title: 'AI Development',
    description: 'Intelligent solutions powered by AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&q=80'
    ],
    longDescription: [
      'Our AI development services help businesses harness the power of artificial intelligence and machine learning. We build intelligent systems that automate processes, predict outcomes, and provide valuable insights.',
      'From natural language processing to computer vision, we implement AI solutions that solve complex business challenges and create competitive advantages.'
    ],
    features: [
      'Machine Learning Models',
      'Natural Language Processing',
      'Computer Vision',
      'Predictive Analytics',
      'AI Chatbots'
    ],
    benefits: [
      'Automated Decision Making',
      'Improved Accuracy',
      'Pattern Recognition',
      'Reduced Human Error',
      'Scalable Solutions'
    ]
  },
  'blockchain-development': {
    icon: Database,
    title: 'Blockchain Development',
    description: 'Secure and decentralized blockchain solutions',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1644143379190-08a5f055de1d?w=800&q=80',
      'https://images.unsplash.com/photo-1642104704074-907c0698b98d?w=800&q=80'
    ],
    longDescription: [
      'We specialize in developing secure, scalable blockchain solutions that revolutionize business processes. Our blockchain expertise spans multiple platforms and protocols, enabling us to build solutions that ensure transparency and trust.',
      'From smart contracts to decentralized applications, we help businesses leverage blockchain technology to create new opportunities and enhance existing operations.'
    ],
    features: [
      'Smart Contract Development',
      'DApp Development',
      'Tokenization Solutions',
      'Blockchain Integration',
      'Cryptocurrency Development'
    ],
    benefits: [
      'Enhanced Security',
      'Transparency',
      'Decentralization',
      'Immutable Records',
      'Reduced Costs'
    ]
  },
  'cloud-infrastructure': {
    icon: Cloud,
    title: 'Cloud Infrastructure Management',
    description: 'Comprehensive cloud solutions and infrastructure management',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80',
    detailImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
      'https://images.unsplash.com/photo-1558494950-0c531bf28cdc?w=800&q=80'
    ],
    longDescription: [
      'Our cloud infrastructure management services help businesses build and maintain robust, scalable cloud environments. We provide end-to-end solutions for cloud migration, optimization, and management.',
      'From architecture design to security implementation, we ensure your cloud infrastructure is reliable, secure, and cost-effective.'
    ],
    features: [
      'Cloud Architecture Design',
      'Server Management & Monitoring',
      'Security Implementation',
      'Backup & Disaster Recovery',
      'Performance Optimization'
    ],
    benefits: [
      'Improved Reliability',
      'Enhanced Security',
      'Cost Optimization',
      'Scalable Infrastructure',
      '24/7 Monitoring'
    ]
  }
};

function ServiceDetail() {
  const { service } = useParams();
  const serviceInfo = servicesData[service as keyof typeof servicesData];

  if (!serviceInfo) {
    return <div>Service not found</div>;
  }

  const ServiceIcon = serviceInfo.icon;

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
        <title>{`${serviceInfo.title} - TechSolutions`}</title>
        <meta name="description" content={serviceInfo.description} />
        <meta name="keywords" content={`${serviceInfo.title.toLowerCase()}, technology solutions, IT services`} />
      </Helmet>

      <div className="bg-gray-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-blue-600">
          <div className="absolute inset-0">
            <img
              src={serviceInfo.image}
              alt={serviceInfo.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-blue-600 mix-blend-multiply" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div variants={itemVariants}>
                <ServiceIcon className="h-16 w-16 text-white mx-auto mb-6" />
              </motion.div>
              <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                {serviceInfo.title}
              </motion.h1>
              <motion.p
                className="text-xl text-blue-100 max-w-3xl mx-auto"
                variants={itemVariants}
              >
                {serviceInfo.description}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Description Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12 items-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={containerVariants}>
                <div className="space-y-6">
                  {serviceInfo.longDescription.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      className="text-lg text-gray-600"
                      variants={itemVariants}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {serviceInfo.detailImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-lg"
                    variants={itemVariants}
                  >
                    <img
                      src={image}
                      alt={`${serviceInfo.title} detail ${index + 1}`}
                      className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="grid md:grid-cols-2 gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div variants={containerVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features</h2>
                <div className="space-y-6">
                  {serviceInfo.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <CheckCircle className="h-6 w-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-lg text-gray-900">{feature}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={containerVariants}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits</h2>
                <div className="space-y-6">
                  {serviceInfo.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      variants={itemVariants}
                    >
                      <CheckCircle className="h-6 w-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-lg text-gray-900">{benefit}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                Let's discuss your project and see how our {serviceInfo.title.toLowerCase()} services can help you achieve your goals
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
    </>
  );
}

export default ServiceDetail;