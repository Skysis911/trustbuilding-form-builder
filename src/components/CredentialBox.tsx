
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Award, TrendingUp, Users } from 'lucide-react';

interface CredentialBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  brands?: string[];
  isContact?: boolean;
  email?: string;
  phone?: string;
  icon?: 'award' | 'trending-up' | 'users';
}

const CredentialBox = ({ 
  title, 
  description, 
  brands, 
  isContact, 
  email, 
  phone,
  icon = 'award',
  className, 
  ...props 
}: CredentialBoxProps) => {
  const IconComponent = {
    'award': Award,
    'trending-up': TrendingUp,
    'users': Users
  }[icon];

  return (
    <Card 
      className={cn(
        'transition-all duration-200 hover:shadow-md border border-gray-200/80',
        className
      )} 
      {...props}
    >
      <div className="flex flex-col md:flex-row md:items-start p-6 gap-6">
        <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
            <IconComponent className="h-6 w-6" />
          </div>
        </div>
        
        <div className="flex-grow space-y-4">
          <CardTitle className="text-xl text-blue-700 font-medium">{title}</CardTitle>
          <p className="text-gray-600">{description}</p>
          
          {brands && brands.length > 0 && (
            <div>
              <p className="font-medium mb-2">Marki, z którymi współpracowałem:</p>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand, index) => (
                  <span 
                    key={index}
                    className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {isContact && (
          <div className="md:w-64 flex-shrink-0 mt-4 md:mt-0 space-y-3">
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => window.location.href = `mailto:${email}`}
            >
              <Mail className="mr-2 h-4 w-4" /> Napisz do mnie
            </Button>
            
            <div className="text-center">
              <a 
                href={`tel:${phone?.replace(/\s/g, '')}`}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <Phone className="mr-2 h-4 w-4" /> Zadzwoń teraz: {phone}
              </a>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default CredentialBox;
