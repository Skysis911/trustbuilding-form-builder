
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'light' | 'dark';
}

const GlassCard = ({
  children,
  className,
  variant = 'light',
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        variant === 'light' 
          ? 'glass-morphism' 
          : 'glass-morphism-dark',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default GlassCard;
