import { ArrowRight, ChevronDown, Star } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-primary overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero.jpg" 
          alt="Corporate Boardroom" 
          className="w-full h-full object-cover object-center opacity-40 scale-105 animate-[ken-burns_20s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 pb-16 sm:pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-secondary/30 bg-secondary/10 backdrop-blur-sm mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-[10px] sm:text-xs font-semibold text-secondary uppercase tracking-widest">
              Premier Advisory Firm
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white leading-[1.1] tracking-tight mb-6 sm:mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Transforming Businesses into <span className="text-secondary italic pr-2">High-Performing</span> Organizations.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mb-8 sm:mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200 text-balance">
            We help businesses increase revenue, optimize operations, strengthen leadership, and build systems that drive sustainable growth. Serving startups, SMEs, corporates, and government institutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm text-sm font-semibold hover:bg-white hover:text-primary transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Book a Consultation
              <ArrowRight size={16} />
            </a>
            <a 
              href="#services" 
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 px-6 sm:px-8 py-3.5 sm:py-4 rounded-sm text-sm font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Our Services
            </a>
          </div>

          {/* Service Tags */}
          <div className="pt-6 sm:pt-8 border-t border-white/20 animate-in fade-in duration-700 delay-500">
            <p className="text-[10px] sm:text-xs text-white/50 uppercase tracking-widest mb-3 sm:mb-4">Core Competencies</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['Business Advisory', 'Revenue Growth', 'Organizational Development', 'Performance Management', 'Business Transformation'].map((tag) => (
                <span key={tag} className="text-[10px] sm:text-xs text-white/70 px-2 sm:px-3 py-1 sm:py-1.5 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-secondary/30 transition-all duration-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce text-white/50">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
}