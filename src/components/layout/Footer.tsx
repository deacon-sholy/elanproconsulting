import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'wouter';
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6';

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-center gap-3">
                <img 
                  src="/logo.jpeg" 
                  alt="Elanpro Management Consulting" 
                  className="h-12 w-auto rounded-sm transition-transform duration-300 group-hover:scale-105 shadow-lg"
                />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-2xl tracking-tight text-white leading-tight">
                    ELANPRO
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.2em] text-secondary leading-tight">
                    Management Consulting
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-8 pr-4">
              A premium advisory firm helping businesses increase revenue, optimize operations, and build systems that drive sustainable growth.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/elanproconsulting" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all duration-300 hover:scale-110" aria-label="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="https://instagram.com/elanproconsulting" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-gradient-to-tr hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white hover:border-[#dd2a7b] transition-all duration-300 hover:scale-110" aria-label="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://x.com/elanproconsult" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-black hover:text-white hover:border-white/50 transition-all duration-300 hover:scale-110" aria-label="X (Twitter)">
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-secondary">Firm</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Approach', href: '#approach' },
                { name: 'Industries', href: '#industries' },
                { name: 'Insights & Data', href: '#' },
                { name: 'Careers', href: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/70 hover:text-secondary text-sm flex items-center gap-2 transition-all duration-300 group hover:translate-x-1">
                    <ChevronRight size={14} className="text-secondary transition-transform duration-300 group-hover:translate-x-0.5" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-secondary">Practice Areas</h4>
            <ul className="space-y-4">
              {[
                'Business Strategy',
                'Revenue Growth',
                'Business Transformation',
                'Organizational Dev',
                'Financial Management'
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-white/70 hover:text-secondary text-sm flex items-center gap-2 transition-all duration-300 group hover:translate-x-1">
                    <ChevronRight size={14} className="text-secondary transition-transform duration-300 group-hover:translate-x-0.5" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-white relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-[2px] after:bg-secondary">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3 group hover:text-white transition-colors">
                <MapPin size={18} className="text-secondary shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" />
                <span>Level 42, One Canada Square<br/>Canary Wharf, London<br/>E14 5AB</span>
              </li>
              <li className="flex items-center gap-3 group hover:text-white transition-colors">
                <Phone size={18} className="text-secondary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <a href="tel:+442071234567" className="hover:text-secondary transition-colors">+44 (0) 20 7123 4567</a>
              </li>
              <li className="flex items-center gap-3 group hover:text-white transition-colors">
                <Mail size={18} className="text-secondary shrink-0 transition-transform duration-300 group-hover:scale-110" />
                <a href="mailto:info@elanproconsulting.com" className="hover:text-secondary transition-colors">info@elanproconsulting.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Elanpro Management Consulting Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">Terms of Service</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-secondary transition-all duration-300 group hover:scale-110"
            aria-label="Back to top"
          >
            <ChevronRight size={20} className="text-white -rotate-90 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}