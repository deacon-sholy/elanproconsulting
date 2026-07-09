import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

const stats = [
  { value: 500, suffix: "+", label: "Businesses Supported" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
  { value: 20, suffix: "+", label: "Industries Served" },
  { value: 100, suffix: "%", label: "Customized Solutions" }
];

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section className="py-20 bg-secondary/10 border-y border-secondary/20">
      <div className="container mx-auto px-6 md:px-12" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="flex items-baseline mb-2">
                <span className="text-5xl md:text-6xl font-serif font-bold text-primary group-hover:text-secondary transition-colors duration-500">
                  {isInView ? <Counter end={stat.value} duration={2000} /> : "0"}
                </span>
                <span className="text-3xl font-bold text-secondary">{stat.suffix}</span>
              </div>
              <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider group-hover:text-primary transition-colors duration-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple counter animation component
function Counter({ end, duration }: { end: number; duration: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // ease out expo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return <>{count}</>;
}