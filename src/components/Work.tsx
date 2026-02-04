import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Nebula Finance",
    category: "Web App",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Echo Studios",
    category: "Brand Identity",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Quantum Labs",
    category: "Website",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Aurora App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    color: "from-emerald-500/20 to-teal-500/20",
  },
];

const Work = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-secondary/30 noise">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Portfolio</span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
              Selected <span className="text-gradient">Works</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -12 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>

                {/* Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} to-transparent opacity-60`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-primary text-sm font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-2 flex items-center gap-3">
                    {project.title}
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ArrowUpRight className="w-6 h-6" />
                    </motion.span>
                  </h3>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
