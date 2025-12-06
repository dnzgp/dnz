import React from 'react';
import { LayoutDashboard, BookOpen, TrendingUp } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="group bg-white p-8 rounded-xl border-2 border-neutral-100 hover:border-black transition-all duration-300 hover:shadow-[6px_6px_0px_0px_#F8C300]">
    <div className="w-14 h-14 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#F8C300] transition-colors duration-300 border border-neutral-100 group-hover:border-black">
      <div className="text-neutral-900">
        {icon}
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-neutral-600 leading-relaxed">{description}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">O Que Eu Faço</h2>
          <p className="text-neutral-600">
            Soluções desenhadas para quem busca organização sem perder a qualidade de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Organização Financeira"
            description="Planos práticos para sair do caos. Definimos rotinas, organizamos o fluxo de caixa e criamos hábitos que duram."
            icon={<LayoutDashboard size={28} />}
          />
          <ServiceCard 
            title="Educação Financeira"
            description="Conteúdos leves e acessíveis. Aprenda a linguagem do dinheiro sem complicações para tomar suas próprias decisões."
            icon={<BookOpen size={28} />}
          />
          <ServiceCard 
            title="Acompanhamento"
            description="Orientação contínua para investir com propósito. Uma visão externa e experiente para validar sua estratégia."
            icon={<TrendingUp size={28} />}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;