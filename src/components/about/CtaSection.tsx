
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden" 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-purple/30 rounded-full filter blur-3xl z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-portfolio-teal/30 rounded-full filter blur-3xl z-0" />
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              I'm currently available for freelance work and full-time positions.
              If you have a project that needs expertise in DevOps, Cloud, or Data Science,
              I'd love to hear from you!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
                <Link to="/contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#" className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
