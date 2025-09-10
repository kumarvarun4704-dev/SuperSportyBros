import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Online Blood Bank Management System",
      description:
        "Blood Line is a hospital-focused blood management app that helps receptionists manage donor registrations, track blood inventory, and coordinate with other hospitals for requests and supplies. It ensures efficient donation handling and transparent communication between hospitals.",
      technologies: ["React", "Tailwind", "MongoDB Cloud", "Node.js"],
      github: "https://github.com/ChandanaRamesh27/Blood-life-Management.git",
      demo: "#",
      image: "/images/bloodd.png",
    },
    {
      title: "Data Analytics Dashboard-Blood Management Report",
      description:
        "Interactive dashboard for visualizing complex datasets with customizable charts and real-time data processing.",
      technologies: ["Looker Studio", "GCP", "Big Query"],
      demo: "https://lookerstudio.google.com/reporting/600b6831-da3e-47ba-81bf-cc0997f213a4",
      image: "/images/analysis.png",
    },
    {
      title: "Photocatalytic Air Purification System(IOT Project)",
      description:
        "Collaborative IoT project, Designed and implemented an IoT-enabled air purification system using photocatalysis (TiO₂ + UV light). The system included real-time monitoring, automation, and remote data visualization.",
      technologies: [
        "Photocatalyst Material (e.g., TiO₂-coated plate/filter)",
        "Gas Sensors (MQ-series, e.g., MQ-135)",
        "Microcontroller (ESP32/ESP8266/Arduino UNO with Wi-Fi module)",
        "Wi-Fi / Bluetooth (in ESP32/ESP8266)",
        "Mobile App",
      ],
      github: "#",
      demo: "#",
      image: "/images/Photocatalytic.png", // no image
    },
    {
  title: "Database Migration Services",
  description:
    "Data migration tasks using AWS Database Migration Service (DMS) to seamlessly transition on-premise databases to AWS.",
  technologies: ["AWS", "RDS", "EC2", "IAM roles"],
  github: "#",
  demo: "#",
  image: "/images/AWS.png", // image path
  width: 400,   // adjust as needed
  height: 250   // adjust as needed
}

  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through real-world
            applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-transparent hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Image container */}
              <div className="aspect-video bg-muted relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                    No Image Available
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.demo !== "#" && (
                    <Button
                      size="sm"
                      className="bg-gradient-primary hover:opacity-90 transition-opacity"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  {project.github !== "#" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
