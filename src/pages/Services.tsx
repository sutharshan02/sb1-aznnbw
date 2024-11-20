import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Globe, Smartphone, Brain, Database } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    link: '/services/software-development'
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Modern and responsive web applications',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    link: '/services/web-development'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    link: '/services/mobile-development'
  },
  {
    icon: Brain,
    title: 'AI Development',
    description: 'Intelligent solutions powered by AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    link: '/services/ai-development'
  },
  {
    icon: Database,
    title: 'Blockchain Development',
    description: 'Secure and decentralized blockchain solutions',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    link: '/services/blockchain-development'
  }
];

function Services() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive technology solutions to drive your business forward
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="aspect-video relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <service.icon className="absolute bottom-4 right-4 h-8 w-8 text-white" />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <span className="text-blue-600 font-semibold group-hover:text-blue-700">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;