
import React from 'react';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

interface UrgencyBannerProps extends React.HTMLAttributes<HTMLDivElement> {}

const UrgencyBanner = ({ className, ...props }: UrgencyBannerProps) => {
  return (
    <div 
      className={cn(
        'bg-orange-50 border border-orange-200 rounded-lg p-3 flex items-center gap-3',
        className
      )} 
      {...props}
    >
      <Clock className="w-5 h-5 text-orange-500 flex-shrink-0" />
      <p className="text-sm text-orange-800">
        Tylko 3 wolne sloty w tym miesiącu – złap swoje miejsce, zanim zrobi to konkurencja!
      </p>
    </div>
  );
};

export default UrgencyBanner;
