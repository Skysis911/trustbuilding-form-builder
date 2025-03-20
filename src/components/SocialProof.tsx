
import React from 'react';
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';
import GlassCard from './ui/custom/GlassCard';

interface SocialProofProps extends React.HTMLAttributes<HTMLDivElement> {}

const SocialProof = ({ className, ...props }: SocialProofProps) => {
  return (
    <div 
      className={cn('space-y-6 animate-fade-in', className)}
      style={{ animationDelay: '0.9s' }}
      {...props}
    >
      <div className="p-4 bg-white/50 rounded-lg border border-gray-100 shadow-sm">
        <p className="font-medium text-center">
          Ponad 200 firm rozwinęło biznes dzięki WorkFlow Media i wspólnie wygenerowaliśmy już 15 mln zł przychodu z kampanii online.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 py-4">
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Logo 1</div>
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Logo 2</div>
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Logo 3</div>
        <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">Logo 4</div>
      </div>
      
      <GlassCard variant="dark" className="relative">
        <Quote className="absolute top-4 left-4 w-8 h-8 text-black/10" />
        <blockquote className="pl-8 pt-2">
          <p className="italic text-gray-700">
            "Sprzedaż naszego e-sklepu wzrosła o 300% w ciągu 3 miesięcy dzięki kampaniom od WorkFlow Media! Polecam gorąco."
          </p>
          <footer className="mt-2 text-right font-medium">
            – Jan Nowak, CEO
          </footer>
        </blockquote>
      </GlassCard>
    </div>
  );
};

export default SocialProof;
