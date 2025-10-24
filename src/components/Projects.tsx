import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, GraduationCap } from "lucide-react";

const projects = [
  {
    title: "Autopli VFS Project",
    company: "Loudly Dev Global Solution",
    description: "Developed a comprehensive vehicle dealership platform using Django REST Framework where dealers can sell vehicles. Features include advanced filtering by price categories, engine types, specifications, and vehicle functions for seamless buyer experience",
    tech: ["Django", "REST Framework", "PostgreSQL", "JWT"],
    icon: Code2
  },
  {
    title: "Royal Blue Yachts API",
    company: "Loudly Dev Global Solution",
    description: "Built a sophisticated yacht sales platform enabling dealers to list and sell yachts. Implemented advanced filtering system for engine specifications, pricing tiers, yacht categories, and technical specifications to help clients find their perfect yacht",
    tech: ["Django", "REST API", "JWT", "PostgreSQL"],
    icon: Code2
  },
  {
    title: "MaxAllowance API",
    company: "Loudly Dev Global Solution",
    description: "Developed a vehicle sales and purchasing platform using FastAPI. Features comprehensive car listing management, buying workflows, dealer operations, and optimized database queries for high-performance vehicle transactions",
    tech: ["FastAPI", "Python", "PostgreSQL", "Database Optimization"],
    icon: Code2
  },
  {
    title: "WAPDA Town Control Management",
    company: "SUIT Incubation Center",
    description: "Developed a comprehensive Control Management System for WAPDA Town Housing Society with database schema design and CRUD operations",
    tech: ["Laravel", "MySQL", "CMS"],
    icon: Database
  },
  {
    title: "Islamic Coaching Academy Platform",
    company: "SUIT Incubation Center",
    description: "Designed and developed a complete web application with attendance management, reporting system, and CMS features",
    tech: ["Laravel", "MySQL", "Reporting"],
    icon: Database
  },
  {
    title: "Automatic Question Generation System",
    type: "Final Year Project",
    description: "Developed an ML-based system using NLP, TensorFlow, and SciPy techniques for automatic question generation and testing",
    tech: ["Python", "Machine Learning", "NLP", "TensorFlow", "SciPy"],
    icon: GraduationCap
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Projects</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <Card 
                  key={index} 
                  className="shadow-card border-border hover:shadow-glow transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl">{project.title}</CardTitle>
                        <CardDescription className="mt-1">
                          {project.company || project.type}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
