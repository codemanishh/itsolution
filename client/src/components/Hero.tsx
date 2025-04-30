import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="bg-brand-green py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-brand-mint">Welcome to IT Solution Siwan</h2>
            <p className="text-lg mb-6 text-brand-lightblue">Your pathway to success in the digital world. Located at Arya Samaj Campus, DAV Mode, Station Road, Siwan, Bihar.</p>
            <div className="bg-brand-teal bg-opacity-90 p-5 rounded-lg mb-8 border-2 border-brand-coral shadow-xl transform hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xl font-semibold mb-2 text-brand-mint">In just 6 months, become <span className="text-brand-red font-bold">Atmanirbhar</span> (self-dependent) with ADCA/DCA</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#courses" className="bg-brand-red text-white font-bold px-6 py-3 rounded-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-300 shadow-lg text-lg">Explore Courses</a>
              <a href="#contact" className="bg-transparent border-2 border-brand-coral text-brand-coral font-bold px-6 py-3 rounded-lg hover:bg-brand-coral hover:bg-opacity-10 hover:scale-105 transition-all duration-300 text-lg">Contact Us</a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="rounded-xl shadow-2xl w-full max-w-lg overflow-hidden h-80 md:h-96 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format&q=80" 
                alt="Student learning computer skills" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
