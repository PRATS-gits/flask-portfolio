
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Database, 
  Code,
  ExternalLink,
  Github,
  Search,
  Pencil,
  Rocket
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import awsLogo from '@/assets/logos/aws-logo.svg';
import dockerLogo from '@/assets/logos/docker-logo.svg';
import kubernetesLogo from '@/assets/logos/kubernetes-logo.svg';
import tensorflowLogo from '@/assets/logos/tensorflow-logo.svg';
import pythonLogo from '@/assets/logos/python-logo.svg';
import mlLogo from '@/assets/logos/ml-logo.svg';

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "devops", name: "DevOps" },
    { id: "cloud", name: "Cloud Computing" },
    { id: "ml", name: "Machine Learning" },
    { id: "data", name: "Data Science" },
  ];
  
  const projects = [
    {
      id: 1,
      title: "AWS Infrastructure Automation",
      description: "Automated deployment of scalable infrastructure using Terraform and AWS CloudFormation.",
      image: <img src={awsLogo} alt="AWS" className="h-12 w-12" />,
      categories: ["devops", "cloud"],
      technologies: ["AWS", "Terraform", "CloudFormation", "Python"],
      github: "#",
      demo: "#",
      color: "from-portfolio-purple to-portfolio-teal"
    },
    {
      id: 2,
      title: "Machine Learning Pipeline",
      description: "End-to-end ML pipeline for real-time data processing and predictive analytics.",
      image: <img src={mlLogo} alt="Machine Learning" className="h-12 w-12" />,
      categories: ["ml", "data"],
      technologies: ["Python", "TensorFlow", "Kubernetes", "Docker"],
      github: "#",
      demo: "#",
      color: "from-portfolio-pink to-portfolio-orange"
    },
    {
      id: 3,
      title: "Containerized Microservices",
      description: "Microservices architecture using Docker and Kubernetes for scalable applications.",
      image: <Server className="h-12 w-12 text-white" />,
      categories: ["devops"],
      technologies: ["Docker", "Kubernetes", "Istio", "Go"],
      github: "#",
      demo: "#",
      color: "from-portfolio-teal to-portfolio-purple"
    },
    {
      id: 4,
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with real-time updates.",
      image: <Code className="h-12 w-12 text-white" />,
      categories: ["data"],
      technologies: ["Python", "D3.js", "React", "Flask"],
      github: "#",
      demo: "#",
      color: "from-portfolio-orange to-portfolio-pink"
    },
    {
      id: 5,
      title: "Serverless Event Processing",
      description: "Serverless architecture for real-time event processing and analytics.",
      image: <Server className="h-12 w-12 text-white" />,
      categories: ["cloud", "devops"],
      technologies: ["AWS Lambda", "DynamoDB", "API Gateway", "Event Bridge"],
      github: "#",
      demo: "#",
      color: "from-portfolio-purple to-portfolio-orange"
    },
    {
      id: 6,
      title: "Predictive Maintenance System",
      description: "AI-powered system for predicting equipment failures before they occur.",
      image: <Database className="h-12 w-12 text-white" />,
      categories: ["ml", "data"],
      technologies: ["Python", "Scikit-learn", "Time Series Analysis", "IoT"],
      github: "#",
      demo: "#",
      color: "from-portfolio-teal to-portfolio-pink"
    },
  ];
  
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeTab));
  
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

  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 md:pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-teal/20 z-[-1]" />
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pratham's <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              A showcase of my technical projects in DevOps, Cloud Computing, 
              Machine Learning, and Data Science. Each project represents 
              a unique solution to complex challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <div className="flex justify-center">
              <TabsList className="glass-card">
                {categories.map(category => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            {categories.map(category => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <motion.div
                  variants={container}
                  initial="hidden"
                  animate="show"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map(project => (
                    <motion.div
                      key={project.id}
                      variants={item}
                      className="project-card h-full"
                    >
                      <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        {project.image}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-foreground/70 mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, index) => (
                            <Badge key={index} variant="outline" className="bg-background/50">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex space-x-3">
                          <Button asChild size="sm" variant="outline" className="flex-1">
                            <a href={project.github} className="flex items-center justify-center">
                              <Github className="mr-2 h-4 w-4" />
                              Code
                            </a>
                          </Button>
                          <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90">
                            <a href={project.demo} className="flex items-center justify-center">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Demo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-portfolio-purple/5 to-portfolio-teal/5">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Featured Project
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-xl overflow-hidden mt-10 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <Badge className="mb-4 w-fit bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple/20">
                  Featured Project
                </Badge>
                <h3 className="text-2xl font-bold mb-4">AI-Driven DevOps Workflow Optimization</h3>
                <p className="text-foreground/80 mb-6">
                  A comprehensive platform that uses machine learning to analyze DevOps workflows, 
                  identify bottlenecks, and suggest optimizations. The system reduced deployment 
                  times by 60% and increased reliability by automating testing and monitoring.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge variant="outline" className="bg-background/50">DevOps</Badge>
                  <Badge variant="outline" className="bg-background/50">Machine Learning</Badge>
                  <Badge variant="outline" className="bg-background/50">Python</Badge>
                  <Badge variant="outline" className="bg-background/50">Kubernetes</Badge>
                  <Badge variant="outline" className="bg-background/50">TensorFlow</Badge>
                </div>
                <div className="flex space-x-4">
                  <Button asChild variant="outline" size="sm">
                    <a href="#" className="flex items-center">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button asChild size="sm" className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90">
                    <a href="#" className="flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-portfolio-purple to-portfolio-teal flex items-center justify-center p-10">
                <motion.div
                  initial={{ scale: 0.8, rotate: -5 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-black/20 rounded-xl backdrop-blur-sm -rotate-3 scale-105" />
                    <div className="glass-card rounded-xl p-5 relative">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 rounded-full bg-portfolio-pink" />
                        <div className="w-3 h-3 rounded-full bg-portfolio-orange" />
                        <div className="w-3 h-3 rounded-full bg-portfolio-teal" />
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-white/20 rounded w-5/6" />
                        <div className="h-3 bg-white/20 rounded w-full" />
                        <div className="h-3 bg-white/20 rounded w-4/6" />
                        <div className="h-3 bg-white/20 rounded w-3/6" />
                        <div className="h-3 bg-white/20 rounded w-5/6" />
                        <div className="h-3 bg-white/20 rounded w-full" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Development Process
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {[
              {
                step: "01",
                title: "Research & Planning",
                description: "Understanding requirements and planning the architecture.",
                icon: <Search className="h-8 w-8 text-white" />,
                color: "from-portfolio-purple to-portfolio-teal"
              },
              {
                step: "02",
                title: "Design & Prototype",
                description: "Creating designs and initial prototypes for validation.",
                icon: <Pencil className="h-8 w-8 text-white" />,
                color: "from-portfolio-teal to-portfolio-pink"
              },
              {
                step: "03",
                title: "Development",
                description: "Building the solution with best practices and clean code.",
                icon: <Code className="h-8 w-8 text-white" />,
                color: "from-portfolio-pink to-portfolio-orange"
              },
              {
                step: "04",
                title: "Testing & Deployment",
                description: "Thorough testing and seamless deployment to production.",
                icon: <Rocket className="h-8 w-8 text-white" />,
                color: "from-portfolio-orange to-portfolio-purple"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl overflow-hidden relative"
              >
                <div className={`h-24 bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                  {item.icon}
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-10 right-6 bg-white text-xl font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-portfolio-purple/5 to-portfolio-teal/5">
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
                Have a project in mind?
              </h2>
              <p className="text-lg text-foreground/80 mb-8">
                I'm always open to discussing new projects and challenges.
                Whether you need a complete solution or consulting expertise,
                let's talk about how I can help you achieve your goals.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
                <Link to="/contact">Start a Conversation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
