const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About Me
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Python Full Stack Developer with a strong foundation in computer science 
                and a keen interest in emerging technologies. With expertise in both frontend and backend 
                development, I enjoy creating comprehensive solutions that solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My journey in technology has led me to explore various domains including IoT systems, 
                machine learning, and web development. I believe in continuous learning and staying 
                updated with the latest technological advancements.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-purple-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Development</h3>
                <p className="text-muted-foreground">
                  Building robust web applications using Python, Django, React, and modern JavaScript 
                  frameworks with focus on performance and user experience.
                </p>
              </div>
              
              <div className="border-l-4 border-lime-accent pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  Implementing IoT solutions and machine learning algorithms to create smart systems 
                  that address contemporary challenges in various industries.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-primary pl-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Problem Solving</h3>
                <p className="text-muted-foreground">
                  Analyzing complex requirements and delivering scalable solutions with clean, 
                  maintainable code and comprehensive documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;