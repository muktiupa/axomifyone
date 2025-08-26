import { Card, CardContent } from "@/components/ui/card";
import { 
  Megaphone, 
  Newspaper, 
  GraduationCap, 
  ShoppingCart, 
  Target, 
  Users, 
  Lightbulb 
} from "lucide-react";

const About = () => {
  const divisions = [
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Axomify Digital Service",
      description: "Marketing, Designing, Printing, Web Development",
      color: "text-blue-500"
    },
    {
      icon: <Newspaper className="w-8 h-8" />,
      title: "Axomify Digital Media",
      description: "Online Publishing, Blogs, Community Features",
      color: "text-green-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Axomify Skill Academy",
      description: "Skill-building & Certification Training Programs",
      color: "text-purple-500"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Axomify Mart",
      description: "E-commerce platform for local products & printing solutions",
      color: "text-orange-500"
    }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Our Mission",
      description: "To empower businesses, individuals, and communities through innovation, creativity, and opportunities."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Our Community",
      description: "Building stronger connections across North-East India, showcasing local talents and businesses."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Our Innovation",
      description: "Driving forward with creative solutions that make a real difference in people's lives."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            About <span className="bg-gradient-hero bg-clip-text text-transparent">Axomify</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            We are a passionate team driven by innovation and creativity. Founded in 2023, 
            Axomify operates across four powerful divisions to serve diverse needs.
          </p>
        </div>

        {/* Divisions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {divisions.map((division, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50">
              <CardContent className="p-8 text-center space-y-4">
                <div className={`${division.color} flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                  {division.icon}
                </div>
                <h3 className="text-lg font-semibold font-heading text-foreground">
                  {division.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm">
                  {division.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Values Section */}
        <div className="grid lg:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div key={index} className="text-center space-y-6 animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex justify-center">
                {value.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading text-foreground">
                {value.title}
              </h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-hero rounded-2xl p-12 text-center shadow-yellow">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold font-heading text-axomify-black mb-2">2023</div>
              <div className="text-axomify-black/80 font-body">Founded</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-heading text-axomify-black mb-2">4</div>
              <div className="text-axomify-black/80 font-body">Divisions</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-heading text-axomify-black mb-2">24/7</div>
              <div className="text-axomify-black/80 font-body">Support</div>
            </div>
            <div>
              <div className="text-4xl font-bold font-heading text-axomify-black mb-2">100%</div>
              <div className="text-axomify-black/80 font-body">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;