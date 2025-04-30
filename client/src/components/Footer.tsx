import { Link, useLocation } from 'wouter';
import { scrollToTop } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold text-xl">
                ITS
              </div>
              <h3 className="text-xl font-bold text-yellow-300">IT Solution Siwan</h3>
            </div>
            <p className="text-yellow-100 mb-4">
              Providing quality education and training in computer applications and typing since 2010. 
              Our mission is to empower students with the skills they need to succeed in today's digital world.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-all duration-300 transform hover:scale-110" aria-label="Facebook">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-all duration-300 transform hover:scale-110" aria-label="WhatsApp">
                <i className="fab fa-whatsapp text-xl"></i>
              </a>
              <a href="#" className="text-yellow-300 hover:text-yellow-100 transition-all duration-300 transform hover:scale-110" aria-label="YouTube">
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-yellow-100 hover:text-yellow-300 transition font-medium">Home</a></li>
              <li><a href="#courses" className="text-yellow-100 hover:text-yellow-300 transition font-medium">Courses</a></li>
              <li><a href="#certificate" className="text-yellow-100 hover:text-yellow-300 transition font-medium">Certificate Validation</a></li>
              <li><a href="#contact" className="text-yellow-100 hover:text-yellow-300 transition font-medium">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-yellow-300">Courses</h4>
            <ul className="space-y-2">
              <li><a href="#courses" className="text-yellow-100 hover:text-yellow-300 transition font-medium">DCA</a></li>
              <li><a href="#courses" className="text-yellow-100 hover:text-yellow-300 transition font-medium">ADCA</a></li>
              <li><a href="#courses" className="text-yellow-100 hover:text-yellow-300 transition font-medium">BCA</a></li>
              <li><a href="#courses" className="text-yellow-100 hover:text-yellow-300 transition font-medium">English Typing</a></li>
              <li><a href="#courses" className="text-yellow-100 hover:text-yellow-300 transition font-medium">Hindi Typing</a></li>
              <li><a href="#courses" className="text-yellow-100 hover:text-yellow-300 transition font-medium">Stenography</a></li>
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
