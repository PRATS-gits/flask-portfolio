
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Facebook, Instagram, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const lastUpdatedDate = new Date().toLocaleDateString(); // Add current date

  return <footer className="bg-gradient-to-r from-portfolio-purple/10 to-portfolio-teal/10 backdrop-blur-sm py-8 mt-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="text-xl font-bold gradient-text">Pratham Diwadkar</span>
            </Link>
            <p className="text-foreground/80 max-w-md">
              Specializing in DevOps, Cloud Computing (AWS), Docker, ML and Data Science.
              Providing innovative solutions to complex technological challenges.
            </p>
            <div className="flex mt-4 space-x-3">
              <a href="#" className="icon-link" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="icon-link" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="icon-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="icon-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="icon-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link to="/projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/services" className="text-foreground/80 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic">
              <p className="text-foreground/80 mb-2">San Francisco, CA</p>
              <p className="text-foreground/80 mb-2">United States</p>
              <p className="text-foreground/80 mb-2">
                <a href="mailto:contact@devopsportfolio.com" className="hover:text-primary transition-colors">
                  contact@devopsportfolio.com
                </a>
              </p>
              <p className="text-foreground/80">
                <a href="tel:+11234567890" className="hover:text-primary transition-colors">
                  +1 (123) 456-7890
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 mt-8 pt-8 text-center md:text-left text-foreground/70">
          <p>Last updated: {lastUpdatedDate}</p>
        </div>
      </div>
    </footer>;
};
export default Footer;
