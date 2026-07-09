import { useState } from 'react';
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

function SuccessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 md:p-10 text-center relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
              aria-label="Close"
            >
              <X size={16} className="text-muted-foreground" />
            </button>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2, duration: 0.6 }}
              className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle size={40} className="text-white" />
            </motion.div>

            <h3 className="text-2xl font-serif font-bold text-primary mb-3">
              Inquiry Sent Successfully!
            </h3>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed">
              Thank you for reaching out. A senior partner will review your inquiry and get back to you within 24–48 hours.
            </p>
            <button
              onClick={onClose}
              className="bg-primary text-white px-8 py-3 rounded-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const contactInfo = [
    { icon: MapPin, title: "Corporate Office", details: ["Level 42, One Canada Square", "Canary Wharf, London, E14 5AB"] },
    { icon: Phone, title: "Direct Line", details: ["+44 (0) 20 7123 4567", "+44 (0) 79 1234 5678"], href: "tel:+442071234567" },
    { icon: Mail, title: "Electronic Mail", details: ["info@elanproconsulting.com", "partners@elanproconsulting.com"], href: "mailto:info@elanproconsulting.com" },
    { icon: Clock, title: "Business Hours", details: ["Monday – Friday: 9:00 AM – 6:00 PM", "Weekend: By Appointment"] }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Convert FormData to URLSearchParams (FormSubmit AJAX needs URL-encoded)
    const params = new URLSearchParams();
    formData.forEach((value, key) => {
      if (key !== '_honey') {
        params.append(key, value.toString());
      }
    });

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@elanproconsulting.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json',
        },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        form.reset();
      } else {
        throw new Error('FormSubmit returned non-success');
      }
    } catch (error) {
      // Fallback: submit directly via form action
      try {
        const fallbackForm = document.createElement('form');
        fallbackForm.method = 'POST';
        fallbackForm.action = 'https://formsubmit.co/info@elanproconsulting.com';
        fallbackForm.target = '_blank';
        
        formData.forEach((value, key) => {
          if (key !== '_honey') {
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = key;
            input.value = value.toString();
            fallbackForm.appendChild(input);
          }
        });
        
        document.body.appendChild(fallbackForm);
        fallbackForm.submit();
        document.body.removeChild(fallbackForm);
        
        // Show success anyway since it opened in new tab
        setShowSuccess(true);
        form.reset();
      } catch {
        alert('Please email us directly at info@elanproconsulting.com and we will respond promptly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24">
            
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="w-10 sm:w-12 h-[1px] bg-secondary"></span>
                <span className="text-[10px] sm:text-sm font-semibold text-secondary uppercase tracking-widest">Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary mb-6 sm:mb-8 leading-tight">
                Initiate a Dialogue.
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mb-10 sm:mb-12 max-w-md">
                Reach out to our team of experts to discuss how we can partner to achieve your strategic objectives.
              </p>

              <div className="space-y-6 sm:space-y-8">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon;
                  const Wrapper = item.href ? 'a' : 'div';
                  const wrapperProps = item.href ? { href: item.href, className: "flex items-start gap-4 sm:gap-6 group hover:bg-slate-100 p-3 rounded-xl transition-all duration-300" } : { className: "flex items-start gap-4 sm:gap-6 group" };
                  return (
                    <Wrapper key={i} {...wrapperProps}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shrink-0 border border-border shadow-sm transition-all duration-300 group-hover:border-secondary group-hover:shadow-md group-hover:scale-105">
                        <Icon className="text-secondary transition-transform duration-300" size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h4 className="font-serif font-bold text-primary text-lg sm:text-xl mb-1 sm:mb-2">{item.title}</h4>
                        {item.details.map((line, j) => (
                          <p key={j} className="text-muted-foreground text-sm sm:text-base">{line}</p>
                        ))}
                      </div>
                    </Wrapper>
                  );
                })}
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 md:p-12 rounded-2xl border border-border shadow-xl hover:shadow-2xl transition-shadow duration-500">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-6 sm:mb-8">Request a Consultation</h3>
              
              <form 
                onSubmit={handleSubmit}
                className="space-y-5 sm:space-y-6"
              >
                {/* FormSubmit required hidden fields */}
                <input type="hidden" name="_subject" value="New Consultation Request - Elanpro Consulting" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" className="hidden" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-primary">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-primary">Corporate Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-sm"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-primary">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="w-full px-4 py-3 bg-slate-50 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-sm"
                      placeholder="+44 20 7123 4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-primary">Company / Organization</label>
                    <input 
                      type="text" 
                      id="company" 
                      name="company"
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all text-sm"
                      placeholder="Acme Corp"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-primary">Inquiry Details</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 focus:border-secondary transition-all resize-none text-sm"
                    placeholder="Please describe your current challenges or objectives..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={cn(
                    "w-full bg-primary text-white py-3.5 sm:py-4 rounded-sm font-semibold transition-all duration-300",
                    "hover:bg-primary/90 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99]",
                    "disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Submit Inquiry
                      <Send size={16} />
                    </>
                  )}
                </button>
                
                <p className="text-[11px] sm:text-xs text-muted-foreground text-center pt-4">
                  Your information is held in strict confidence per our data protection policies.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </>
  );
}