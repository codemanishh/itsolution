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
      "sticky top-0 z-50 bg-white transition",
      isScrolled ? "shadow-md" : ""
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            {/* Logo and name */}
            <div className="h-12 w-12 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
              ITS
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-slate-900">IT Solution Siwan</h1>
              <p className="text-xs text-slate-500">Computer & Typing Classes</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className={cn(
              "font-medium transition",
              isActive("/") ? "text-primary-600" : "text-slate-600 hover:text-primary-600"
            )}>Home</a>
            <a href="#courses" className="font-medium text-slate-600 hover:text-primary-600 transition">Courses</a>
            <a href="#certificate" className="font-medium text-slate-600 hover:text-primary-600 transition">Certificate Validation</a>
            <a href="#contact" className="font-medium text-slate-600 hover:text-primary-600 transition">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="block md:hidden text-slate-900 hover:text-primary-600 transition" 
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
          <nav className="flex flex-col space-y-4">
            <a 
              href="#home" 
              onClick={closeMobileMenu}
              className="font-medium text-primary-600 hover:text-primary-700 transition py-2 border-b border-slate-100"
            >
              Home
            </a>
            <a 
              href="#courses" 
              onClick={closeMobileMenu}
              className="font-medium text-slate-600 hover:text-primary-600 transition py-2 border-b border-slate-100"
            >
              Courses
            </a>
            <a 
              href="#certificate" 
              onClick={closeMobileMenu}
              className="font-medium text-slate-600 hover:text-primary-600 transition py-2 border-b border-slate-100"
            >
              Certificate Validation
            </a>
            <a 
              href="#contact" 
              onClick={closeMobileMenu}
              className="font-medium text-slate-600 hover:text-primary-600 transition py-2"
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
