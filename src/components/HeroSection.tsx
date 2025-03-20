
import React from 'react';
import { cn } from '@/lib/utils';

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection = ({ className, ...props }: HeroSectionProps) => {
  return (
    <div className={cn('mb-8', className)} {...props}>
      <h1 
        className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800"
      >
        Wiedziałem, że tu wejdziesz. <br />
        <span className="text-blue-600">Teraz działamy!</span>
      </h1>
      <h2 
        className="mt-4 text-xl text-gray-600"
      >
        Jeśli nie działasz dziś, Twój konkurent podbija rynek!
      </h2>
    </div>
  );
};

export default HeroSection;
