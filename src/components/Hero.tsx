import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-axomify-gray-light pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold font-heading text-foreground leading-tight">
                One Brand –{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Infinite Possibilities
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground font-body font-light">
                Digital Marketing • Media Publishing • Skill Training • E-commerce
              </p>
              <p className="text-lg text-muted-foreground font-body max-w-2xl">
                Axomify is a multi-venture platform from Assam, India, empowering businesses, 
                individuals, and communities through innovation, creativity, and opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('#about')}
                size="lg"
                className="bg-gradient-hero text-axomify-black hover:bg-axomify-yellow-dark font-heading font-semibold text-lg px-8 py-6 shadow-yellow hover:shadow-strong transition-all duration-300 hover:scale-105"
              >
                Explore Services
              </Button>
              <Button
                onClick={() => scrollToSection('#skill-academy')}
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                Join Academy
              </Button>
              <Button
                onClick={() => scrollToSection('#mart')}
                variant="secondary"
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/80 font-heading font-semibold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              >
                Visit Mart
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-primary">3+</div>
                <div className="text-sm text-muted-foreground font-body">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-primary">4</div>
                <div className="text-sm text-muted-foreground font-body">Business Divisions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold font-heading text-primary">24/7</div>
                <div className="text-sm text-muted-foreground font-body">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong animate-float">
              <img
                src={heroImage}
                alt="Axomify - Multi-venture digital solutions"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-axomify-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-hero rounded-full shadow-yellow animate-float opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full shadow-medium animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;