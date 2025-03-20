
import React from 'react';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

interface UrgencyBannerProps extends React.HTMLAttributes<HTMLDivElement> {}

const UrgencyBanner = ({ className, ...props }: UrgencyBannerProps) => {
  return (
    <div 
      className={cn(
        'bg-black/5 border border-gray-200 rounded-lg p-3 flex items-center gap-2 animate-pulse-subtle mt-4',
        className
      )}
      {...props}
    >
      <Clock className="w-5 h-5 text-black flex-shrink-0" />
      <p className="text-sm font-medium">
        Tylko 3 wolne sloty w tym miesiącu – złap swoje miejsce, zanim zrobi to konkurencja!
      </p>
    </div>
  );
};

export default UrgencyBanner;
