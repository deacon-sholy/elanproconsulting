import { ArrowUpRight, BarChart3, Target, Zap, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">
          
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-secondary/5 rounded-3xl transform rotate-3 z-0"></div>
            <div className="relative z-10 aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about.jpg" 
                alt="Strategy documents and analysis" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 sm:-bottom-8 -right-4 sm:-right-8 glass rounded-lg p-4 sm:p-6 max-w-[200px] sm:max-w-[240px] z-20 hidden sm:block animate-in fade-in slide-in-from-right-8 duration-700 delay-500">
              <div className="flex items-center gap-3 sm:gap-4 mb-2">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                  <BarChart3 className="text-secondary" size={16} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground font-semibold uppercase tracking-wider">Avg. Growth</p>
                  <p className="text-xl sm:text-2xl font-serif font-bold text-primary">2.4x</p>
                </div>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 sm:mt-2">Revenue multiplier for optimized client operations.</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <span className="w-10 sm:w-12 h-[1px] bg-secondary"></span>
              <span className="text-[10px] sm:text-sm font-semibold text-secondary uppercase tracking-widest">About Us</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary leading-tight mb-6 sm:mb-8">
              Strategy. Performance. <br/><span className="text-secondary italic">Growth.</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed">
              <p>
                At Elanpro, we believe that ordinary businesses can achieve extraordinary results when equipped with the right systems, leadership, and operational discipline. 
              </p>
              <p>
                We do not deliver generic templates. We build bespoke, data-driven frameworks designed specifically for your market context. By bridging the gap between high-level strategic thinking and rigorous on-the-ground execution, we unlock untapped potential across your organization.
              </p>
            </div>

            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <div className="mt-1 p-2 rounded-full bg-primary/5 text-primary shrink-0">
                  <Target size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1 sm:mb-2">Precision Strategy</h4>
                  <p className="text-sm text-muted-foreground">Rigorous market analysis informing confident executive decisions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-0 rounded-lg sm:rounded-none bg-slate-50 sm:bg-transparent">
                <div className="mt-1 p-2 rounded-full bg-primary/5 text-primary shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1 sm:mb-2">Flawless Execution</h4>
                  <p className="text-sm text-muted-foreground">Turning complex strategic visions into operational reality.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 sm:mt-12">
              <a href="#approach" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors group text-sm sm:text-base">
                Discover our methodology
                <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}