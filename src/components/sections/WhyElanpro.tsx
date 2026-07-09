import { CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const benefits = [
  "Revenue & Profitability Growth",
  "Operational Efficiency",
  "Scalable Systems",
  "Organizational Performance",
  "High-Performing Teams",
  "Corporate Governance",
  "Customer Satisfaction",
  "Sustainable Growth Positioning"
];

function BenefitCard({ text, index }: { text: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30px' });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{
          duration: 0.4,
          delay: index * 0.1,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex items-start gap-4 p-6 rounded-lg bg-white/10 border border-white/20 hover:bg-white/15 transition-all duration-300 backdrop-blur-sm hover:scale-[1.02] hover:border-secondary/30"
      >
        <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={20} />
        <span className="font-medium text-white text-sm leading-tight">{text}</span>
      </motion.div>
    </div>
  );
}

export function WhyElanpro() {
  const leftRef = useRef(null);
  const leftInView = useInView(leftRef, { once: true, margin: '-30px' });

  return (
    <section className="py-24 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <img src="/images/texture.jpg" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div ref={leftRef}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-[1px] bg-secondary"></span>
                <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Why Elanpro</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                Delivering Tangible <br/>Business Outcomes.
              </h2>
              
              <p className="text-lg text-white/80 mb-10 leading-relaxed">
                We measure our success by the measurable impact we create for our clients. Working with Elanpro translates directly into concrete advantages that secure your competitive edge.
              </p>

              <a 
                href="#contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-sm text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Start Your Transformation
              </a>
            </motion.div>
          </div>

          {/* Right Column - Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} text={benefit} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
