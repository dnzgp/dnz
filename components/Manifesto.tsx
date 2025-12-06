import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 text-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#F8C300]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-[#F8C300] font-bold tracking-widest uppercase mb-4 block text-sm">Minha Abordagem</span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Finanças não são sobre números.<br/>
              <span className="text-neutral-400">São sobre vida.</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="pl-6 border-l-4 border-[#F8C300]">
              <p className="text-2xl font-light">"Você não precisa de milagres, precisa de clareza."</p>
            </div>
            <div className="pl-6 border-l-4 border-neutral-700 hover:border-[#F8C300] transition-colors">
              <p className="text-2xl font-light">"Menos ruído. Mais propósito."</p>
            </div>
            <div className="pl-6 border-l-4 border-neutral-700 hover:border-[#F8C300] transition-colors">
              <p className="text-2xl font-light">"Dinheiro como ferramenta, não como prisão."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;