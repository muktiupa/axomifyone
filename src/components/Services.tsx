import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Palette, 
  PrinterIcon, 
  Globe, 
  PenTool,
  Newspaper,
  Camera,
  BookOpen,
  Award,
  Laptop,
  ShoppingBag,
  Package 
} from "lucide-react";

const Services = () => {
  const digitalServices = [
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Social Media Management",
      description: "Campaigns, Ads, Branding"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Website Development & UI/UX",
      description: "Modern, user-friendly designs"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Graphic Design",
      description: "Logos, Flyers, Brochures, Branding Kits"
    },
    {
      icon: <PrinterIcon className="w-6 h-6" />,
      title: "Printing Solutions",
      description: "Offset print, digital print, flex banners, polymer stamps"
    }
  ];

  const mediaServices = [
    {
      icon: <Newspaper className="w-6 h-6" />,
      title: "Digital Publishing",
      description: "Non-political, informative content platform"
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Content Creation",
      description: "Articles, blogs, news updates, community stories"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Multimedia Content",
      description: "Graphics, videos, visual storytelling"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Community Showcase",
      description: "North-East India businesses & talents"
    }
  ];

  const academyCourses = [
    "Certification in Computer Application",
    "DTP / Printing & Publishing", 
    "Adobe Photoshop Basics",
    "Canva Design Course",
    "PageMaker Course",
    "MS Word Course",
    "Typing (English & Assamese)",
    "Social Media Management"
  ];

  const martProducts = [
    {
      icon: <PrinterIcon className="w-6 h-6" />,
      title: "Customized Printing",
      description: "Cards, Flyers, Banners"
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Local Products",
      description: "Supporting local businesses"
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Digital Products",
      description: "Online solutions and services"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Digital Service */}
      <section id="digital-service" className="py-20 bg-axomify-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Digital Service</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Marketing & Printing Solutions for Your Business Growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {digitalServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-background border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground font-body">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-background rounded-2xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold font-heading text-foreground mb-6 text-center">Why Choose Us?</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold font-heading text-primary mb-2">3+</div>
                <div className="text-muted-foreground font-body">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-primary mb-2">24/7</div>
                <div className="text-muted-foreground font-body">Customer Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-heading text-primary mb-2">100%</div>
                <div className="text-muted-foreground font-body">Quality Driven</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Media */}
      <section id="digital-media" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Digital Media</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Publishing & Content Creation Platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaServices.map((service, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg font-heading">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground font-body">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Academy */}
      <section id="skill-academy" className="py-20 bg-axomify-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Skill Academy</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              Training & Certification Programs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold font-heading text-foreground mb-8">Upcoming Courses</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {academyCourses.map((course, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-body text-foreground">{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h3 className="text-2xl font-bold font-heading text-foreground mb-6">Why Join Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold font-heading text-foreground">Govt. Registered (MSME)</h4>
                    <p className="text-muted-foreground font-body">Officially recognized training institute</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Laptop className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold font-heading text-foreground">Hands-on Learning</h4>
                    <p className="text-muted-foreground font-body">Practical, industry-relevant curriculum</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold font-heading text-foreground">Certification</h4>
                    <p className="text-muted-foreground font-body">Recognized certificates upon completion</p>
                  </div>
                </div>
              </div>
              <Button className="w-full mt-8 bg-gradient-hero text-axomify-black hover:bg-axomify-yellow-dark font-heading font-semibold shadow-yellow">
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mart */}
      <section id="mart" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
              <span className="bg-gradient-hero bg-clip-text text-transparent">Axomify Mart</span>
            </h2>
            <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
              E-commerce Platform - Coming Soon
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {martProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <CardTitle className="text-lg font-heading">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground font-body">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-gradient-hero rounded-2xl p-12 shadow-yellow">
            <h3 className="text-3xl font-bold font-heading text-axomify-black mb-4">Coming Soon</h3>
            <p className="text-xl text-axomify-black/80 font-body mb-8">
              Simple, Secure, User-Friendly Online Store
            </p>
            <Button 
              variant="secondary"
              size="lg"
              className="bg-axomify-black text-axomify-yellow hover:bg-axomify-gray font-heading font-semibold"
            >
              Notify Me
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;