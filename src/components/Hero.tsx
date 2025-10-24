import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Linkedin, Github } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10 animate-fade-in">
        <div className="max-w-4xl mx-auto text-center space-y-8 pt-24">
          <div className="flex justify-center mb-8">
            <img 
              src={profileImage} 
              alt="Shehreyar Khan - Backend Developer" 
              className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-glow"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Shehreyar Khan
            </h1>
            <div className="h-1 w-32 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Backend Developer | Django | FastAPI | Laravel | REST APIs | Database Optimization
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary" />
              Shehreyar882@gmail.com
            </span>
            <span>•</span>
            <span>Lahore, Punjab Pakistan</span>
          </div>
          
          <div className="flex gap-4 justify-center pt-4">
            <Button 
              variant="default" 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection("experience")}
            >
              View Work
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://linkedin.com/in/shehreyar-khan-b8ba801a0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:Shehreyar882@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </section>
  );
};

export default Hero;
