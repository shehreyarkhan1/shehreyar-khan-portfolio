import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const skills = {
  "Programming": ["Python", "PHP"],
  "Frameworks": ["Django", "Django REST Framework", "Laravel", "FastAPI"],
  "Databases": ["MySQL", "PostgreSQL"],
  "Tools": ["Git", "GitHub", "Postman", "Swagger"],
  "Other": ["JWT Authentication", "REST API Development", "Database Optimization"]
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Skills</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <Card className="shadow-card border-border">
            <CardContent className="p-8">
              <div className="space-y-8">
                {Object.entries(skills).map(([category, items], index) => (
                  <div 
                    key={category} 
                    className="space-y-3 animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-xl font-semibold text-primary">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary"
                          className="text-sm py-2 px-4 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
