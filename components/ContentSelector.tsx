import React from 'react';
import { MapPin } from 'lucide-react';

const ContentSelector: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Explore os Conteúdos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Brazil Card */}
          <a href="#blog-brasil" className="group relative overflow-hidden rounded-xl bg-white border-2 border-neutral-200 hover:border-black p-10 transition-all duration-300">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MapPin size={100} />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4 text-green-700 group-hover:scale-110 transition-transform">
                <span className="font-bold text-xl">BR</span>
              </span>
              <h3 className="text-2xl font-bold mb-2">Brasil</h3>
              <p className="text-neutral-500 mb-6">Investimentos, renda fixa e contexto local.</p>
              <span className="text-sm font-bold text-black border-b-2 border-[#F8C300] pb-1 group-hover:border-black transition-colors">
                Ler artigos
              </span>
            </div>
          </a>

          {/* Europe Card */}
          <a href="#blog-europa" className="group relative overflow-hidden rounded-xl bg-white border-2 border-neutral-200 hover:border-black p-10 transition-all duration-300">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <MapPin size={100} />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <span className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4 text-blue-700 group-hover:scale-110 transition-transform">
                <span className="font-bold text-xl">EU</span>
              </span>
              <h3 className="text-2xl font-bold mb-2">Europa</h3>
              <p className="text-neutral-500 mb-6">Vida no exterior, euro e diversificação.</p>
              <span className="text-sm font-bold text-black border-b-2 border-[#F8C300] pb-1 group-hover:border-black transition-colors">
                Ler artigos
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentSelector;