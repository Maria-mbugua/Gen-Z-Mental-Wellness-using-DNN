import { motion } from "framer-motion";
import { Palette, Code, Sparkles, Layers, Zap, Globe, ArrowRight, Check } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Crafting visual languages that resonate with your audience and stand the test of time.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building performant, accessible, and beautiful digital experiences from the ground up.",
    features: ["Custom Websites", "Web Applications", "E-Commerce", "CMS Integration"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Sparkles,
    title: "Motion Design",
    description: "Breathing life into static designs with captivating animations and micro-interactions.",
    features: ["UI Animations", "Video Production", "3D Motion", "Interactive Experiences"],
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that delight users and drive meaningful engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Optimizing every millisecond to deliver blazing-fast experiences that users love.",
    features: ["Speed Audits", "Core Web Vitals", "CDN Setup", "Caching Strategies"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Developing comprehensive strategies that align technology with business goals.",
    features: ["Market Research", "Competitor Analysis", "Growth Planning", "ROI Optimization"],
    color: "from-indigo-500 to-violet-500",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We dive deep into understanding your vision, goals, and target audience." },
  { step: "02", title: "Strategy", description: "We craft a comprehensive roadmap tailored to achieve your objectives." },
  { step: "03", title: "Design", description: "Our creative team brings ideas to life with stunning visual concepts." },
  { step: "04", title: "Development", description: "We build robust, scalable solutions using cutting-edge technologies." },
  { step: "05", title: "Launch", description: "We deploy your project and ensure a smooth, successful launch." },
  { step: "06", title: "Growth", description: "We continue to optimize and evolve your digital presence." },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden noise">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-accent/20 blur-[120px]"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">What We Do</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mt-4 mb-6">
              Services That <span className="text-gradient">Elevate</span>
            </h1>
            <p className="text-muted-foreground text-xl">
              We blend creativity with technical excellence to deliver solutions that push boundaries and exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 noise">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30 noise">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Our Process</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4">
              How We <span className="text-gradient">Work</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-card border border-border"
              >
                <span className="text-6xl font-bold text-gradient opacity-20">{item.step}</span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 w-8 h-8 text-primary/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
