import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png' },
  { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png' },
  { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png' },
  { name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png' },
  { name: 'Intel', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/200px-Intel_logo_%282006-2020%29.svg.png' },
  { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/200px-Oracle_logo.svg.png' },
  { name: 'Salesforce', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/200px-Salesforce.com_logo.svg.png' },
  { name: 'Adobe', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Adobe_Corporate_Logo.svg/200px-Adobe_Corporate_Logo.svg.png' }
];

const testimonials = [
  {
    name: 'John Smith',
    position: 'CEO',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&q=80',
    content: "TechSolutions transformed our business with their innovative software solutions. Their team's expertise and dedication to quality are unmatched.",
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    position: 'CTO',
    company: 'InnovateTech',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&q=80',
    content: 'Working with TechSolutions was a game-changer for our company. Their AI solutions helped us achieve unprecedented efficiency.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    position: 'Director of Engineering',
    company: 'FutureScale',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80',
    content: 'The mobile app developed by TechSolutions exceeded our expectations. Their attention to detail and user experience is remarkable.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    position: 'Product Manager',
    company: 'GlobalTech',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&q=80',
    content: 'Their blockchain solutions have revolutionized our supply chain management. Exceptional work!',
    rating: 5
  },
  {
    name: 'David Kim',
    position: 'Head of Innovation',
    company: 'FutureWorks',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&q=80',
    content: 'The AI implementation by TechSolutions has significantly improved our data analysis capabilities.',
    rating: 5
  },
  {
    name: 'Lisa Thompson',
    position: 'Operations Director',
    company: 'SmartSys',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&q=80',
    content: 'Their cloud infrastructure management has made our systems more reliable and secure.',
    rating: 5
  },
  {
    name: 'Robert Martinez',
    position: 'Technical Lead',
    company: 'CloudNine',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&q=80',
    content: 'Outstanding web development work. Our new platform has received fantastic user feedback.',
    rating: 5
  },
  {
    name: 'Anna White',
    position: 'Digital Director',
    company: 'DigiCorp',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&q=80',
    content: 'The mobile app they developed has transformed our customer engagement completely.',
    rating: 5
  },
  {
    name: 'James Wilson',
    position: 'IT Manager',
    company: 'TechGrowth',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&q=80',
    content: 'Their software solutions have streamlined our operations and reduced costs significantly.',
    rating: 5
  },
  {
    name: 'Sophie Chen',
    position: 'Innovation Lead',
    company: 'NextGen Solutions',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&q=80',
    content: 'Exceptional blockchain development work. They delivered beyond our expectations.',
    rating: 5
  }
];

function SliderArrow({ className, onClick, icon: Icon }: { className: string; onClick?: () => void; icon: any }) {
  return (
    <button
      onClick={onClick}
      className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl ${
        className.includes('prev') ? '-left-4' : '-right-4'
      }`}
    >
      <Icon className="h-6 w-6 text-gray-600" />
    </button>
  );
}

function ClientTestimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const clientSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <SliderArrow icon={ChevronLeft} />,
    nextArrow: <SliderArrow icon={ChevronRight} />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const testimonialSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SliderArrow icon={ChevronLeft} />,
    nextArrow: <SliderArrow icon={ChevronRight} />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="py-20 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Clients Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <div className="relative px-12">
            <Slider {...clientSettings}>
              {clients.map((client) => (
                <div key={client.name} className="px-4">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-200"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h2
            className="text-3xl font-bold text-gray-900 text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            What Our Clients Say
          </motion.h2>
          <div className="relative px-12">
            <Slider {...testimonialSettings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-4">
                  <motion.div
                    className="bg-white rounded-xl shadow-lg p-8 h-full"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{testimonial.content}"</p>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ClientTestimonials;