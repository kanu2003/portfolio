import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Brand Section */}
            <div>
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                Kanishka Maurya
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Full-Stack Developer passionate about creating innovative solutions 
                that make a difference in the real world.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(`#${item.toLowerCase()}`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="font-semibold mb-4">Let's Connect</h3>
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <a 
                  href="https://github.com/kanu2003" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/20 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/kanishka-maurya-1a9656277" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-muted/20 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="mailto:kanishkamaurya003@gmail.com"
                  className="p-2 rounded-full bg-muted/20 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Available for freelance projects and full-time opportunities.
              </p>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Kanishka Maurya.  Let's build something great together!
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;