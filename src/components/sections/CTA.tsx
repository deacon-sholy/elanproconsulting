import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';

export function CTA() {
  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/cta.jpg" 
          alt="Corporate Skyscraper" 
          className="w-full h-full object-cover object-bottom opacity-20 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
        <AnimatedSection direction="up" delay={0.1}>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Let's Build a Stronger Business.
          </h2>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.2}>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with Elanpro to unlock new revenue streams, optimize your operations, and build a resilient framework for sustainable growth.
          </p>
        </AnimatedSection>
        
        <AnimatedSection direction="up" delay={0.3}>
          <a 
            href="#contact"
            className="inline-flex items-center gap-3 bg-secondary text-white px-10 py-5 rounded-sm text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 hover:shadow-2xl"
          >
            Schedule a Consultation
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}