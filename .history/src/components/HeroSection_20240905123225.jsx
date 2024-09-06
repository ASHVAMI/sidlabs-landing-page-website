import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className={styles.title}>Welcome to SidLabs</h1>
          <p className={styles.subtitle}>
            Modern technology solutions for a better tomorrow.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
