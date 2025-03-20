
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
      <main className="flex-1 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Form */}
          <div className="order-2 md:order-1">
            <HeroSection />
            <ProfileSection />
            <ContactForm />
            <UrgencyBanner />
          </div>
          
          {/* Right Column - Social Proof */}
          <div className="order-1 md:order-2">
            <SocialProof className="sticky top-8" />
          </div>
        </div>
      </main>
      
      <footer className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} WorkFlow Media. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};

export default Index;
