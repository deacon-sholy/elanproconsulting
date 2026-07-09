import { Search, PenTool, Rocket, TrendingUp } from 'lucide-react';
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/animated-section';

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Deep-dive diagnostic analysis into your current operations, financials, and market positioning to identify root challenges and hidden opportunities.",
    icon: Search
  },
  {
    number: "02",
    title: "Design",
    description: "Developing bespoke, data-driven strategies and frameworks tailored strictly to your organizational context and objectives.",
    icon: PenTool
  },
  {
    number: "03",
    title: "Deliver",
    description: "Hands-on implementation support, bridging the gap between high-level strategy and ground-level execution.",
    icon: Rocket
  },
  {
    number: "04",
    title: "Drive Growth",
    description: "Establishing performance management systems, KPIs, and continuous improvement loops to ensure sustainability.",
    icon: TrendingUp
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-end mb-20">
          <AnimatedSection direction="left" className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-[1px] bg-secondary"></span>
              <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              Our 4-Step Journey.
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="right" delay={0.2}>
            <p className="text-muted-foreground max-w-md pb-2">
              We don't just write reports. We partner with you through a structured, rigorous process from initial diagnosis to sustainable implementation.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedStagger staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-secondary to-transparent z-0"></div>
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <AnimatedItem key={index} direction="up" duration={0.5}>
                  <div className="relative z-10 group">
                    <div className="w-24 h-24 bg-white border-2 border-border rounded-full flex items-center justify-center mb-8 mx-auto lg:mx-0 group-hover:border-secondary transition-all duration-500 relative group-hover:scale-110 group-hover:shadow-xl">
                      <span className="absolute -top-3 -right-3 text-sm font-bold text-secondary bg-slate-50 px-2 group-hover:scale-110 transition-transform">
                        {step.number}
                      </span>
                      <Icon size={32} className="text-primary group-hover:text-secondary transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    
                    <div className="text-center lg:text-left">
                      <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:translate-x-1 transition-transform">{step.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </AnimatedItem>
              );
            })}
          </div>
        </AnimatedStagger>
      </div>
    </section>
  );
}