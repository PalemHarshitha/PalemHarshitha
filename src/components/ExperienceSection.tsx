import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      role: "Data Science Intern",
      company: "Skill Dzire",
      location: "Remote",
      duration: "Feb 2024 - Apr 2024",
      type: "Internship",
      description: "Gained hands-on experience in data analysis, machine learning algorithms, and data visualization techniques.",
      skills: ["Python", "Data Analysis", "Machine Learning", "Pandas", "NumPy"]
    },
    {
      role: "AI-ML Virtual Intern",
      company: "Edu Skills - AICTE",
      location: "Remote", 
      duration: "May 2023 - Jun 2023",
      type: "Virtual Internship",
      description: "Explored artificial intelligence and machine learning concepts, worked on practical projects involving neural networks and deep learning.",
      skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "TensorFlow", "Neural Networks"]
    }
  ];

  const education = [
    {
      degree: "B.Tech - Computer Science and Engineering",
      institution: "Aditya College of Engineering",
      location: "Madanapalle",
      duration: "2020-2024",
      grade: "83.4%"
    },
    {
      degree: "Intermediate - M.P.C",
      institution: "Sri Siddartha Junior College", 
      location: "Madanapalle",
      duration: "2018-2020",
      grade: "96.7%"
    },
    {
      degree: "10th Standard",
      institution: "Gnanodaya E.M High School",
      location: "",
      duration: "2018",
      grade: "9.3 CGPA"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-foreground mb-16">
            Experience & Education
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Professional Experience */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <div className="w-8 h-8 bg-purple-primary rounded-full mr-3"></div>
                Professional Experience
              </h3>
              
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index} className="border-l-4 border-purple-primary">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <CardTitle className="text-xl">{exp.role}</CardTitle>
                        <Badge variant="secondary">{exp.type}</Badge>
                      </div>
                      <CardDescription className="text-base">
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <span className="font-medium text-purple-primary">{exp.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {exp.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {exp.duration}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-8 flex items-center">
                <div className="w-8 h-8 bg-lime-accent rounded-full mr-3"></div>
                Education
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <Card key={index} className="border-l-4 border-lime-accent">
                    <CardHeader>
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <CardDescription className="text-base">
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                          <span className="font-medium text-lime-accent">{edu.institution}</span>
                          {edu.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {edu.location}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {edu.duration}
                          </span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Grade:</span>
                        <Badge className="bg-purple-primary/10 text-purple-primary hover:bg-purple-primary/20">
                          {edu.grade}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;