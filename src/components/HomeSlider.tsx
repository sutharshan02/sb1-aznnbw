import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { motion, AnimatePresence } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    title: 'Next-Gen Software Solutions',
    subtitle: 'Transform Your Business',
    description: 'Leverage cutting-edge technology to drive innovation and growth',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    cta: 'Start Your Journey',
    link: '/services/software-development',
    color: 'from-blue-600/80 to-purple-600/80'
  },
  {
    title: 'AI-Powered Innovation',
    subtitle: 'Future-Ready Solutions',
    description: 'Harness the power of artificial intelligence to stay ahead of competition',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1920&q=80',
    cta: 'Explore AI Solutions',
    link: '/services/ai-development',
    color: 'from-emerald-600/80 to-blue-600/80'
  },
  {
    title: 'Enterprise Blockchain',
    subtitle: 'Secure & Scalable',
    description: 'Build trust and transparency with distributed ledger technology',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1920&q=80',
    cta: 'Discover Blockchain',
    link: '/services/blockchain-development',
    color: 'from-purple-600/80 to-pink-600/80'
  },
  {
    title: 'Cloud Infrastructure',
    subtitle: 'Reliable & Scalable',
    description: 'Modern cloud solutions for ultimate performance and reliability',
    image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?w=1920&q=80',
    cta: 'Scale Your Business',
    link: '/services/cloud-infrastructure',
    color: 'from-blue-600/80 to-cyan-600/80'
  }
];

const SlideContent = ({ slide, isActive }: { slide: typeof slides[0]; isActive: boolean }) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block text-lg md:text-xl mb-4 font-medium tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {slide.subtitle}
          </motion.span>
          
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {slide.title}
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {slide.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to={slide.link}
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              {slide.cta}
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function HomeSlider() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: "cubic-bezier(0.4, 0, 0.2, 1)",
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    customPaging: () => (
      <div className="w-3 h-3 mx-2 rounded-full bg-white/50 hover:bg-white/75 transition-colors duration-200" />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-8">
        <ul className="flex items-center justify-center gap-2"> {dots} </ul>
      </div>
    )
  };

  return (
    <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
      <div className="relative z-20">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-[600px] md:h-[700px] lg:h-[800px]">
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6, ease: "easeOut" }}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.color}`} />
              </motion.div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <SlideContent slide={slide} isActive={currentSlide === index} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default HomeSlider;