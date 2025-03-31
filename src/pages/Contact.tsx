import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Github, Linkedin, Facebook, Instagram, Send, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
const ContactPage = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
        duration: 5000
      });
    }, 1500);
  };
  return <>
    {/* Hero Section */}
    <section className="pt-28 md:pt-32 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-purple/20 to-portfolio-teal/20 z-[-1]" />
      <div className="container mx-auto">
        <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 mb-8">
            Have a project in mind or want to collaborate? 
            I'd love to hear from you. Fill out the form below or 
            reach out directly through any of the contact methods.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Contact Form Section */}
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
            <h2 className="text-3xl font-bold mb-6">
              <span className="gradient-text">Contact Information</span>
            </h2>
            <p className="text-foreground/80 mb-8 max-w-md">
              Feel free to reach out through any of these channels. 
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 bg-portfolio-purple/10 rounded-lg mr-4">
                  <MapPin className="h-6 w-6 text-portfolio-purple" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-foreground/80">Mumbai, Maharashtra</p>
                  <p className="text-foreground/80">India</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-portfolio-teal/10 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-portfolio-teal" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:contact@devopsportfolio.com" className="text-foreground/80 hover:text-primary transition-colors">pratham.eduace@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-portfolio-pink/10 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-portfolio-pink" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:+11234567890" className="text-foreground/80 hover:text-primary transition-colors">+91 8169804299</a>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-3">
              <a href="#" className="icon-link" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="icon-link" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="icon-link" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="icon-link" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            
            <div className="mt-12 p-6 glass-card rounded-xl relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-portfolio-purple/20 rounded-full filter blur-xl z-0" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
                <p className="text-foreground/80 mb-1">Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p className="text-foreground/80">Available for virtual meetings worldwide</p>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.6
          }}>
            <div className="glass-card rounded-xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-portfolio-teal/20 rounded-full filter blur-xl z-0" />
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6">
                  Send Me a Message
                </h2>
                
                {isSubmitted ? <motion.div initial={{
                  opacity: 0,
                  scale: 0.8
                }} animate={{
                  opacity: 1,
                  scale: 1
                }} className="text-center py-10">
                    <div className="inline-flex items-center justify-center rounded-full bg-green-100 p-2 mb-4">
                      <CheckCircle2 className="h-10 w-10 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-foreground/80 mb-6">
                      Your message has been sent successfully. I'll get back to you as soon as possible!
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90">
                      Send Another Message
                    </Button>
                  </motion.div> : <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                      </label>
                      <Input id="name" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} required className="contact-input" />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                      </label>
                      <Input id="email" name="email" type="email" placeholder="Your email address" value={formData.email} onChange={handleChange} required className="contact-input" />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block mb-2 font-medium">
                        Subject
                      </label>
                      <Input id="subject" name="subject" placeholder="Subject of your message" value={formData.subject} onChange={handleChange} required className="contact-input" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        Message
                      </label>
                      <Textarea id="message" name="message" placeholder="Your message" rows={5} value={formData.message} onChange={handleChange} required className="contact-input resize-none" />
                    </div>
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
                      {isSubmitting ? <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span> : <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>}
                    </Button>
                  </form>}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Map Section */}
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.h2 className="section-title text-center mb-8" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
          My Location
        </motion.h2>
        
        <motion.div className="glass-card rounded-xl overflow-hidden h-80 relative" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.03900641756!2d72.74110173614268!3d19.082489167572936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed733f7e8b7!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1696284000000!5m2!1sen!2sin" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Location" style={{
            filter: 'grayscale(0.5) contrast(1.2) opacity(0.9)'
          }}></iframe>
        </motion.div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="py-16 px-4 bg-gradient-to-r from-portfolio-purple/5 to-portfolio-teal/5">
      <div className="container mx-auto">
        <motion.h2 className="section-title text-center mb-12" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
          Frequently Asked Questions
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[{
            question: "How quickly do you respond to inquiries?",
            answer: "I typically respond to all inquiries within 24-48 hours during business days."
          }, {
            question: "Do you work with clients remotely?",
            answer: "Yes, I work with clients globally and am experienced with remote collaboration tools and methodologies."
          }, {
            question: "What information should I include in my initial message?",
            answer: "For the most efficient response, include your project overview, timeline, budget range, and specific goals or requirements."
          }, {
            question: "Do you offer consultation calls before starting a project?",
            answer: "Absolutely! I offer free initial consultation calls to discuss your needs and determine if we're a good fit for collaboration."
          }].map((faq, index) => <motion.div key={index} className="glass-card p-6 rounded-xl" initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-foreground/80">{faq.answer}</p>
              </motion.div>)}
        </div>
      </div>
    </section>
  </>;
};
export default ContactPage;