import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <header className={cn(
      "sticky top-0 z-50 bg-brand-mint transition",
      isScrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {/* Logo and name */}
            <div className="h-12 w-12 rounded-full bg-brand-red flex items-center justify-center text-black font-bold text-xl">
              ITS
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-brand-green">IT Solution Siwan</h1>
              <p className="text-xs text-brand-teal">Computer & Typing Classes</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={cn(
              "font-medium transition-all duration-300",
              isActive("/") ? "text-brand-red" : "text-brand-green hover:text-brand-red"
            )}>Home</a>
            <a href="#courses" className="font-medium text-brand-green hover:text-brand-red transition-all duration-300">Courses</a>
            <a href="#certificate" className="font-medium text-brand-green hover:text-brand-red transition-all duration-300">Certificate Validation</a>
            <a href="#contact" className="font-medium text-brand-green hover:text-brand-red transition-all duration-300">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="block md:hidden text-brand-green hover:text-brand-red transition-all duration-300" 
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} pb-4 animate-accordion-down`}>
          <nav className="flex flex-col space-y-4 bg-brand-lightblue p-4 rounded-lg">
            <a 
              href="#home" 
              onClick={closeMobileMenu}
              className="font-medium text-brand-red hover:text-brand-coral transition-all duration-300 py-2 border-b border-brand-teal/20"
            >
              Home
            </a>
            <a 
              href="#courses" 
              onClick={closeMobileMenu}
              className="font-medium text-brand-green hover:text-brand-red transition-all duration-300 py-2 border-b border-brand-teal/20"
            >
              Courses
            </a>
            <a 
              href="#certificate" 
              onClick={closeMobileMenu}
              className="font-medium text-brand-green hover:text-brand-red transition-all duration-300 py-2 border-b border-brand-teal/20"
            >
              Certificate Validation
            </a>
            <a 
              href="#contact" 
              onClick={closeMobileMenu}
              className="font-medium text-brand-green hover:text-brand-red transition-all duration-300 py-2"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
