import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import GlassCard from './ui/custom/GlassCard';
import { Button } from './ui/button';
import { toast } from 'sonner'; // Corrected import from sonner directly
import { ArrowRight } from 'lucide-react';

interface ContactFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const ContactForm = ({ className, ...props }: ContactFormProps) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    budget: '',
    description: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Formularz został wysłany!', {
        description: 'Skontaktujemy się z Tobą wkrótce.',
        action: {
          label: 'Zamknij',
          onClick: () => console.log('Closed')
        },
      });
    }, 1500);
  };
  
  return (
    <GlassCard 
      className={cn('animate-fade-in', className)} 
      style={{ animationDelay: '0.7s' }}
      {...props}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Imię i nazwisko
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Jan Kowalski"
            required
            className="input-field"
            value={formState.name}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            E-mail biznesowy
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="twoja@firma.pl"
            required
            className="input-field"
            value={formState.email}
            onChange={handleChange}
          />
          <p className="mt-1 text-xs text-gray-500">Tylko do przesłania oferty i dalszego kontaktu. Zero spamu!</p>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Numer telefonu
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+48 123 456 789"
            required
            className="input-field"
            value={formState.phone}
            onChange={handleChange}
          />
          <p className="mt-1 text-xs text-gray-500">Zostaw numer, a oddzwonimy z konkretami – bez zbędnej gadki!</p>
        </div>
        
        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
            Strona internetowa [Opcjonalne]
          </label>
          <input
            id="website"
            name="website"
            type="url"
            placeholder="www.twojafirma.pl"
            className="input-field"
            value={formState.website}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Wybierz swój przedział budżetu [Opcjonalne]
          </label>
          <select
            id="budget"
            name="budget"
            className="input-field"
            value={formState.budget}
            onChange={handleChange}
          >
            <option value="">Wybierz przedział</option>
            <option value="5-10">5–10 tys. zł</option>
            <option value="10-20">10–20 tys. zł</option>
            <option value="20-50">20–50 tys. zł</option>
            <option value="50+">50+ tys. zł</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Co chcesz osiągnąć? [Opcjonalne]
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            placeholder="Np. Pozyskanie większej liczby leadów z kampanii Facebook Ads"
            className="input-field resize-none"
            value={formState.description}
            onChange={handleChange}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 text-white button-gradient group animate-pulse-button"
          disabled={isSubmitting}
        >
          <span className="relative z-10 flex items-center justify-center gap-2 font-semibold text-lg">
            Rozpocznij projekt TERAZ
            {isSubmitting ? (
              <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : (
              <ArrowRight className="w-5 h-5 transform transition-transform group-hover:translate-x-1" />
            )}
          </span>
        </Button>
        
        <p className="text-xs text-gray-500 text-center">
          Klikając „Rozpocznij projekt TERAZ", wyrażasz zgodę na naszą <a href="#" className="text-black hover:underline">politykę prywatności</a> oraz <a href="#" className="text-black hover:underline">warunki współpracy</a>. Twoje dane są bezpieczne.
        </p>
      </form>
    </GlassCard>
  );
};

export default ContactForm;
