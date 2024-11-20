import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Award, Target, BarChart } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Projects Delivered', value: '500+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Client Satisfaction', value: '98%' }
];

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We stay ahead of technological trends to deliver cutting-edge solutions.'
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to ensure their vision becomes reality.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in every project we undertake.'
  },
  {
    icon: BarChart,
    title: 'Results',
    description: 'We focus on delivering measurable business outcomes for our clients.'
  }
];

function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-600">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=800&q=80"
            alt="Team collaboration"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transforming Ideas into Digital Reality
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're a team of passionate technologists dedicated to helping businesses thrive in the digital age through innovative solutions and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2014, TechSolutions began with a simple mission: to help businesses leverage technology to achieve their full potential. What started as a small team of passionate developers has grown into a full-service technology partner trusted by companies worldwide.
                </p>
                <p>
                  Our journey has been marked by continuous learning, innovation, and a commitment to excellence. We've evolved alongside the technology landscape, constantly expanding our expertise to meet the changing needs of our clients.
                </p>
                <p>
                  Today, we're proud to be at the forefront of digital transformation, helping organizations of all sizes navigate the complexities of modern technology and emerge stronger in an increasingly digital world.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&q=80"
                alt="Our office"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and help us deliver exceptional results for our clients
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Let's work together to bring your vision to life with our expertise and dedication to excellence.
          </p>
          <Link
            to="/get-quote"
            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;