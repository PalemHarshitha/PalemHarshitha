import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Zap } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Python Development",
      icon: <Code className="h-6 w-6" />,
      color: "purple-primary",
      skills: [
        { name: "Control Flow & Loops", level: 90 },
        { name: "Functions & Modules", level: 85 },
        { name: "OOP Concepts", level: 80 },
        { name: "Data Structures", level: 85 },
        { name: "String Manipulation", level: 90 },
        { name: "Exception Handling", level: 85 },
        { name: "File Handling", level: 80 }
      ],
      libraries: ["math", "datetime", "random", "pandas", "numpy"]
    },
    {
      title: "Database & SQL",
      icon: <Database className="h-6 w-6" />,
      color: "lime-accent",
      skills: [
        { name: "SQL Statements", level: 85 },
        { name: "Queries & Sub-queries", level: 80 },
        { name: "Database Normalization", level: 75 },
        { name: "Database Design", level: 80 }
      ],
      libraries: ["MySQL", "PostgreSQL", "SQLite"]
    },
    {
      title: "Web Technologies",
      icon: <Globe className="h-6 w-6" />,
      color: "purple-primary",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3 & Styling", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "Responsive Design", level: 85 }
      ],
      libraries: ["React", "Bootstrap", "Tailwind CSS"]
    },
    {
      title: "Emerging Technologies",
      icon: <Zap className="h-6 w-6" />,
      color: "lime-accent",
      skills: [
        { name: "IoT Systems", level: 80 },
        { name: "Machine Learning", level: 75 },
        { name: "Data Science", level: 70 },
        { name: "AI Applications", level: 70 }
      ],
      libraries: ["TensorFlow", "Scikit-learn", "Arduino", "Raspberry Pi"]
    }
  ];

  const certifications = [
    {
      title: "Python Full Stack Development Course",
      provider: "Pyspiders",
      year: "2024"
    },
    {
      title: "Crash Python Course",
      provider: "Coursera by Google", 
      year: "2023"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and proficiency levels 
              across various programming languages and technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="border-2 hover:border-purple-primary/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 bg-${category.color}/10 rounded-lg text-${category.color}`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Skills with Progress Bars */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>

                  {/* Related Libraries/Tools */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Libraries & Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.libraries.map((lib, libIndex) => (
                        <Badge key={libIndex} variant="outline" className="text-xs">
                          {lib}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div className="bg-background rounded-lg p-8 border-2 border-purple-primary/20">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Certifications & Courses
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="border border-lime-accent/30">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription className="flex justify-between items-center">
                      <span className="text-lime-accent font-medium">{cert.provider}</span>
                      <Badge variant="secondary">{cert.year}</Badge>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>

          {/* Professional Statement */}
          <div className="text-center mt-16 bg-purple-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Continuous Learning
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I believe in staying updated with the latest technological advancements and continuously 
              expanding my skill set. My approach to problem-solving combines theoretical knowledge 
              with practical implementation, enabling me to deliver robust and scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;