
import React from 'react';
import { cn } from '@/lib/utils';
import GlassCard from './ui/custom/GlassCard';

interface ProfileSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProfileSection = ({ className, ...props }: ProfileSectionProps) => {
  return (
    <GlassCard 
      className={cn('flex items-center gap-4 mb-8 animate-fade-in', className)} 
      style={{ animationDelay: '0.5s' }}
      {...props}
    >
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/50 shadow-md">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center text-xs text-gray-600">
          Zdjęcie CEO
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium text-lg md:text-xl">Mateusz Strzałkowski</h3>
        <p className="text-gray-600 text-sm md:text-base">Założyciel & CEO WorkFlow Media</p>
      </div>
    </GlassCard>
  );
};

export default ProfileSection;
