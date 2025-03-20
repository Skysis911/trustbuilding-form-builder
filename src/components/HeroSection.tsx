
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection = ({ className, ...props }: HeroSectionProps) => {
  return (
    <div className={cn('mb-8', className)} {...props}>
      <h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black animate-fade-in"
        style={{ animationDelay: '0.1s' }}
      >
        Wiedziałem, że tu wejdziesz. <br />
        <span className="text-black">Teraz działamy!</span>
      </h1>
      <h2 
        className="mt-4 text-xl md:text-2xl text-gray-700 animate-fade-in"
        style={{ animationDelay: '0.3s' }}
      >
        Jeśli nie działasz dziś, Twój konkurent podbija rynek!
      </h2>
    </div>
  );
};

export default HeroSection;
