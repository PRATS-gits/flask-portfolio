
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Award } from 'lucide-react';

const ExperienceEducationSection = () => {
  const experienceData = [
    {
      title: 'WordPress Developer',
      company: 'Freelance',
      period: '2024 - Present',
      description: 'Developing and maintaining WordPress websites, creating custom themes and plugins, and providing web development solutions.'
    }, 
    {
      title: 'CI/CD Deployment Practitioner',
      company: 'Freelance',
      period: '2024 - Present',
      description: 'Leading DevOps initiatives and cloud infrastructure management. Implementing CI/CD pipelines and containerization strategies.'
    },
    {
      title: 'Cloud Solutions Practitioner',
      company: 'Freelance',
      period: '2024 - Present',
      description: 'Designed and implemented cloud-based solutions for enterprise clients. Focused on scalable and secure cloud architectures.'
    },
    {
      title: 'Data Scientist',
      company: 'Freelance',
      period: '2024 - Present',
      description: 'Developed machine learning models for predictive analytics. Worked with large datasets to extract actionable insights.'
    }
  ];

  const educationData = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'University of Mumbai',
      period: '2022 - 2026',
      focus: 'Honours Degree in Data Science'
    },
    {
      degree: 'Higher Secondary Education (HSC)',
      institution: 'Lords Universal Junior College of Commerce and Science',
      period: '2020 - 2022',
      focus: 'Bifocal Subject Knowledge in Computer Science'
    },
    {
      degree: 'Secondary School Education (SSC)',
      institution: 'Kudilal Govindram Seksaria English School',
      period: '2010 - 2020',
      focus: 'Maharashtra State Board'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-portfolio-purple/5 to-portfolio-teal/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.h2 
              className="section-title flex items-center" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
            >
              <Briefcase className="mr-3 h-7 w-7" />
              Experience
            </motion.h2>
            
            <div className="space-y-8 mt-8">
              {experienceData.map((exp, index) => (
                <motion.div 
                  key={index} 
                  className="glass-card p-6 rounded-xl relative" 
                  initial={{ opacity: 0, x: -30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-sm text-foreground/60 mb-1 block">{exp.period}</span>
                  <h3 className="font-semibold mb-1 text-xl">{exp.title}</h3>
                  <p className="text-primary font-medium mb-3">{exp.company}</p>
                  <p className="text-foreground/80">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <motion.h2 
              className="section-title flex items-center" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }}
            >
              <BookOpen className="mr-3 h-7 w-7" />
              Education
            </motion.h2>
            
            <div className="space-y-8 mt-8">
              {educationData.map((edu, index) => (
                <motion.div 
                  key={index} 
                  className="glass-card p-6 rounded-xl relative" 
                  initial={{ opacity: 0, x: 30 }} 
                  whileInView={{ opacity: 1, x: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <span className="text-sm text-foreground/60 mb-1 block">{edu.period}</span>
                  <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                  <p className="text-primary font-medium mb-3">{edu.institution}</p>
                  <p className="text-foreground/80">{edu.focus}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="mt-8" 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Certifications</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-portfolio-purple" />
                  <span>AWS Certified Solutions Architect - Professional</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-portfolio-teal" />
                  <span>Certified Kubernetes Administrator (CKA)</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-portfolio-pink" />
                  <span>Microsoft Certified: Azure Solutions Architect</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-portfolio-orange" />
                  <span>TensorFlow Developer Certificate</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
