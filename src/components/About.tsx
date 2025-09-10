import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Rocket, Heart } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Master of Computer Applications (MCA) with focus on modern software development"
    },
    {
      icon: Code,
      title: "Development",
      description: "Full-stack development with expertise in React, Node.js, and cloud technologies"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and building solutions that make a difference"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Driven by curiosity and the desire to create impactful digital experiences"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dedicated computer application Post Graduate with a passion for technology and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              As a recent Computer Application Post Graduate, I've developed a strong foundation in software 
              development, database management, and system design. My academic journey has been complemented 
              by hands-on projects and internships that have shaped my practical skills.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm particularly interested in Data Analyst, Cloud computing, and emerging 
              technologies like AI . I believe in continuous learning and staying 
              updated with the latest industry trends and best practices.
            </p>

          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-card hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;