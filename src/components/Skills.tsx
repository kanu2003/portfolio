import { 
  Code, 
  Database, 
  Brain, 
  Smartphone, 
  Globe, 
  Zap,
  Cpu,
  Monitor,
  Server,
  GitBranch,
  Palette,
  Settings
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      icon: Globe,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Server,
      title: "Backend Development", 
      skills: ["Node.js", "Express.js", "Flask", "Python", "Session Authentication", "RESTful APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Database & Storage",
      skills: ["MySQL", "Schema Design", "CRUD Operations", "Data Normalization", "Google Drive API"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Brain,
      title: "AI & Computer Vision",
      skills: ["OpenCV", "OCR", "pytesseract", "YOLO", "Image Processing", "Pattern Recognition"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Automation & Testing",
      skills: ["Selenium WebDriver", "PyAutoGUI", "Web Scraping", "Automated Testing", "Process Automation"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Smartphone,
      title: "Real-Time & IoT",
      skills: ["Flask-SocketIO", "Real-time Communication", "IoT Systems", "Device Integration", "Live Notifications"],
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java", "C Language", "Regular Expressions", "JSON"],
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: GitBranch,
      title: "Tools & Workflow",
      skills: ["Git/GitHub", "SMTP", "Figma", "Problem Solving", "Time Management", "Adaptability"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit of technologies and frameworks I use to build innovative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-glow transition-all duration-500 bg-gradient-card border-0 hover:scale-[1.02]"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-muted/50 hover:bg-primary/10 transition-colors duration-300 text-sm"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills Summary */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-card border-0 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Core Competencies</h3>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Monitor className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <h4 className="font-semibold mb-1">UI/UX Design</h4>
                    <p className="text-sm text-muted-foreground">Responsive Design, Figma</p>
                  </div>
                  <div>
                    <Cpu className="h-8 w-8 mx-auto mb-2 text-accent" />
                    <h4 className="font-semibold mb-1">System Architecture</h4>
                    <p className="text-sm text-muted-foreground">Scalable Solutions, Clean Code</p>
                  </div>
                  <div>
                    <Settings className="h-8 w-8 mx-auto mb-2 text-success" />
                    <h4 className="font-semibold mb-1">DevOps & Cloud</h4>
                    <p className="text-sm text-muted-foreground">Cloud Computing, Data Visualization</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;