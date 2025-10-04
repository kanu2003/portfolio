import { Code, Database, Brain, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expert in modern web technologies including HTML, CSS, JavaScript, Node.js, and Flask"
    },
    {
      icon: Database,
      title: "Database Design", 
      description: "Skilled in MySQL schema design, CRUD operations, and data normalization"
    },
    {
      icon: Brain,
      title: "AI & Computer Vision",
      description: "Experience with OpenCV, OCR, YOLO models, and intelligent automation systems"
    },
    {
      icon: Zap,
      title: "Problem Solver",
      description: "Passionate about building efficient, scalable solutions for real-world challenges"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold mb-6">
                Crafting Digital Solutions with Passion
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a skilled developer with hands-on experience across designing, frontend, Python, 
                AI/ML, IoT and Java. With a proven ability to design and implement user-friendly 
                interfaces, intelligent systems, and connected devices.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm passionate about building efficient, scalable solutions that blend technology 
                and creativity to solve real-world problems across diverse platforms and domains. 
                My approach combines technical expertise with creative problem-solving to deliver 
                impactful results.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                As a final-year B.Tech student, I bring fresh perspectives and cutting-edge 
                knowledge to every project, always staying current with the latest technological 
                advancements and industry best practices.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-glow transition-all duration-300 bg-gradient-card border-0">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <highlight.icon className="h-8 w-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;