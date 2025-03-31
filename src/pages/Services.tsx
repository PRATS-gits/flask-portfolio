import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Cloud, 
  Database, 
  Layers, 
  Code,
  Cpu,
  BarChart,
  LineChart,
  Lock,
  Clock,
  Zap,
  Check,
  ArrowRight
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "DevOps Automation",
      description: "Streamline development and operations with automated pipelines and processes.",
      icon: <Server className="h-12 w-12 text-portfolio-purple" />,
      features: [
        "CI/CD Pipeline Implementation",
        "Infrastructure as Code (IaC)",
        "Automated Testing",
        "Monitoring & Alerting Setup"
      ],
      cta: "Optimize Your Workflow"
    },
    {
      id: 2,
      title: "Cloud Architecture & Migration",
      description: "Design and implement scalable, secure cloud solutions tailored to your needs.",
      icon: <Cloud className="h-12 w-12 text-portfolio-teal" />,
      features: [
        "AWS / Azure / GCP Solutions",
        "Cloud Migration Strategy",
        "Cost Optimization",
        "Multi-Cloud Integration"
      ],
      cta: "Move to the Cloud"
    },
    {
      id: 3,
      title: "Containerization & Orchestration",
      description: "Leverage Docker and Kubernetes for efficient, scalable application deployment.",
      icon: <Layers className="h-12 w-12 text-portfolio-pink" />,
      features: [
        "Docker Implementation",
        "Kubernetes Cluster Setup",
        "Service Mesh Integration",
        "Container Security"
      ],
      cta: "Containerize Your Apps"
    },
    {
      id: 4,
      title: "Machine Learning Solutions",
      description: "Implement ML models to derive insights and automate decisions.",
      icon: <Cpu className="h-12 w-12 text-portfolio-orange" />,
      features: [
        "Predictive Analytics",
        "Computer Vision Systems",
        "Natural Language Processing",
        "ML Model Deployment"
      ],
      cta: "Implement ML"
    },
    {
      id: 5,
      title: "Data Engineering & Analytics",
      description: "Build robust data pipelines and insightful analytics dashboards.",
      icon: <Database className="h-12 w-12 text-portfolio-purple" />,
      features: [
        "Data Pipeline Development",
        "ETL Process Implementation",
        "Data Warehouse Design",
        "Business Intelligence"
      ],
      cta: "Optimize Your Data"
    },
    {
      id: 6,
      title: "Custom Software Development",
      description: "Create tailored software solutions for your specific business needs.",
      icon: <Code className="h-12 w-12 text-portfolio-teal" />,
      features: [
        "Requirement Analysis",
        "Architecture Design",
        "Agile Development",
        "Continuous Improvement"
      ],
      cta: "Build Custom Software"
    }
  ];

  const benefits = [
    {
      title: "Improved Efficiency",
      description: "Streamline processes and reduce manual tasks through automation.",
      icon: <Zap className="h-6 w-6 text-portfolio-teal" />
    },
    {
      title: "Cost Reduction",
      description: "Optimize resource usage and reduce operational costs.",
      icon: <BarChart className="h-6 w-6 text-portfolio-purple" />
    },
    {
      title: "Enhanced Security",
      description: "Implement robust security measures to protect your data and systems.",
      icon: <Lock className="h-6 w-6 text-portfolio-pink" />
    },
    {
      title: "Faster Time-to-Market",
      description: "Accelerate development and deployment cycles to get features to users faster.",
      icon: <Clock className="h-6 w-6 text-portfolio-orange" />
    }
  ];

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
              My <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8">
              I offer comprehensive solutions in DevOps, Cloud Computing, 
              Containerization, Machine Learning, and Data Science to help 
              businesses optimize their technological infrastructure and processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={item}
                className="glass-card rounded-xl overflow-hidden h-full flex flex-col"
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="p-6 pb-0 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-3 text-center">{service.title}</h3>
                  <p className="text-foreground/70 mb-4 text-center">{service.description}</p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-6 pb-6 mt-auto">
                  <Button asChild className="w-full bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 group">
                    <Link to="/contact" className="flex items-center justify-center">
                      {service.cta}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-portfolio-purple/5 to-portfolio-teal/5">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Service Process
          </motion.h2>
          
          <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto relative">
            {/* Connection line */}
            <div className="absolute left-8 md:left-1/2 top-10 bottom-10 w-0.5 md:w-[80%] h-[calc(100%-4rem)] md:h-0.5 bg-primary/30 z-0 md:translate-x-[-50%] md:translate-y-8" />
            
            {[
              {
                number: "01",
                title: "Consultation",
                description: "I start by understanding your needs, goals, and current challenges.",
              },
              {
                number: "02",
                title: "Strategy & Planning",
                description: "Based on our consultation, I develop a strategic approach and detailed project plan.",
              },
              {
                number: "03",
                title: "Implementation",
                description: "I execute the plan with precision, regular updates, and adaptability.",
              },
              {
                number: "04",
                title: "Evaluation & Support",
                description: "Post-implementation, I provide evaluation, documentation, and ongoing support.",
              }
            ].map((step, index) => (
              <motion.div 
                key={step.number}
                className="relative z-10 mb-12 md:mb-0 flex md:flex-col items-start md:items-center w-full max-w-xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-teal text-white text-xl font-bold mb-0 md:mb-4">
                  {step.number}
                </div>
                <div className="ml-6 md:ml-0 md:text-center">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-portfolio-purple/30 rounded-full filter blur-3xl z-0" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-portfolio-teal/30 rounded-full filter blur-3xl z-0" />
            
            <div className="relative z-10">
              <h2 className="section-title text-center mb-12">
                Benefits of Working With Me
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="mr-4 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-foreground/70">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button asChild size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-portfolio-purple/5 to-portfolio-teal/5">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Client Testimonials
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "Working with Pratham transformed our DevOps processes. We saw a 40% reduction in deployment time and significantly fewer incidents in production.",
                name: "Sarah Johnson",
                title: "CTO, TechStart Inc."
              },
              {
                quote: "The cloud migration strategy Pratham developed saved us thousands in monthly costs while improving our system's reliability and performance.",
                name: "Michael Chen",
                title: "Engineering Director, DataFlow Systems"
              },
              {
                quote: "Pratham's machine learning solution for our predictive maintenance system has been a game-changer, reducing equipment downtime by 35%.",
                name: "Elena Rodriguez",
                title: "Operations Manager, Global Manufacturing"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-xl relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 text-4xl text-primary">"</div>
                <p className="text-foreground/80 mb-6 italic">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-foreground/60 text-sm">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.h2 
            className="section-title text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What is your approach to DevOps implementation?",
                answer: "I focus on a holistic approach that integrates people, processes, and technology. This includes analyzing current workflows, identifying bottlenecks, implementing automation, and training teams on best practices."
              },
              {
                question: "How do you handle cloud security concerns?",
                answer: "Security is integrated into every aspect of my cloud solutions. I implement defense-in-depth strategies, including identity management, network security, encryption, and continuous monitoring based on industry best practices."
              },
              {
                question: "Can you work with our existing infrastructure?",
                answer: "Absolutely. I specialize in integrating new solutions with existing systems. My approach minimizes disruption while maximizing the benefits of modern technologies and practices."
              },
              {
                question: "What is your pricing model?",
                answer: "I offer flexible pricing models based on project scope, complexity, and timeline. This can include fixed-price contracts, time and materials, or retainer arrangements. I provide detailed proposals after initial consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, I offer various support options, from documentation and knowledge transfer to ongoing maintenance contracts and periodic reviews to ensure your systems continue to perform optimally."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                className="glass-card p-6 rounded-xl mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-foreground/80">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg mb-6">Have more questions or ready to discuss your project?</p>
            <Button asChild size="lg" className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
