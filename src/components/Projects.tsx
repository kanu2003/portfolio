import { ExternalLink , Github, Globe, Eye, Zap, Brain, MessageCircle, Shield, Camera, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Dynamic Form-Based Checksheet System",
      description: "A comprehensive fullstack application where multiple structured inspection sheets can be rendered, filled, submitted, viewed, and approved — all from a single dynamic system.",
      longDescription: "Engineered a dynamic form rendering engine using JavaScript and JSON configuration files. Designed a normalized MySQL schema for multi-level form data with a robust Node.js/Express backend featuring session-based authentication and approval workflows.",
      icon: Globe,
      status: "Hosted Live",
      achievements: [
        "Dynamic form rendering engine with JSON configuration",
        "Normalized MySQL schema for complex form data",
        "Session-based authentication system",
        "Approval workflow for authorized users",
        "Successfully deployed on live server"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MySQL", "JSON"],
      tags: ["Web App", "Full-Stack", "Database", "Automation"],
      color: "from-blue-500 to-cyan-500",
      featured: true,
      githubUrl : "https://github.com/kanu2003/task-manager-checksheet"
    },
    {
      title: "OCR-Based Aadhaar & PAN Autofill + Verification",
      description: "Intelligent document processing system using OCR to extract user information from Aadhaar or PAN card images and automatically validate form data.",
      longDescription: "Developed a Flask backend with OpenCV for image preprocessing and pytesseract for accurate text extraction. Implemented sophisticated Regular Expressions and NLP logic for data parsing with AJAX-based asynchronous processing.",
      icon: Brain,
      achievements: [
        "Advanced OCR with OpenCV preprocessing",
        "Custom Regular Expressions for data extraction",
        "Real-time Name, DOB, and ID parsing",
        "AJAX-based asynchronous image processing",
        "Automated verification and correction mechanism"
      ],
      technologies: ["Python", "Flask", "OpenCV", "pytesseract", "Regular Expressions", "HTML", "JavaScript"],
      tags: ["AI", "Computer Vision", "Web App", "Automation"],
      color: "from-purple-500 to-pink-500",
      githubUrl : "https://github.com/kanu2003/-Intelligent-KYC-Automation-with-Python-OCR"
    },
    {
      title: "Mesh It Up - Real-Time Communication Web App",
      description: "A comprehensive real-time collaboration platform enabling seamless communication, file sharing, and device tracking over LAN or internet.",
      longDescription: "Built using Flask-Socket.IO to manage device connections, broadcast messages, and route private chats. Features secure file sharing, responsive design with dark/light themes, and auto-scrolling chat windows.",
      icon: MessageCircle,
      achievements: [
        "Real-time communication with Flask-Socket.IO",
        "Secure file-sharing module implementation",
        "Device connection and tracking system",
        "Responsive UI with toggleable themes",
        "Auto-scrolling chat interface"
      ],
      technologies: ["Python", "Flask", "Flask-Socket.IO", "HTML", "CSS", "JavaScript"],
      tags: ["Web App", "Real-Time", "Communication"],
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Water Detection System with Automation",
      description: "IoT-based water detection system with automated web responses, email alerts, and WhatsApp notifications using computer vision and web automation.",
      longDescription: "Utilizes OpenCV for real-time water detection via camera feed. Automates web UI actions with Selenium WebDriver and provides instant multi-channel alerts through PyAutoGUI and email integration.",
      icon: Shield,
      achievements: [
        "Real-time water detection with OpenCV",
        "Automated web UI interactions via Selenium",
        "Multi-channel alert system (Email + WhatsApp)",
        "Computer vision-based leak detection",
        "Instant notification system integration"
      ],
      technologies: ["Python", "OpenCV", "Selenium", "PyAutoGUI", "smtplib"],
      tags: ["IoT", "Automation", "Computer Vision", "Alerting"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "ANPR - Automatic Number Plate Recognition",
      description: "Advanced computer vision system for automatic license plate detection and recognition with intelligent form autofill capabilities.",
      longDescription: "Implemented OpenCV for image preprocessing and plate detection using contour filtering. Integrated pytesseract for accurate license plate number extraction with seamless form autofill functionality.",
      icon: Camera,
      achievements: [
        "Advanced image preprocessing with OpenCV",
        "Contour-based plate detection algorithm",
        "High-accuracy number extraction with pytesseract",
        "Automated form field population",
        "Optimized for maintenance sheet workflows"
      ],
      technologies: ["Python", "OpenCV", "pytesseract", "Image Processing"],
      tags: ["AI", "Computer Vision", "Automation"],
      color: "from-orange-500 to-red-500",
      githubUrl : "https://github.com/kanu2003/ANPR/tree/main"
    },
    {
      title: "Simple Object Detection System",
      description: "Real-time object detection system capable of identifying common objects like bottles, phones, and people using pre-trained models.",
      longDescription: "Features real-time webcam processing with OpenCV, integrated Haar Cascades and YOLO-tiny models for accurate detection, and live bounding box visualization with object labels.",
      icon: Target,
      achievements: [
        "Real-time webcam frame processing",
        "Integration of YOLO and Haar Cascade models",
        "Live bounding box and label visualization",
        "Multi-object detection capabilities",
        "Foundational computer vision implementation"
      ],
      technologies: ["Python", "OpenCV", "YOLO"],
      tags: ["AI", "Computer Vision"],
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of real-world applications showcasing my expertise in full-stack development, 
              AI/ML, automation, and innovative problem-solving
            </p>
          </div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className={`group hover:shadow-glow transition-all duration-500 bg-gradient-card border-0 hover:scale-[1.02] ${
                  project.featured ? 'ring-2 ring-primary/20' : ''
                }`}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex items-start space-x-4">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${project.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <project.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                          {project.status && (
                            <Badge className="bg-success text-success-foreground">
                              {project.status}
                            </Badge>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Key Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Achievements
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2 text-sm">
                          <Zap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="bg-muted/30 border-muted-foreground/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Tags and Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          className={`bg-gradient-to-r ${project.color} text-white border-0`}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                       {/* Check if githubUrl exists before rendering */}
                        {project.githubUrl && (
                          <a href={project.githubUrl} 
                              target="_blank" 
                              rel="noopener noreferrer">
                            <Button size="sm" variant="outline" className="group/btn">
                            <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                            Code
                            </Button>
                          </a>
                        )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <Card className="bg-gradient-card border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">Interested in My Work?</h3>
                <p className="text-muted-foreground mb-6">
                  I'm always excited to discuss new projects and opportunities. Let's build something amazing together!
                </p>
                <Button 
                  size="lg"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-gradient-primary hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Let's Talk
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;