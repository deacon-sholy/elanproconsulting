import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Industries', href: '#industries' },
    { name: 'Approach', href: '#approach' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled
          ? 'glass-dark py-3 shadow-lg shadow-black/10'
          : 'bg-gradient-to-b from-black/30 to-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 z-50 relative group">
          <img 
            src="/logo.jpeg" 
            alt="Elanpro Management Consulting" 
            className="h-10 md:h-12 w-auto rounded-sm transition-transform duration-300 group-hover:scale-105 shadow-lg"
          />
          <div className="flex flex-col">
            <span className={cn(
              "font-serif font-bold text-xl md:text-2xl tracking-tight leading-tight transition-colors",
              isScrolled ? "text-white" : "text-white"
            )}>
              ELANPRO
            </span>
            <span className={cn(
              "text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.2em] leading-tight transition-colors",
              isScrolled ? "text-secondary" : "text-secondary/90"
            )}>
              Management Consulting
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide hover:text-secondary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full",
                isScrolled ? "text-white/80" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className={cn(
              "text-sm font-medium px-6 py-2.5 rounded-sm transition-all duration-300 border",
              isScrolled 
                ? "bg-secondary text-white border-secondary hover:bg-transparent hover:text-secondary hover:scale-105" 
                : "bg-white text-primary border-white hover:bg-transparent hover:text-white hover:scale-105"
            )}
          >
            Consult With Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden z-50 relative p-2 rounded-md transition-transform duration-300",
            isMobileMenuOpen ? "text-white rotate-90" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "fixed inset-0 bg-primary/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleNavClick}
              className="text-3xl font-serif text-white hover:text-secondary transition-colors"
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${i * 100}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.4s ease-out'
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-6 text-lg font-medium px-10 py-4 bg-secondary text-white rounded-sm hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            style={{ 
              transitionDelay: isMobileMenuOpen ? '300ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.4s ease-out'
            }}
          >
            Consult With Us
          </a>
        </nav>
      </div>
    </header>
  );
}