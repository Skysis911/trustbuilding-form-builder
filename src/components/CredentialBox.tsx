
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';

interface CredentialBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  brands?: string[];
  isContact?: boolean;
  email?: string;
  phone?: string;
}

const CredentialBox = ({ 
  title, 
  description, 
  brands, 
  isContact, 
  email, 
  phone,
  className, 
  ...props 
}: CredentialBoxProps) => {
  return (
    <Card 
      className={cn(
        'h-full transition-all duration-200 hover:shadow-md border border-gray-200/80', 
        className
      )} 
      {...props}
    >
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-blue-700 font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
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
        
        {isContact && (
          <div className="pt-2 space-y-3">
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
      </CardContent>
    </Card>
  );
};

export default CredentialBox;
