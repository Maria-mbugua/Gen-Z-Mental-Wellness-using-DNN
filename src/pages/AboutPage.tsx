import { motion } from "framer-motion";
import { Award, Users, Target, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";

const team = [
  {
    name: "Alexandra Chen",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Visionary leader with 15+ years shaping digital experiences.",
  },
  {
    name: "Marcus Williams",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Award-winning designer pushing creative boundaries.",
  },
  {
    name: "Elena Rodriguez",
    role: "Head of Technology",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Tech innovator building scalable solutions.",
  },
  {
    name: "David Park",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Full-stack expert crafting seamless experiences.",
  },
  {
    name: "Sarah Mitchell",
    role: "UX Director",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop",
    bio: "Human-centered design advocate and researcher.",
  },
  {
    name: "James Thompson",
    role: "Motion Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Bringing brands to life through animation.",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue perfection in every pixel, every line of code, and every interaction we create.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great work is born from great partnerships. We work alongside our clients as true partners.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're driven by an unwavering love for what we do and the impact we create.",
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We constantly push boundaries, exploring new technologies and creative approaches.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden noise">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute top-1/4 left-1/3 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[150px]"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">About Us</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-4 mb-6">
              We Are <span className="text-gradient">Dreamers</span> & Makers
            </h1>
            <p className="text-muted-foreground text-xl">
              A collective of passionate creators, strategists, and technologists united by a shared mission: 
              to craft digital experiences that inspire and transform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 noise">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Founded in 2012, we started as a small team with big dreams. What began in a tiny apartment 
                  has grown into a globally recognized creative studio.
                </p>
                <p>
                  Over the years, we've had the privilege of working with startups, Fortune 500 companies, 
                  and everything in between. Each project has taught us something new and pushed us to evolve.
                </p>
                <p>
                  Today, we're a diverse team of 45+ talented individuals spread across three continents, 
                  united by our passion for creating meaningful digital experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-2xl overflow-hidden border-4 border-background">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=400&fit=crop"
                  alt="Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* Values Section */}
      <section className="py-20 bg-secondary/30 noise">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Our Values</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              What Drives <span className="text-gradient">Us</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-card border border-border"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 noise">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">The Team</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              Meet the <span className="text-gradient">Minds</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative rounded-2xl overflow-hidden bg-card border border-border"
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary text-sm mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
