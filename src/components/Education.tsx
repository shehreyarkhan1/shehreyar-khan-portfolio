import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full" />
          </div>
          
          <div className="space-y-6">
            <Card className="shadow-card border-border">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">BS Software Engineering</CardTitle>
                    <CardDescription className="text-base mt-1">
                      Sarhad University of Science & IT, Peshawar
                    </CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      Graduated Oct 2024
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="shadow-card border-border">
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-secondary/10">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl">Additional Coursework</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-semibold text-foreground">Web Design and Development</span> — 2023</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-semibold text-foreground">AI Chatbot Development</span> — 2024</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
