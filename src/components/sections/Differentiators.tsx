import { Building2, LineChart, Cpu, Anchor, ShieldCheck, Gem, Leaf, Handshake } from 'lucide-react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const differentiators = [
  { title: "Strategic Business Thinking", icon: Building2 },
  { title: "Revenue-Centered Solutions", icon: LineChart },
  { title: "Practical Implementation", icon: Anchor },
  { title: "Data-Driven Decisions", icon: Cpu },
  { title: "Experienced Consultants", icon: ShieldCheck },
  { title: "Customized Solutions", icon: Gem },
  { title: "Sustainable Growth", icon: Leaf },
  { title: "Long-Term Partnership", icon: Handshake }
];

function DifferentiatorCard({ icon: Icon, title, index }: { icon: any; title: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-col items-center text-center group"
      >
        <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:border-secondary transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl">
          <Icon size={28} className="text-white group-hover:text-white transition-colors" strokeWidth={1.5} />
        </div>
        <h4 className="font-semibold text-white text-sm md:text-base px-2 leading-tight">
          {title}
        </h4>
      </motion.div>
    </div>
  );
}

export function Differentiators() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-30px' });

  return (
    <section className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Heading */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-3xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Why Growth Leaders Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={headingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We move beyond theoretical advice, offering pragmatic, tailored solutions anchored by deep domain expertise.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16">
          {differentiators.map((diff, index) => (
            <DifferentiatorCard key={index} icon={diff.icon} title={diff.title} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
