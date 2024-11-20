import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Code, Globe, Smartphone, Brain, Database, Cloud } from 'lucide-react';

const services = [
  {
    title: 'Software Development',
    description: 'Custom software solutions tailored to your business needs',
    path: '/services/software-development',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    icon: Code
  },
  {
    title: 'Web Development',
    description: 'Modern and responsive web applications',
    path: '/services/web-development',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80',
    icon: Globe
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps',
    path: '/services/mobile-development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
    icon: Smartphone
  },
  {
    title: 'AI Development',
    description: 'Intelligent solutions powered by AI',
    path: '/services/ai-development',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    icon: Brain
  },
  {
    title: 'Blockchain Development',
    description: 'Secure and decentralized blockchain solutions',
    path: '/services/blockchain-development',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    icon: Database
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Comprehensive cloud solutions and management',
    path: '/services/cloud-infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    icon: Cloud
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  return (
    <nav className="bg-dark-100 text-light-50 shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <img src="/logo.svg" alt="TechSolutions" className="h-8 w-auto" />
                <h1 className="ml-2 text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  TechSolutions
                </h1>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className="px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200">Home</Link>
              <div className="relative group">
                <button
                  className="px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200 flex items-center"
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                >
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {showMegaMenu && (
                  <div
                    className="absolute left-1/2 -translate-x-1/2 mt-2 w-[800px] bg-white border shadow-xl rounded-xl py-6 px-8"
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                  >
                    <div className="grid grid-cols-2 gap-6">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          to={service.path}
                          className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{service.title}</h3>
                            <p className="text-sm text-gray-600">{service.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <Link to="/projects" className="px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200">Projects</Link>
              <Link to="/about" className="px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200">About</Link>
              <Link to="/contact" className="px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200">Contact</Link>
              <Link
                to="/get-quote"
                className="ml-4 px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-light-50 rounded-full hover:opacity-90 transition-opacity duration-200"
              >
                Get Quote
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-light-300 hover:text-light-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200">Services</Link>
            <Link to="/projects" className="block px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200">Projects</Link>
            <Link to="/about" className="block px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-light-300 hover:text-light-50 transition-colors duration-200">Contact</Link>
            <Link
              to="/get-quote"
              className="block px-6 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-light-50 rounded-full hover:opacity-90 transition-opacity duration-200 text-center"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;