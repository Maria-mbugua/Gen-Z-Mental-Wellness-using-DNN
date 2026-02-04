import { motion } from "framer-motion";
import { Palette, Code, Sparkles, Layers, Zap, Globe } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Crafting visual languages that resonate with your audience and stand the test of time.",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Building performant, accessible, and beautiful digital experiences from the ground up.",
  },
  {
    icon: Sparkles,
    title: "Motion Design",
    description: "Breathing life into static designs with captivating animations and micro-interactions.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description: "Designing intuitive interfaces that delight users and drive meaningful engagement.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing every millisecond to deliver blazing-fast experiences that users love.",
  },
  {
    icon: Globe,
    title: "Digital Strategy",
    description: "Developing comprehensive strategies that align technology with business goals.",
  },
];

const Services = () => {
  return (
    <section className="relative py-32 overflow-hidden noise">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-primary uppercase tracking-widest text-sm font-medium">What We Do</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            Services That <span className="text-gradient">Elevate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We blend creativity with technical excellence to deliver solutions that push boundaries.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
