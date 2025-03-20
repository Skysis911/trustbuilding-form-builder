
import React from 'react';
import { cn } from '@/lib/utils';
import { Quote, Star } from 'lucide-react';

interface SocialProofProps extends React.HTMLAttributes<HTMLDivElement> {}

const SocialProof = ({ className, ...props }: SocialProofProps) => {
  return (
    <div 
      className={cn('space-y-4', className)}
      {...props}
    >
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
        ))}
      </div>
      
      <blockquote className="relative text-gray-700 italic text-sm">
        <Quote className="absolute top-0 left-0 w-6 h-6 text-gray-300 -translate-x-2 -translate-y-1" />
        <p className="pl-4">
          "Sprzedaż naszego e-sklepu wzrosła o 300% w ciągu 3 miesięcy dzięki kampaniom od WorkFlow Media! Polecam gorąco."
        </p>
        <footer className="mt-2 text-right text-sm font-medium not-italic">
          – Jan Nowak, CEO
        </footer>
      </blockquote>
    </div>
  );
};

export default SocialProof;
