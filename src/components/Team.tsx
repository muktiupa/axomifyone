import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Team = () => {
  const teamMembers = [
    {
      name: "Tultul (Dhan) Phukan",
      role: "Founder & Director",
      initials: "TP"
    },
    {
      name: "Mukti Upadhyay", 
      role: "Web & Graphics Designer",
      initials: "MU"
    },
    {
      name: "Arup Nirala",
      role: "Web Developer & UX/UI Designer", 
      initials: "AN"
    },
    {
      name: "Prasurja Bora",
      role: "News Editor & Social Media Manager",
      initials: "PB"
    },
    {
      name: "Rupjyoti Borah",
      role: "Social Media Desk Team",
      initials: "RB"
    }
  ];

  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 border"
            >
              <CardContent className="p-4 text-center">
                <div className="flex justify-center mb-4">
                  <Avatar className="w-20 h-20">
                    <AvatarFallback className="bg-gradient-to-br from-axomify-primary to-axomify-secondary text-white font-semibold text-lg">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-base text-muted-foreground">
                  {member.role}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;