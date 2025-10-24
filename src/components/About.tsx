import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <Card className="shadow-card border-border">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Backend Developer with expertise in <span className="text-primary font-semibold">Django REST Framework</span> and <span className="text-primary font-semibold">Laravel</span>, 
                specializing in scalable API development, JWT authentication, and database optimization. 
                Experienced in delivering industry-level projects for international USA clients and 
                collaborating in Agile/Scrum environments. Strong problem-solving skills with hands-on 
                experience in RESTful API design, testing, and deployment.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
