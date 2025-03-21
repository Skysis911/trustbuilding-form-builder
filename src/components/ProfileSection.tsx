
import React from 'react';
import { cn } from '@/lib/utils';

interface ProfileSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const ProfileSection = ({ className, ...props }: ProfileSectionProps) => {
  return (
    <div className={cn('', className)} {...props}>
      <div className="flex flex-col items-center md:items-start">
        <div className="w-48 h-48 mb-4 rounded-lg overflow-hidden border border-gray-200 shadow-md">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
            alt="Mateusz Strzałkowski"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold">Mateusz Strzałkowski</h3>
          <p className="text-gray-600">Założyciel & CEO WorkFlow Media</p>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-800">
            Jestem doświadczonym Growth Hackerem, pojawiłem się w publikacjach Harvard Business Review oraz MIT Sloan. 
            Zarządzałem milionowymi wydatkami na reklamę i pomogłem firmom zwiększyć przychody z 0 do kilkunastu milionów złotych. 
            Zrobiłem to wszystko za pomocą kanałów Digital Marketingowych (Facebook Ads, GoogleAds, SEO, Linkedin Automation&Ads oraz mocnej analizie ruchu)
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-800">
            Doświadczenie zdobywałem w największych Domach Mediowych oraz własnej agencji gdzie obsługiwałem największe światowe brandy: Volkswagen, Sony, Intel, Dell, Google, HBO, Sage, Wirtualną Polskę, Play, Orange i wiele innych.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <p className="text-gray-800">
            Z chęcią opowiem o wnioskach jakie wyciągnąłem po wydaniu 180 milionów złotych na reklamy i wdrożę najlepsze wypracowane przez ten czas praktyki w Marketingu w Twojej firmie.
          </p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="text-gray-800 font-medium">
            Napisz do mnie: <a href="mailto:m.strzalkowski@workflowmedia.pl" className="text-blue-600 hover:underline">m.strzalkowski@workflowmedia.pl</a>
            <br />lub zadzwoń <a href="tel:+48725129862" className="text-blue-600 hover:underline">+48 725 129 862</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
