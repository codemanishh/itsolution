const Campus = () => {
  return (
    <section className="py-12 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Our Campus</h2>
        <p className="text-slate-300 text-center mb-10 max-w-2xl mx-auto">
          State-of-the-art facilities designed to provide an optimal learning environment
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-lg h-64">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop&auto=format&q=80" 
              alt="Campus Building" 
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-lg h-64">
            <img 
              src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=600&h=400&fit=crop&auto=format&q=80" 
              alt="Computer Lab" 
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
            />
          </div>
          <div className="overflow-hidden rounded-lg h-64">
            <img 
              src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&h=400&fit=crop&auto=format&q=80" 
              alt="Typing Class" 
              className="w-full h-full object-cover transition duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campus;
