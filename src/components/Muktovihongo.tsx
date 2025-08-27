import { Button } from "@/components/ui/button";

const Muktovihongo = () => {
  const handleButtonClick = () => {
    window.open('https://www.facebook.com/share/19gUk3MK2S/', '_blank');
  };

  return (
    <section className="py-16 animate-fade-in" style={{ background: 'var(--gradient-muktovihongo)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Logo with round white background */}
          <div className="bg-white rounded-full p-4 shadow-lg">
            <img 
              src="/lovable-uploads/4f5c9224-47e9-4c70-a5e0-9f25a27ac671.png"
              alt="Muktovihongo Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          
          {/* Content */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              MUKTOVIHONGO
            </h2>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              An Arts & Entertainment Initiative by <span className="font-bold">Axomify</span>
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[hsl(var(--muktovihongo-purple))] hover:bg-[hsl(var(--muktovihongo-purple))] hover:text-white transition-all duration-300 rounded-lg font-medium"
                onClick={handleButtonClick}
              >
                Follow Us
              </Button>
              <Button
                size="lg"
                className="bg-[hsl(var(--axomify-yellow))] text-[hsl(var(--muktovihongo-purple))] hover:scale-105 hover:shadow-lg transition-all duration-300 rounded-lg font-medium"
                onClick={handleButtonClick}
              >
                Explore Muktovihongo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Muktovihongo;