import { Quote } from 'lucide-react';
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/animated-section';

const testimonials = [
  {
    quote: "Elanpro completely overhauled our operational framework. Their insights were precise, actionable, and drove a 40% increase in our bottom-line profitability within the first year.",
    author: "James T.",
    role: "CEO, Manufacturing Corporation"
  },
  {
    quote: "We needed a strategic partner capable of understanding complex government procurement. Elanpro brought a level of rigor and professionalism that positioned us perfectly.",
    author: "Sarah L.",
    role: "Director, Public Sector Initiative"
  },
  {
    quote: "The organizational restructuring led by Elanpro was seamless. They didn't just give us a strategy; they walked with our leadership team until execution was flawless.",
    author: "David O.",
    role: "Founder, High-Growth Tech Startup"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
            Client Outcomes
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from leaders who have partnered with us to transform their organizations.
          </p>
        </AnimatedSection>

        <AnimatedStagger staggerDelay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <AnimatedItem key={index} direction="up" duration={0.5}>
                <div 
                  className="bg-slate-50 p-10 rounded-2xl border border-border relative mt-6 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-secondary/20"
                >
                  <div className="absolute -top-6 left-10 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Quote size={20} className="text-white fill-white" />
                  </div>
                  <p className="text-primary/80 italic text-lg leading-relaxed mb-8 pt-4">
                    "{test.quote}"
                  </p>
                  <div>
                    <h4 className="font-bold text-primary">{test.author}</h4>
                    <p className="text-sm text-muted-foreground">{test.role}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedStagger>
      </div>
    </section>
  );
}