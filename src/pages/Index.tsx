
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Cloud, Database, Layers, Braces } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HomePage = () => {
  const isMobile = useIsMobile();
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const skills = [
    { name: 'DevOps', icon: <Server className="h-10 w-10 text-portfolio-purple" /> },
    { name: 'AWS', icon: <Cloud className="h-10 w-10 text-portfolio-teal" /> },
    { name: 'Docker', icon: <Layers className="h-10 w-10 text-portfolio-blue" /> },
    { name: 'ML & AI', icon: <Braces className="h-10 w-10 text-portfolio-pink" /> },
    { name: 'Data Science', icon: <Database className="h-10 w-10 text-portfolio-orange" /> },
    { name: 'Python', icon: <Code className="h-10 w-10 text-portfolio-purple" /> }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-teal/20 z-[-1]" />
        <div className="absolute top-20 right-0 w-64 h-64 bg-portfolio-purple/30 rounded-full filter blur-3xl z-[-1] animate-pulse-slow" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-portfolio-teal/30 rounded-full filter blur-3xl z-[-1] animate-pulse-slow" />
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Transforming Ideas</span> into 
                <span className="relative ml-3">
                  Solutions
                  <motion.span
                    className="absolute -bottom-2 left-0 w-full h-1 bg-portfolio-teal"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  />
                </span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl">
                Experienced IT Engineer specializing in DevOps, Cloud Computing, Docker, 
                Machine Learning and Data Science. Building scalable and efficient solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
                  <Link to="/projects">View Projects</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="group">
                  <Link to="/contact" className="flex items-center">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-2xl p-6 md:p-8 overflow-hidden relative"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-portfolio-purple/30 rounded-full filter blur-xl z-0" />
              <div className="relative z-10">
                <div className="aspect-video rounded-lg bg-gradient-to-tr from-portfolio-purple/90 to-portfolio-teal/90 flex items-center justify-center mb-6 overflow-hidden">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
                  >
                    <Code className="h-20 w-20 text-white" />
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-foreground/10 rounded animate-pulse" />
                  <div className="h-4 w-full bg-foreground/10 rounded animate-pulse" />
                  <div className="h-4 w-5/6 bg-foreground/10 rounded animate-pulse" />
                  <div className="h-4 w-2/3 bg-foreground/10 rounded animate-pulse" />
                </div>
                <motion.div
                  className="flex justify-end mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.4 }}
                >
                  <div className="flex space-x-3">
                    <Button size="sm" variant="secondary" className="rounded-full">Run</Button>
                    <Button size="sm" className="rounded-full bg-portfolio-purple hover:bg-portfolio-purple/90">Deploy</Button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Tech Expertise
          </motion.h2>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={item}
                className="skill-card group"
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {skill.icon}
                </motion.div>
                <h3 className="font-medium text-lg">{skill.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-portfolio-purple/5 to-portfolio-teal/5">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button asChild variant="outline" className="group">
                <Link to="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-48 bg-gradient-to-br from-portfolio-purple to-portfolio-teal flex items-center justify-center">
                <Server className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AWS Infrastructure Automation</h3>
                <p className="text-foreground/70 mb-4">
                  Automated deployment of scalable infrastructure using Terraform and AWS CloudFormation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm">AWS</span>
                  <span className="px-3 py-1 bg-portfolio-teal/10 text-portfolio-teal rounded-full text-sm">Terraform</span>
                  <span className="px-3 py-1 bg-portfolio-pink/10 text-portfolio-pink rounded-full text-sm">CloudFormation</span>
                </div>
                <Button asChild size="sm" variant="outline" className="group">
                  <Link to="/projects" className="flex items-center">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Project 2 */}
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-48 bg-gradient-to-br from-portfolio-pink to-portfolio-orange flex items-center justify-center">
                <Database className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Machine Learning Pipeline</h3>
                <p className="text-foreground/70 mb-4">
                  End-to-end ML pipeline for real-time data processing and predictive analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm">Python</span>
                  <span className="px-3 py-1 bg-portfolio-teal/10 text-portfolio-teal rounded-full text-sm">TensorFlow</span>
                  <span className="px-3 py-1 bg-portfolio-pink/10 text-portfolio-pink rounded-full text-sm">Kubernetes</span>
                </div>
                <Button asChild size="sm" variant="outline" className="group">
                  <Link to="/projects" className="flex items-center">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            
            {/* Project 3 */}
            <motion.div
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-48 bg-gradient-to-br from-portfolio-teal to-portfolio-purple flex items-center justify-center">
                <Layers className="h-16 w-16 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Containerized Microservices</h3>
                <p className="text-foreground/70 mb-4">
                  Microservices architecture using Docker and Kubernetes for scalable applications.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-portfolio-purple/10 text-portfolio-purple rounded-full text-sm">Docker</span>
                  <span className="px-3 py-1 bg-portfolio-teal/10 text-portfolio-teal rounded-full text-sm">Kubernetes</span>
                  <span className="px-3 py-1 bg-portfolio-pink/10 text-portfolio-pink rounded-full text-sm">Istio</span>
                </div>
                <Button asChild size="sm" variant="outline" className="group">
                  <Link to="/projects" className="flex items-center">
                    View Details
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Ready to Transform Your <span className="gradient-text">Tech Vision</span> into Reality?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                Let's collaborate on your next project. I bring expertise in DevOps, Cloud Computing, 
                Docker, ML and Data Science to solve complex technological challenges.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
