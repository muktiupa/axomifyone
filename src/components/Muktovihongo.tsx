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
              src="/lovable-uploads/aebb10c1-05ac-49ec-9eb5-43d9f80ffef4.png"
              alt="Muktovihongo Logo"
              className="w-24 h-24 object-contain"
            />
          </div>
          
          {/* Content */}
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Muktovihongo
            </h2>
            
            <p className="text-white/90 text-lg mb-8 leading-relaxed">
              An Arts & Entertainment Initiative by Axomify
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
                className="bg-white text-[hsl(var(--muktovihongo-purple))] hover:bg-[hsl(var(--muktovihongo-purple))] hover:text-white transition-all duration-300 rounded-lg font-medium"
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