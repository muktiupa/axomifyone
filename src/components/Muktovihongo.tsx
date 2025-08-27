import { Button } from "@/components/ui/button";

const Muktovihongo = () => {
  return (
    <section className="py-16 animate-fade-in" style={{ background: 'var(--gradient-muktovihongo)' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Side - Logo */}
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
            <img 
              src="/lovable-uploads/aebb10c1-05ac-49ec-9eb5-43d9f80ffef4.png"
              alt="Muktovihongo Logo"
              className="max-w-[150px] w-full h-auto object-contain"
            />
          </div>
          
          {/* Right Side - Content */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Muktovihongo – Arts & Entertainment
            </h2>
            
            <p className="text-white/90 text-md mb-6 leading-relaxed">
              A creative platform by Axomify for arts, culture & entertainment.
            </p>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white bg-transparent hover:bg-white hover:text-purple-600 transition-all duration-300"
              onClick={() => window.open('https://www.facebook.com/share/19gUk3MK2S/', '_blank')}
            >
              Explore Muktovihongo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Muktovihongo;