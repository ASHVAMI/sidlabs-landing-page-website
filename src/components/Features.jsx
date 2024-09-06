import React from 'react';
import { motion } from 'framer-motion';
import styles from './Features.module.css';

const features = [
  {
    title: 'Innovative Design',
    description: 'Our design is modern and adaptive to all devices, ensuring a seamless user experience.',
    icon: '/images/design-icon.png',
  },
  {
    title: 'Fast Performance',
    description: 'Lightning-fast load times and smooth interactions to keep your users engaged.',
    icon: '/images/performance-icon.png',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Intuitive interface that makes navigation easy and enjoyable for all users.',
    icon: '/images/interface-icon.png',
  },
  {
    title: '24/7 Support',
    description: 'Dedicated support to assist you anytime with any questions or issues you might have.',
    icon: '/images/support-icon.png',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <p className="text-lg text-gray-700">
            Discover the key features that make our platform stand out.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={feature.icon} alt={feature.title} className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
