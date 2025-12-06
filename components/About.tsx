import React from 'react';
import { User, Briefcase, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image/Avatar Placeholder */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-80 md:w-80 md:h-96 bg-neutral-200 rounded-2xl border-2 border-black overflow-hidden shadow-[8px_8px_0px_0px_rgba(248,195,0,1)] relative z-10">
                 <img 
                  src="https://picsum.photos/400/500?grayscale" 
                  alt="Retrato minimalista" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/diagmonds-light.png')] opacity-20"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              Quem sou eu
              <span className="h-1 w-20 bg-[#F8C300] block mt-2 rounded-full"></span>
            </h2>
            
            <p className="text-lg text-neutral-700 leading-relaxed mb-8">
              Sou economista com 20 anos de estrada, tendo passado por grandes bancos e empresas financeiras. 
              Mas minha paixão real não está nas planilhas complexas, e sim em <strong>traduzir o financês para a vida real.</strong>
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white border border-neutral-200 rounded-lg">
                   <Briefcase className="w-5 h-5 text-[#F8C300]" />
                </div>
                <div>
                  <h4 className="font-bold">20 Anos de Mercado</h4>
                  <p className="text-sm text-neutral-600">Vivência prática em instituições sólidas.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white border border-neutral-200 rounded-lg">
                   <Globe className="w-5 h-5 text-[#F8C300]" />
                </div>
                <div>
                  <h4 className="font-bold">Experiência Global</h4>
                  <p className="text-sm text-neutral-600">Visão internacional aplicada à sua realidade.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white border border-neutral-200 rounded-lg">
                   <User className="w-5 h-5 text-[#F8C300]" />
                </div>
                <div>
                  <h4 className="font-bold">Abordagem Humana</h4>
                  <p className="text-sm text-neutral-600">Sociologia e psicologia aplicadas ao dinheiro.</p>
                </div>
              </div>

               <div className="flex items-start gap-4">
                <div className="p-2 bg-white border border-neutral-200 rounded-lg">
                   <Heart className="w-5 h-5 text-[#F8C300]" />
                </div>
                <div>
                  <h4 className="font-bold">Sem Ostentação</h4>
                  <p className="text-sm text-neutral-600">Foco no que importa: sua tranquilidade.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;