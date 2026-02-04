import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const projects = [
  {
    title: "Nebula Finance",
    category: "Web App",
    description: "A cutting-edge fintech platform revolutionizing how users manage their digital assets with real-time analytics and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    color: "from-violet-500/20 to-purple-500/20",
    year: "2024",
  },
  {
    title: "Echo Studios",
    category: "Brand Identity",
    description: "Complete brand overhaul for a leading audio production company, including logo design, visual identity, and comprehensive brand guidelines.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    color: "from-pink-500/20 to-rose-500/20",
    year: "2024",
  },
  {
    title: "Quantum Labs",
    category: "Website",
    description: "An immersive website experience for a quantum computing startup, featuring 3D visualizations and interactive data presentations.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
    year: "2023",
  },
  {
    title: "Aurora App",
    category: "Mobile App",
    description: "A wellness and meditation app with personalized journeys, sleep stories, and biometric integration for holistic health tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "from-emerald-500/20 to-teal-500/20",
    year: "2023",
  },
  {
    title: "Velocity Motors",
    category: "E-Commerce",
    description: "A premium automotive marketplace with immersive 360° vehicle tours and streamlined purchasing experience.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop",
    color: "from-orange-500/20 to-red-500/20",
    year: "2023",
  },
  {
    title: "Synth Records",
    category: "Platform",
    description: "A music distribution platform connecting independent artists with global audiences through innovative streaming technology.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    color: "from-indigo-500/20 to-violet-500/20",
    year: "2022",
  },
];

const WorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden noise">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[120px]"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Our Portfolio</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-4 mb-6">
              Selected <span className="text-gradient">Works</span>
            </h1>
            <p className="text-muted-foreground text-xl max-w-2xl">
              Explore our collection of award-winning projects that showcase our commitment to excellence and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 noise">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -12 }}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer bg-card border border-border"
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary text-sm font-medium uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-muted-foreground text-sm">{project.year}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 flex items-center gap-3">
                      {project.title}
                      <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Hover border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
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

export default WorkPage;
