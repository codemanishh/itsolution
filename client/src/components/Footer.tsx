import { Link, useLocation } from 'wouter';
import { scrollToTop } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-brand-green text-brand-mint py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-brand-red flex items-center justify-center text-black font-bold text-xl">
                ITS
              </div>
              <h3 className="text-xl font-bold text-brand-coral">IT Solution Siwan</h3>
            </div>
            <p className="text-brand-mint mb-4">
              Providing quality education and training in computer applications and typing since 2010. 
              Our mission is to empower students with the skills they need to succeed in today's digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-coral hover:text-brand-red transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-brand-coral hover:text-brand-red transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-brand-coral hover:text-brand-red transition-all duration-300 transform hover:scale-110" aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a href="#" className="text-brand-coral hover:text-brand-red transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-coral">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">Home</a></li>
              <li><a href="#courses" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">Courses</a></li>
              <li><a href="#certificate" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">Certificate Validation</a></li>
              <li><a href="#contact" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-coral">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">DCA</a></li>
              <li><a href="#courses" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">ADCA</a></li>
              <li><a href="#courses" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">BCA</a></li>
              <li><a href="#courses" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">English Typing</a></li>
              <li><a href="#courses" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">Hindi Typing</a></li>
              <li><a href="#courses" className="text-brand-mint hover:text-brand-coral transition-all duration-300 font-medium">Stenography</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-brand-teal/30 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-lightblue text-sm">&copy; {new Date().getFullYear()} IT Solution Siwan. All rights reserved.</p>
          <p className="text-brand-lightblue text-sm mt-2 md:mt-0">Owner: Birendra Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
