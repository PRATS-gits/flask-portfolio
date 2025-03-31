
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Download, Github, Linkedin, Facebook, Instagram, Server } from 'lucide-react';

const ProfileSection = () => {
  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }} 
            className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden relative"
          >
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-portfolio-purple/30 rounded-full filter blur-xl z-0" />
            <div className="relative z-10">
              <div className="aspect-square rounded-lg bg-gradient-to-tr from-portfolio-purple/90 to-portfolio-teal/90 flex items-center justify-center mb-6 overflow-hidden">
                <motion.div 
                  initial={{ scale: 0.8 }} 
                  whileInView={{ scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                >
                  <Server className="h-24 w-24 text-white" />
                </motion.div>
              </div>
              <div className="flex justify-center space-x-5 mb-4">
                <a href="#" className="icon-link">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="icon-link">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="icon-link">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="icon-link">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
              <motion.div 
                className="text-center" 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Button asChild variant="outline" className="mt-2">
                  <a href="#" className="flex items-center">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              <span className="gradient-text">Pratham Diwadkar</span>
            </h2>
            <h3 className="text-xl font-medium mb-4">CI/CD Deployment Practitioner</h3>
            <p className="text-foreground/80 mb-6">With over 4 years of experience in the IT industry, I specialize in designing and implementing efficient, scalable, and reliable systems. My expertise spans DevOps practices, cloud infrastructure, containerization, and data science methodologies.</p>
            <p className="text-foreground/80 mb-6">
              I'm passionate about automation, continuous improvement, and leveraging cutting-edge 
              technologies to solve real-world problems. My approach combines technical excellence 
              with a deep understanding of business needs.
            </p>
            
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
              <div>
                <span className="text-foreground/60 block">Location:</span>
                <span>Mumbai, Maharashtra, IN</span>
              </div>
              <div>
                <span className="text-foreground/60 block">Experience:</span>
                <span>4+ Years</span>
              </div>
              <div>
                <span className="text-foreground/60 block">Email:</span>
                <a href="mailto:pratham.eduace@gmail.com" className="text-primary hover:underline">pratham.eduace@gmail.com</a>
              </div>
              <div>
                <span className="text-foreground/60 block">Availability:</span>
                <span>Open to opportunities</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
                <Link to="/contact">Hire Me</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/projects">View Projects</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
