import { Link, useLocation } from 'wouter';
import { scrollToTop } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
                ITS
              </div>
              <h3 className="text-xl font-bold">IT Solution Siwan</h3>
            </div>
            <p className="text-slate-400 mb-4">
              Providing quality education and training in computer applications and typing since 2010. 
              Our mission is to empower students with the skills they need to succeed in today's digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-300 transition" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition" aria-label="WhatsApp">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="#" className="text-white hover:text-primary-300 transition" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-white hover:text-primary-300 transition">Home</a></li>
              <li><a href="#courses" className="text-white hover:text-primary-300 transition">Courses</a></li>
              <li><a href="#certificate" className="text-white hover:text-primary-300 transition">Certificate Validation</a></li>
              <li><a href="#contact" className="text-white hover:text-primary-300 transition">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-white hover:text-primary-300 transition">DCA</a></li>
              <li><a href="#courses" className="text-white hover:text-primary-300 transition">ADCA</a></li>
              <li><a href="#courses" className="text-white hover:text-primary-300 transition">BCA</a></li>
              <li><a href="#courses" className="text-white hover:text-primary-300 transition">English Typing</a></li>
              <li><a href="#courses" className="text-white hover:text-primary-300 transition">Hindi Typing</a></li>
              <li><a href="#courses" className="text-white hover:text-primary-300 transition">Stenography</a></li>
            </ul>
          </div>
        </div>
        
        <hr className="border-slate-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">&copy; {new Date().getFullYear()} IT Solution Siwan. All rights reserved.</p>
          <p className="text-white text-sm mt-2 md:mt-0">Owner: Birendra Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
