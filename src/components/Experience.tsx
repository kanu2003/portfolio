import { Building, Calendar, MapPin, Award, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      company: "Jindal Steel & Power",
      position: "Technical Intern",
      duration: "July 6, 2025 - August 31, 2025",
      location: "Raigarh, India",
      type: "Internship",
      description: "Engineered and implemented a dynamic form-based system to streamline data collection and approvals, complemented by a computer vision tool for automated data entry and verification.",
      achievements: [
        "Developed a full-stack checksheet system with a Node.js and Express.js backend and a responsive UI using HTML, CSS, and JavaScript. ",
        "Created a dynamic form rendering engine using JSON configuration files to support multiple structured inspection sheets from a single system. ",
        "Designed and implemented a role-based approval system to allow logged-in approvers to review, verify, and approve filled forms. ",
        "Built an ANPR tool that uses OpenCV for image processing and Tesseract for OCR to automatically extract vehicle number plates from images. ",
        "Integrated the ANPR functionality to autofill form fields, reducing manual data entry errors and speeding up the verification process. "
      ],
      technologies: ["Node.js", "Express.js", "MySQL", "Python", "OpenCV", "Tesseract OCR", "HTML", "CSS", "JavaScript"],
      color: "from-yellow-600 to-orange-600"
    },
    {
      company: "Jindal Steel & Power",
      position: "Project Intern",
      duration: "Nov 18, 2024 - Feb 20, 2025",
      location: "Raigarh, India",
      type: "Project", // Choose appropriate type
      description: "A real-time, automated alert system that uses a camera feed to detect water presence in critical areas, and triggers instant notifications and web actions to mitigate potential issues.",
      achievements: [
        "Developed a computer vision system using OpenCV to analyze real-time video for water detection via color masking and contour analysis.",
        "Integrated web automation with Selenium to perform UI actions like logging into a dashboard or updating water status on a cloud platform.",
        "Engineered an instant alerting module that sends notifications via WhatsApp using PyAutoGUI and email using smtplib.",
        "Optimized the system for continuous monitoring to reduce manual oversight and prevent costly downtime in industrial settings."
      ],
      technologies: ["Python", "OpenCV", "Selenium", "PyAutoGUI", "smtplib"],
      color: "from-red-600 to-orange-600" // Choose new gradient colors
    },
    {
      company: "Jindal Steel & Power",
      position: "Technical Intern",
      duration: "Summer 2024",
      location: "India",
      type: "Internship",
      description: "Contributed to industrial automation and process optimization projects, gaining hands-on experience with enterprise-level systems and manufacturing processes.",
      achievements: [
        "Worked on industrial automation systems",
        "Contributed to process optimization initiatives", 
        "Gained experience with enterprise-level technologies",
        "Collaborated with cross-functional engineering teams",
        "Developed solutions for manufacturing efficiency"
      ],
      technologies: ["Industrial Systems", "Automation", "Process Optimization", "Enterprise Software"],
      color: "from-blue-600 to-indigo-600"
    },
    
    {
      company: "Prodigy Infotech",
      position: "Web Development Intern",
      duration: "Summer 2024",
      location: "Online",
      type: "Internship",
      description: "Completed an online internship focused on foundational frontend and basic backend development, applying learned skills to build multiple interactive web applications.",
      achievements: [
        "Developed foundational skills in frontend development, creating functional and responsive web pages.",
        "Built a Weather Forecast application, demonstrating proficiency in working with APIs to fetch and display dynamic data.",
        "Engineered a To-Do App, showcasing core web development concepts like state management and local data persistence.",
        "Created a Simon Says game, applying event handling and game logic to build an interactive user experience."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "REST APIs", "DOM Manipulation"],
      color: "from-purple-600 to-pink-600"
    }
  ];

  const education = [
    {
      institution: "OP Jindal University",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      duration: "2022 - 2026",
      status: "Final Year",
      description: "Comprehensive curriculum covering software engineering, algorithms, data structures, AI/ML, and modern development practices.",
      highlights: [
        "Strong foundation in Computer Science fundamentals",
        "Specialized in Full-Stack Web Development",
        "Active participation in hackathons and coding competitions",
        "Focus on practical project-based learning",
        "Leadership roles in technical societies"
      ],
      color: "from-purple-600 to-pink-600"
    },
    {
      institution: "Jindal Adarsh Garam Bharti Higher Sec. School",
      degree: "Higher Secondary Education",
      field: "Science Stream",
      duration: "2019 - 2022",
      description: "Strong academic foundation in Mathematics, Physics, and Computer Science, preparing for engineering studies.",
      highlights: [
        "Excellent performance in Mathematics and Sciences",
        "Early exposure to programming concepts",
        "Participated in various science competitions",
        "Developed analytical and problem-solving skills"
      ],
      color: "from-green-600 to-teal-600"
    }
  ];

  const achievements = [
    {
      title: "Hackathon Winner",
      description: "Multiple successful participations in coding competitions and hackathons",
      icon: Award,
      color: "text-yellow-500"
    },
    {
      title: "Technical Certifications",
      description: "Industry-recognized certifications in web development and programming",
      icon: TrendingUp,
      color: "text-blue-500"
    },
    {
      title: "Team Leadership",
      description: "Led development teams in various project initiatives",
      icon: Users,
      color: "text-green-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Experience & <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional journey and academic background that shaped my expertise
            </p>
          </div>

          {/* Professional Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Building className="h-6 w-6 mr-3 text-primary" />
              Professional Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card key={index} className="mb-6 hover:shadow-glow transition-all duration-300 bg-gradient-card border-0">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.position}</CardTitle>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center">
                          <Building className="h-4 w-4 mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`bg-gradient-to-r ${exp.color} text-white border-0 mt-4 md:mt-0`}>
                      {exp.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Key Contributions
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                      Technologies & Skills
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-muted/50">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <Award className="h-6 w-6 mr-3 text-accent" />
              Education
            </h3>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-glow transition-all duration-300 bg-gradient-card border-0">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    {edu.field && (
                      <p className="text-muted-foreground">{edu.field}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="font-medium text-sm">{edu.institution}</span>
                      <div className="flex items-center gap-2">
                        <Badge className={`bg-gradient-to-r ${edu.color} text-white border-0`}>
                          {edu.duration}
                        </Badge>
                        {edu.status && (
                          <Badge variant="outline" className="border-primary text-primary">
                            {edu.status}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {edu.description}
                    </p>
                    
                    <div>
                      <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">
                        Key Highlights
                      </h4>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, highlightIndex) => (
                          <li key={highlightIndex} className="flex items-start space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Activities & Achievements */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <TrendingUp className="h-6 w-6 mr-3 text-success" />
              Activities & Achievements
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center hover:shadow-glow transition-all duration-300 bg-gradient-card border-0 group">
                  <CardContent className="p-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
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

export default Experience;