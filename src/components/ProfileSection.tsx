
import React from 'react';
import { cn } from '@/lib/utils';

interface ProfileSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProfileSection = ({ className, ...props }: ProfileSectionProps) => {
  return (
    <div 
      className={cn('flex items-center gap-4', className)} 
      {...props}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-200">
        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
          CEO
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="font-medium">Mateusz Strzałkowski</h3>
        <p className="text-gray-600 text-sm">Założyciel & CEO WorkFlow Media</p>
      </div>
    </div>
  );
};

export default ProfileSection;
