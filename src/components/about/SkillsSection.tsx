
import React from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Globe } from 'lucide-react';
import awsLogo from '@/assets/logos/aws-logo.svg';
import dockerLogo from '@/assets/logos/docker-logo.svg';
import kubernetesLogo from '@/assets/logos/kubernetes-logo.svg';
import pythonLogo from '@/assets/logos/python-logo.svg';
import mlLogo from '@/assets/logos/ml-logo.svg';
import tensorflowLogo from '@/assets/logos/tensorflow-logo.svg';

const SkillsSection = () => {
  const skillsData = [
    { name: 'DevOps & CI/CD', value: 95 },
    { name: 'AWS Cloud', value: 90 },
    { name: 'Docker & Kubernetes', value: 85 },
    { name: 'Python', value: 90 },
    { name: 'Machine Learning', value: 80 },
    { name: 'Data Analysis', value: 85 },
    { name: 'SQL & Databases', value: 85 }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title text-center mb-12" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.name} 
              className="space-y-2" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.value}%</span>
              </div>
              <Progress 
                value={skill.value} 
                className="h-2" 
                indicatorClassName="bg-gradient-to-r from-portfolio-purple to-portfolio-teal" 
              />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          <TechSkillIcon image={pythonLogo} text="Python" delay={0} />
          <TechSkillIcon image={awsLogo} text="AWS" delay={0.1} />
          <TechSkillIcon image={dockerLogo} text="Docker" delay={0.2} />
          <TechSkillIcon image={kubernetesLogo} text="Kubernetes" delay={0.3} />
          <TechSkillIcon image={mlLogo} text="ML & AI" delay={0.4} />
          <TechSkillIcon image={tensorflowLogo} text="TensorFlow" delay={0.5} />
        </div>
      </div>
    </section>
  );
};

const TechSkillIcon = ({ image, text, delay }: { 
  image: string, 
  text: string, 
  delay: number 
}) => (
  <motion.div 
    className="skill-card flex flex-col items-center justify-center" 
    initial={{ opacity: 0, scale: 0.8 }} 
    whileInView={{ opacity: 1, scale: 1 }} 
    viewport={{ once: true }} 
    transition={{ duration: 0.4, delay }}
  >
    <img src={image} alt={text} className="h-12 w-12 mb-2" />
    <span className="font-medium">{text}</span>
  </motion.div>
);

export default SkillsSection;
