import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import hoardingsData from '../data/hoardings.json';

interface Hoarding {
  title: string;
  image: string;
  description: string;
}

const Hoardings = () => {
  const [hoardings, setHoardings] = useState<Hoarding[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hoardingsTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHoardings(hoardingsData);
  }, []);

  const moveCarousel = (index: number) => {
    if (hoardingsTrackRef.current) {
      const slideWidth = hoardingsTrackRef.current.querySelector('div')?.offsetWidth || 0;
      hoardingsTrackRef.current.style.transform = `translateX(-${index * slideWidth}px)`;
    }
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : hoardings.length - 1;
    moveCarousel(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex < hoardings.length - 1 ? currentIndex + 1 : 0;
    moveCarousel(newIndex);
  };

  return (
    <section className="py-12 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Latest Announcements & Events</h2>
        
        {hoardings.length > 0 && (
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden">
              <div 
                ref={hoardingsTrackRef}
                className="flex transition-transform duration-500"
              >
                {hoardings.map((hoarding, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 p-3">
                    <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                      <img 
                        src={hoarding.image} 
                        alt={hoarding.title} 
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-lg mb-2">{hoarding.title}</h3>
                        <p className="text-slate-600 text-sm">{hoarding.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-600 w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10" 
              onClick={handlePrevClick}
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button 
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 hover:bg-white text-primary-600 w-10 h-10 rounded-full flex items-center justify-center shadow-md z-10" 
              onClick={handleNextClick}
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            
            {/* Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {hoardings.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary-600' : 'bg-slate-300 hover:bg-primary-400'}`} 
                  onClick={() => moveCarousel(index)}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hoardings;
