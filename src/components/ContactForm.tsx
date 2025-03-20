
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { toast } from 'sonner';
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
    <div className={cn('space-y-6', className)} {...props}>
      <form onSubmit={handleSubmit} className="space-y-5">
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={formState.email}
            onChange={handleChange}
          />
          <p className="mt-1 text-xs text-gray-500">Tylko do przesłania oferty i dalszego kontaktu. Zero spamu!</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={formState.phone}
              onChange={handleChange}
            />
          </div>
          
          <div>
            <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
              Strona internetowa
            </label>
            <input
              id="website"
              name="website"
              type="url"
              placeholder="www.twojafirma.pl"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
              value={formState.website}
              onChange={handleChange}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
            Wybierz swój przedział budżetu
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
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
            Co chcesz osiągnąć?
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            placeholder="Np. Pozyskanie większej liczby leadów z kampanii Facebook Ads"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
            value={formState.description}
            onChange={handleChange}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg animate-pulse-button"
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
          Klikając „Rozpocznij projekt TERAZ", wyrażasz zgodę na naszą <a href="#" className="text-blue-600 hover:underline">politykę prywatności</a> oraz <a href="#" className="text-blue-600 hover:underline">warunki współpracy</a>. Twoje dane są bezpieczne.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
