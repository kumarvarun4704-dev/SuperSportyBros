import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Python", "Java", "Express.js"],
    },
    {
      title: "Database & Cloud",
      skills: ["MySQL", "MongoDB", "AWS", "Google Cloud"],
    },
    {
      title: "Tools & Others",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Figma",
        "Postman",
        "Linux",
        "Agile/Scrum",
        "Looker Studio",
      ],
    },
  ];

  const professionalSkills = [
    {
      title: "National Level Sports Player",
      skills: ["Under 19", "Karnataka", "Tug Of War TWFI"],
    },
    {
      title: "NCC",
      skills: ["C-Certificate", "Army Wing", "Sergeant"],
    },
    {
      title: "Generative AI",
      skills: ["Quantum Computing", "Application"],
    },
    {
      title: "AI: Human-Robot",
      skills: ["Interaction", "Emotional Adaptability", "NLP-Bert"],
    },
  ];

  return (
    <>
      {/* Technical Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through academic learning and practical application
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-center text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Skills Section */}
      <section id="professional-skills" className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
              Certifications and Research
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             “Certified in Leadership & Innovation | Researcher in AI & Robotics”
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professionalSkills.map((category, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <CardTitle className="text-lg text-center text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
