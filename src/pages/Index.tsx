
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import ContactForm from '@/components/ContactForm';
import UrgencyBanner from '@/components/UrgencyBanner';
import SocialProof from '@/components/SocialProof';

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
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Column - Info */}
          <div className="md:w-3/5 flex flex-col">
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
            
            <ProfileSection className="mt-10" />
            
            <SocialProof className="mt-8" />
          </div>
          
          {/* Right Column - Form */}
          <div className="md:w-2/5 md:border-l md:border-gray-200">
            <div className="sticky top-8">
              <div className="bg-white rounded-xl shadow-lg p-6 md:ml-8">
                <h2 className="text-2xl font-bold mb-6">Rozpocznij projekt już teraz!</h2>
                <ContactForm />
                <UrgencyBanner className="mt-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Credentials below - visible on initial load */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="text-center">
            <p className="text-lg font-semibold">Nasze osiągnięcia:</p>
            <p className="mt-2">Ponad 200 firm rozwinęło biznes dzięki WorkFlow Media</p>
            <p>Wspólnie wygenerowaliśmy już 15 mln zł przychodu z kampanii online</p>
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
