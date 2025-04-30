import { useState, useRef } from 'react';
import { toast } from '@/hooks/use-toast';
import { CheckCircle, XCircle, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { isValidEmail } from '@/lib/utils';
import emailjs from 'emailjs-com';
import { emailConfig } from '@/lib/emailConfig';

const Contact = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    if (!isValidEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: fullName,
        from_email: email,
        message: message
      };
      
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        templateParams,
        emailConfig.publicKey
      );
      
      // Clear form
      setFullName('');
      setEmail('');
      setMessage('');
      
      toast({
        title: "Success",
        description: "Your message has been sent successfully. We'll get back to you soon!",
        variant: "default"
      });
    } catch (error) {
      console.error("Email sending failed:", error);
      toast({
        title: "Failed to send",
        description: "There was a problem sending your message. Please try again later or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Contact Us</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Have questions about our courses? Drop us a message and we'll get back to you shortly
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    id="fullName"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={5}
                    placeholder="Enter your message here..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-3 px-4 rounded-lg transition"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <div className="bg-slate-50 rounded-lg p-6 md:p-8 h-full">
                <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-slate-900">Address</h4>
                      <p className="text-slate-600 mt-1">
                        Arya Samaj Campus, DAV Mode, Station Road, Siwan, Bihar, PIN 841226
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-slate-900">Phone</h4>
                      <p className="text-slate-600 mt-1">+91 9876543210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-slate-900">Email</h4>
                      <p className="text-slate-600 mt-1">info@itsolutionsiwan.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1 text-primary-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-slate-900">Office Hours</h4>
                      <p className="text-slate-600 mt-1">Mon-Sat: 9:00 AM - 6:00 PM</p>
                      <p className="text-slate-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-sm font-medium text-slate-900 mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-primary-100 text-primary-600 hover:bg-primary-200 w-10 h-10 rounded-full flex items-center justify-center transition"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                      href="#" 
                      className="bg-primary-100 text-primary-600 hover:bg-primary-200 w-10 h-10 rounded-full flex items-center justify-center transition"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a 
                      href="#" 
                      className="bg-primary-100 text-primary-600 hover:bg-primary-200 w-10 h-10 rounded-full flex items-center justify-center transition"
                      aria-label="WhatsApp"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                    <a 
                      href="#" 
                      className="bg-primary-100 text-primary-600 hover:bg-primary-200 w-10 h-10 rounded-full flex items-center justify-center transition"
                      aria-label="YouTube"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
