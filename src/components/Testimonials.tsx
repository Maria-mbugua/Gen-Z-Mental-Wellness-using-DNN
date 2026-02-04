import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Working with this team transformed our entire digital presence. Their attention to detail and creative vision exceeded all expectations.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    quote: "The most innovative and collaborative agency we've ever worked with. They don't just build websites—they craft experiences.",
    author: "Marcus Williams",
    role: "Creative Director, Artisan Co",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote: "Their strategic approach combined with flawless execution helped us achieve a 300% increase in user engagement.",
    author: "Elena Rodriguez",
    role: "VP Marketing, GlobalScale",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

const Testimonials = () => {
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
          <span className="text-primary uppercase tracking-widest text-sm font-medium">Testimonials</span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-4">
            Voices of <span className="text-gradient">Trust</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="relative h-full p-8 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-all duration-500"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Quote className="w-4 h-4 text-primary-foreground" />
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-foreground/90 text-lg leading-relaxed mb-8 mt-4">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
