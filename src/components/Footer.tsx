import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 border-t border-border noise">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">STUDIO</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              Pushing the boundaries of digital creativity to craft experiences that inspire and transform.
            </p>
            <div className="flex gap-4">
              {[Github, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {["About", "Careers", "Blog", "Press"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {["Web Design", "Development", "Branding", "Marketing"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Studio. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
