import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, MessageCircle } from 'lucide-react';
import { theme } from '../theme';

function Footer() {
  return (
    <footer className="bg-dark-100 text-light-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.svg" alt="TechSolutions" className="h-8 w-auto" />
              <h2 className="ml-2 text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                TechSolutions
              </h2>
            </div>
            <p className="text-light-300">
              Empowering businesses through innovative technology solutions. Your trusted partner in digital transformation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-50">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-light-300 hover:text-light-50 transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-light-300 hover:text-light-50 transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-light-300 hover:text-light-50 transition-colors duration-200">Services</Link></li>
              <li><Link to="/contact" className="text-light-300 hover:text-light-50 transition-colors duration-200">Contact</Link></li>
              <li><Link to="/get-quote" className="text-light-300 hover:text-light-50 transition-colors duration-200">Get Quote</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-50">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/software-development" className="text-light-300 hover:text-light-50 transition-colors duration-200">Software Development</Link></li>
              <li><Link to="/services/web-development" className="text-light-300 hover:text-light-50 transition-colors duration-200">Web Development</Link></li>
              <li><Link to="/services/mobile-development" className="text-light-300 hover:text-light-50 transition-colors duration-200">Mobile Development</Link></li>
              <li><Link to="/services/ai-development" className="text-light-300 hover:text-light-50 transition-colors duration-200">AI Development</Link></li>
              <li><Link to="/services/blockchain-development" className="text-light-300 hover:text-light-50 transition-colors duration-200">Blockchain Development</Link></li>
              <li><Link to="/services/cloud-infrastructure" className="text-light-300 hover:text-light-50 transition-colors duration-200">Cloud Infrastructure</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-light-50">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary-500" />
                <a href="mailto:info@techsolutions.com" className="text-light-300 hover:text-light-50 transition-colors duration-200">info@techsolutions.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary-500" />
                <a href="tel:+1234567890" className="text-light-300 hover:text-light-50 transition-colors duration-200">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <MessageCircle className="h-5 w-5 mr-2 text-secondary-500" />
                <a 
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-300 hover:text-light-50 transition-colors duration-200"
                >
                  WhatsApp: +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                <span className="text-light-300">123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
            </ul>
            
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-light-300 hover:text-primary-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-light-300 hover:text-primary-500 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-light-300 hover:text-primary-500 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-light-300 hover:text-primary-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-dark-300 text-center text-light-300">
          <p>&copy; {new Date().getFullYear()} TechSolutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;