import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  MessageCircle 
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Digital Service", href: "#digital-service" },
    { label: "Digital Media", href: "#digital-media" },
    { label: "Skill Academy", href: "#skill-academy" },
    { label: "Mart", href: "#mart" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Social Media Management",
    "Website Development",
    "Graphic Design",
    "Printing Solutions",
    "Content Creation",
    "Skill Training"
  ];

  const socialLinks = [
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "#",
      name: "Facebook"
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "#", 
      name: "Twitter"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "#",
      name: "Instagram"
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      href: "https://wa.me/919678979873",
      name: "WhatsApp"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-axomify-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center shadow-yellow">
                <span className="text-axomify-black font-bold text-2xl font-heading">A</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-heading">Axomify</h3>
                <p className="text-axomify-yellow text-sm font-body">Creating Minds, Smart Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 font-body leading-relaxed">
              Axomify is a multi-venture platform from Assam, India, empowering businesses, 
              individuals, and communities through innovation, creativity, and opportunities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-axomify-gray hover:bg-axomify-yellow hover:text-axomify-black rounded-lg transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold font-heading mb-6 text-axomify-yellow">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-axomify-yellow transition-colors duration-300 font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold font-heading mb-6 text-axomify-yellow">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 font-body">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold font-heading mb-6 text-axomify-yellow">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-axomify-yellow mt-1 flex-shrink-0" />
                <a 
                  href="mailto:infoaxomify@gmail.com"
                  className="text-gray-300 hover:text-axomify-yellow transition-colors font-body"
                >
                  infoaxomify@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-axomify-yellow mt-1 flex-shrink-0" />
                <a 
                  href="tel:+919678979873"
                  className="text-gray-300 hover:text-axomify-yellow transition-colors font-body"
                >
                  +91 9678979873
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-axomify-yellow mt-1 flex-shrink-0" />
                <span className="text-gray-300 font-body text-sm">
                  Kathalguri, Dhakuakhana to Machkhowa Road, 
                  Dist: Lakhimpur, Assam – 787058
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-axomify-gray mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-body text-center md:text-left">
              © 2025 Axomify. All Rights Reserved.
            </p>
            <p className="text-axomify-yellow font-body font-medium text-center md:text-right">
              "Creating Minds, Smart Solutions"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;