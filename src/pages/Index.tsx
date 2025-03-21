
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import ContactForm from '@/components/ContactForm';
import UrgencyBanner from '@/components/UrgencyBanner';
import SocialProof from '@/components/SocialProof';
import CredentialBox from '@/components/CredentialBox';

const Index = () => {
  // Add subtle page transition
  useEffect(() => {
    document.body.classList.add('opacity-0');
    setTimeout(() => {
      document.body.classList.remove('opacity-0');
      document.body.classList.add('transition-opacity', 'duration-500', 'opacity-100');
    }, 10);
    
    return () => {
      document.body.classList.remove('transition-opacity', 'duration-500', 'opacity-100');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 min-h-[calc(100vh-8rem)]">
          {/* Left Column - Info */}
          <div className="md:w-2/5 flex flex-col justify-center">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/e3d780f8-8ada-4f78-b54a-3087ea4e31c5.png" 
                alt="WorkFlow Media" 
                className="h-12 mb-8"
              />
            </div>
            
            <HeroSection />
            
            <div className="mt-8">
              <h3 className="text-xl font-medium mb-4">Jak to działa?</h3>
              <ol className="space-y-3 list-decimal pl-5">
                <li>Wypełnij formularz kontaktowy.</li>
                <li>Poczekaj na kontakt od nas (max. 24h).</li>
                <li>Otrzymaj dopasowaną ofertę i rozpocznij współpracę.</li>
              </ol>
            </div>
            
            <ProfileSection className="mt-8" />
            
            <SocialProof className="mt-8" />
          </div>
          
          {/* Right Column - Form */}
          <div className="md:w-3/5 md:pl-8 md:border-l md:border-gray-200">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6">Rozpocznij projekt już teraz!</h2>
              <ContactForm />
              <UrgencyBanner className="mt-4" />
            </div>
          </div>
        </div>

        {/* Credentials section with boxes */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center mb-12">
            <p className="text-2xl font-semibold text-blue-800">Ponad 200 firm rozwinęło biznes dzięki WorkFlow Media</p>
            <p className="mt-2 text-lg text-gray-600">Wspólnie wygenerowaliśmy już 15 mln zł przychodu z kampanii online</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CredentialBox 
              title="Zarządzałem milionowymi budżetami reklamowymi dla globalnych marek"
              description="Pojawiłem się w publikacjach takich jak Harvard Business Review i MIT Sloan. Zarządzałem milionowymi wydatkami na reklamy i pomagałem firmom przejść z poziomu 0 do kilkunastu milionów złotych przychodów, korzystając z kanałów Digital Marketingowych: Facebook Ads, Google Ads, SEO, LinkedIn Ads & Automation, a także dokładnej analizy ruchu."
              brands={["Volkswagen", "Sony", "Intel", "Dell", "Google", "HBO", "Sage", "Wirtualna Polska", "Play", "Orange"]}
            />
            
            <CredentialBox 
              title="Wnioski po wydaniu 180 milionów złotych na reklamy"
              description="Po wydaniu 180 milionów złotych na kampanie online, opracowałem i wyciągnąłem kluczowe wnioski, które pozwalają mi tworzyć skuteczne strategie marketingowe. Praktyki te mogę teraz wdrożyć w Twojej firmie, by maksymalizować Twój ROI i skalować biznes."
            />
            
            <CredentialBox 
              title="Chcesz rozwinąć swój biznes? Zróbmy to razem!"
              description="Skontaktuj się ze mną, aby omówić jak możemy wspólnie rozwinąć Twój biznes dzięki sprawdzonym strategiom marketingowym."
              isContact={true}
              email="m.strzalkowski@workflowmedia.pl"
              phone="+48 725 129 862"
            />
          </div>
        </div>
      </main>
      
      <footer className="border-t border-gray-200 py-4 px-4 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} WorkFlow Media. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Index;
