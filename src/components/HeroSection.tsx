import { Button } from "@/components/ui/button";
import { Mail, Phone, Download } from "lucide-react";
// Using a placeholder for the profile photo - you can replace this with your actual photo
const profilePhotoUrl = "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This would typically download a PDF resume
    window.print();
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-primary to-purple-primary/80"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-lime-accent/30 rounded-lg rotate-12"></div>
      <div className="absolute bottom-20 left-20 w-16 h-16 border-2 border-lime-accent/30 rounded-lg -rotate-12"></div>
      <div className="absolute top-1/2 right-10 w-4 h-4 bg-lime-accent rounded-full"></div>
      <div className="absolute top-1/3 left-10 w-2 h-2 bg-lime-accent rounded-full"></div>
      <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-lime-accent rounded-full"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-5xl lg:text-7xl font-bold text-text-light mb-6 leading-tight">
              Python Full Stack
              <span className="block text-lime-accent">Developer.</span>
            </h1>
            
            <p className="text-xl text-text-light/90 mb-8 leading-relaxed max-w-lg">
              I like to craft scalable and efficient applications with great user experiences using modern technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2 text-lime-accent">
                <span className="text-sm">Specialized in IoT systems and web development.</span>
              </div>
              <div className="flex items-center gap-2 text-lime-accent">
                <span className="text-sm">Experience in machine learning and data science.</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-lime-accent text-purple-primary hover:bg-lime-accent/90 px-8 py-3 text-lg font-semibold"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={downloadResume}
                className="border-text-light text-text-light hover:bg-text-light hover:text-purple-primary px-8 py-3 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
          
          {/* Right content - Profile photo */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border-4 border-lime-accent/30 shadow-2xl">
                <img 
                  src={profilePhotoUrl} 
                  alt="Palem Harshitha" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-accent rounded-lg opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;