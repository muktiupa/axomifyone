import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle 
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "infoaxomify@gmail.com",
      href: "mailto:infoaxomify@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 9678979873",
      href: "tel:+919678979873"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "Kathalguri, Dhakuakhana to Machkhowa Road, Dist: Lakhimpur, Assam – 787058",
      href: "https://maps.google.com/search/Axomify+Kathalguri"
    }
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      href: "https://www.facebook.com/share/17MmL5oB84/",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter", 
      href: "https://x.com/axomify_digital?t=YxKdoX7sUqTbIun6r7dCjg&s=09",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      href: "https://www.instagram.com/axomifydigitalservice?igsh=MTB3b3Z5YmxwaGgzeQ==",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      name: "WhatsApp",
      href: "https://wa.me/919678979873",
    }
  ];

  return (
    <section id="contact" className="py-20 bg-axomify-gray-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6">
            Get In <span className="bg-gradient-hero bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-3xl mx-auto">
            Ready to start your journey with Axomify? We're here to help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-medium bg-background border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-foreground text-center">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-body font-medium">Name</Label>
                <Input 
                  id="name" 
                  placeholder="Your full name"
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-body font-medium">Email</Label>
                <Input 
                  id="email" 
                  type="email"
                  placeholder="your.email@example.com"
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject" className="font-body font-medium">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What's this about?"
                  className="font-body"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="font-body font-medium">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your project or inquiry..."
                  rows={6}
                  className="font-body"
                />
              </div>
              <Button 
                className="w-full bg-gradient-hero text-axomify-black hover:bg-axomify-yellow-dark font-heading font-semibold text-lg py-6 shadow-yellow hover:shadow-strong transition-all duration-300"
              >
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-background border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-primary group-hover:scale-110 transition-transform duration-300 mt-1">
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold font-heading text-foreground mb-2">
                          {contact.title}
                        </h3>
                        <a 
                          href={contact.href}
                          className="text-muted-foreground font-body hover:text-primary transition-colors duration-300"
                        >
                          {contact.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <Card className="bg-background border-border/50 shadow-medium">
              <CardHeader>
                <CardTitle className="text-xl font-heading text-foreground text-center">
                  Follow Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-secondary hover:bg-axomify-yellow text-secondary-foreground hover:text-axomify-black transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="bg-background border-border/50 shadow-medium">
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-axomify-gray-light to-secondary rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-heading text-foreground mb-2">Visit Our Office</h3>
                    <p className="text-muted-foreground font-body text-sm">
                      Kathalguri, Lakhimpur, Assam
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={() => window.open('https://share.google/8qTJwZC5nCaVKhdqy', '_blank')}
                    >
                      View on Maps
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;