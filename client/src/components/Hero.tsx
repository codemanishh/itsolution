import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-600 to-secondary-700 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to IT Solution Siwan</h2>
            <p className="text-lg mb-6">Your pathway to success in the digital world. Located at Arya Samaj Campus, DAV Mode, Station Road, Siwan, Bihar.</p>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-8 border border-white/20">
              <p className="text-xl font-semibold mb-2">In just 6 months, become <span className="text-yellow-300 font-bold">Atmanirbhar</span> (self-dependent) with ADCA/DCA</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#courses" className="bg-white text-primary-700 font-medium px-6 py-3 rounded-lg hover:bg-slate-100 transition shadow-lg shadow-primary-900/20">Explore Courses</a>
              <a href="#contact" className="bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition">Contact Us</a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="rounded-xl shadow-2xl w-full max-w-lg overflow-hidden h-80 md:h-96">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format&q=80" 
                alt="Student learning computer skills" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
