import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function WhatsAppButton() {
  const phoneNumber = '+1234567890'; // Replace with your actual WhatsApp number
  const message = 'Hi! I would like to know more about your services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">Contact us on WhatsApp</span>
    </motion.a>
  );
}

export default WhatsAppButton;