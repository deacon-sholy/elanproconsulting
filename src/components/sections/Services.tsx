import { 
  Briefcase, TrendingUp, RefreshCw, LineChart, 
  Users, Truck, LayoutTemplate, Megaphone, Lightbulb 
} from 'lucide-react';
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/ui/animated-section';

const services = [
  {
    title: "Business Strategy & Advisory",
    description: "Developing robust, forward-looking strategies that position your business for market leadership and resilience.",
    icon: Briefcase
  },
  {
    title: "Revenue Growth & Profit Optimization",
    description: "Identifying untapped revenue streams and optimizing pricing models to maximize your bottom line.",
    icon: TrendingUp
  },
  {
    title: "Business Transformation",
    description: "Guiding organizations through comprehensive structural and operational changes to stay competitive.",
    icon: RefreshCw
  },
  {
    title: "Financial & Performance Management",
    description: "Implementing rigorous financial controls and KPIs to ensure capital is deployed effectively.",
    icon: LineChart
  },
  {
    title: "Human Capital & Organizational Development",
    description: "Building leadership pipelines, designing organizational structures, and fostering a high-performance culture.",
    icon: Users
  },
  {
    title: "Procurement & Supply Chain Advisory",
    description: "Streamlining operations, reducing costs, and mitigating risks across your entire supply network.",
    icon: Truck
  },
  {
    title: "Project Development & Management",
    description: "Ensuring capital projects are delivered on time, within budget, and to exacting quality standards.",
    icon: LayoutTemplate
  },
  {
    title: "Business Branding & Market Positioning",
    description: "Crafting compelling corporate identities that resonate with premium stakeholders and clients.",
    icon: Megaphone
  },
  {
    title: "Learning & Capacity Development",
    description: "Equipping your teams with the advanced skills required to execute complex business strategies.",
    icon: Lightbulb
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <AnimatedSection direction="up" className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-8 h-[1px] bg-secondary"></span>
            <span className="text-sm font-semibold text-secondary uppercase tracking-widest">Our Expertise</span>
            <span className="w-8 h-[1px] bg-secondary"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Capabilities
          </h2>
          <p className="text-lg text-muted-foreground">
            We deliver comprehensive, end-to-end consulting services designed to solve the most complex business challenges across the value chain.
          </p>
        </AnimatedSection>

        <AnimatedStagger staggerDelay={0.08}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <AnimatedItem key={index} direction="up" duration={0.5}>
                  <div 
                    className="group relative bg-white p-8 rounded-xl border border-border shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden h-full"
                  >
                    {/* Hover Accent Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="w-14 h-14 bg-primary/5 rounded-lg flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-xl font-serif font-bold text-primary mb-4 leading-snug group-hover:translate-x-1 transition-transform duration-300">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Bottom Border Accent */}
                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full"></div>
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