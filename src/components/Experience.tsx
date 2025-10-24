import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Python Django & PHP Laravel Backend Developer",
    company: "Loudly Dev Global Solution",
    period: "03/2025 – Present",
    description: [
      "Developed and optimized RESTful APIs for projects including Royal Blue Yachts and Autoplai, ensuring high performance and reliability",
      "Built and optimized FastAPI solutions for the MaxAllowance project, focusing on performance and scalability",
      "Implemented authentication (JWT), dealer APIs FASTAPIS, and backend integrations",
      "Collaborated with frontend team to ensure seamless API consumption",
      "Used Git/GitHub for version control and Postman for API testing"
    ],
    current: true
  },
  {
    title: "Laravel Intern",
    company: "Softech Square Solution",
    period: "10/2024 – 03/2025",
    description: [
      "Built modules and dashboards for Laravel projects",
      "Improved project functionality through API integration and database management",
      "Assisted in testing and bug fixing to enhance performance"
    ],
    current: false
  },
  {
    title: "Software Engineer",
    company: "SUIT Incubation Center",
    period: "08/2023 – 09/2024",
    description: [
      "Developed a Control Management System for WAPDA Town Housing Society",
      "Designed database schema and implemented CRUD operations",
      "Improved data accessibility and reporting features",
      "Designed and developed a web application for an Islamic Coaching Academy",
      "Implemented attendance management, reporting system, and CMS features"
    ],
    current: false
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="shadow-card border-border hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-primary" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        <span className="text-foreground font-semibold">{exp.company}</span>
                        <span className="mx-2">•</span>
                        {exp.period}
                      </CardDescription>
                    </div>
                    {exp.current && (
                      <Badge className="bg-primary text-primary-foreground">Current</Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
