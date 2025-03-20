
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
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <main className="flex-1 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start min-h-[calc(100vh-10rem)]">
          {/* Left Column - Info */}
          <div className="order-2 md:order-1 flex flex-col justify-center">
            <HeroSection />
            <SocialProof />
          </div>
          
          {/* Right Column - Form */}
          <div className="order-1 md:order-2">
            <ProfileSection />
            <ContactForm className="mt-4" />
            <UrgencyBanner />
          </div>
        </div>

        {/* Credentials below - visible on initial load */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-lg font-semibold">Nasze osiągnięcia:</p>
            <p className="mt-2">Ponad 200 firm rozwinęło biznes dzięki WorkFlow Media</p>
            <p>Wspólnie wygenerowaliśmy już 15 mln zł przychodu z kampanii online</p>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-gray-200 py-4 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} WorkFlow Media. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Index;
