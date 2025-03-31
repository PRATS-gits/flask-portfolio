import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
interface NavbarProps {
  scrolled: boolean;
}
const Navbar: React.FC<NavbarProps> = ({
  scrolled
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Projects',
    path: '/projects'
  }, {
    name: 'Services',
    path: '/services'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-lg shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-xl md:text-2xl font-bold gradient-text">Pratham Diwadkar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`nav-link ${isActive(link.path) ? 'active' : ''}`}>
              {link.name}
            </Link>)}
          <Button asChild className="ml-4 bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
            <Link to="/contact">Hire Me</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg shadow-lg md:hidden">
              <nav className="flex flex-col p-4">
                {navLinks.map(link => <Link key={link.path} to={link.path} className={`py-3 px-4 ${isActive(link.path) ? 'text-primary font-medium' : 'text-foreground/80'}`} onClick={() => setMobileMenuOpen(false)}>
                    {link.name}
                  </Link>)}
                <Button asChild className="mt-4 bg-gradient-to-r from-portfolio-purple to-portfolio-teal hover:opacity-90 transition-opacity">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Hire Me</Link>
                </Button>
              </nav>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>;
};
export default Navbar;