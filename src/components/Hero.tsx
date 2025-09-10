import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import profileImage from "@/assets/profile-avatar.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border--2 sm:border-10 border-primary shadow-glow">
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Chandana Ramesh
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6">
            Post Graduate-Computer Application 
            <h2>Data Analyst</h2>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            “Turning Data into Decisions, Cloud into Scale, and AI into Reality.”
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {/* ✅ GitHub */}
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a
                href="https://github.com/ChandanaRamesh27"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>

            {/* ✅ LinkedIn */}
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a
                href="https://www.linkedin.com/in/chandana-ramesh-5b77162b4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>

            {/* ✅ Mail button */}
            <Button variant="ghost" size="icon" className="hover:text-primary" asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=chandanaramesh2711@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>

            {/* ✅ Download Resume button */}
            <Button
              variant="ghost"
              size="icon"
              className="hover:text-primary"
              asChild
            >
              <a href="/chandana.pdf" download>
                <Download className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
