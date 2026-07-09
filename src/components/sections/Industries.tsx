import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/animated-section';

const industries = [
  "Government & Public Sector",
  "SMEs & Startups",
  "Manufacturing & Industrials",
  "Energy & Power",
  "Construction & Real Estate",
  "Agriculture",
  "Healthcare & Life Sciences",
  "Financial Services",
  "Education",
  "Non-Governmental Organizations (NGOs)",
  "Retail & Consumer Goods",
  "Professional Services"
];

export function Industries() {
  return (
    <section id="industries" className="py-24 bg-white border-y border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
            Industries We Serve
          </h2>
          <p className="text-muted-foreground">
            Our deep sector expertise allows us to provide tailored insights that recognize the unique regulatory, economic, and competitive dynamics of your industry.
          </p>
        </AnimatedSection>

        <AnimatedStagger staggerDelay={0.06}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {industries.map((industry, index) => (
              <AnimatedItem key={index} direction="up" duration={0.4}>
                <div 
                  className="group py-6 px-4 text-center rounded-xl border border-border hover:border-secondary/50 hover:bg-secondary/5 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg"
                >
                  <span className="font-medium text-sm md:text-base text-primary group-hover:text-secondary transition-colors">
                    {industry}
                  </span>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </AnimatedStagger>
      </div>
    </section>
  );
}