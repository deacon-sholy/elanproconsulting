'use client';

import { FaWhatsapp } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const phoneNumber = '447123456789'; // Replace with actual WhatsApp number
  const message = encodeURIComponent('Hello! I would like to learn more about Elanpro Consulting services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 active:scale-95 group',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      )}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} className="animate-[pulse_2s_ease-in-out_infinite]" />
      <span className="hidden sm:inline text-sm font-medium">Chat with us</span>
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full" />
    </a>
  );
}

export default WhatsAppButton;