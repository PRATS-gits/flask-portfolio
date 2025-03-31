
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-teal/20 z-[-1]" />
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            I'm a seasoned IT Engineer with a passion for DevOps, Cloud Computing, 
            and Data Science. My journey in technology has equipped me with 
            the skills to tackle complex challenges and deliver innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
