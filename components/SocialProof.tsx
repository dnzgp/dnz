import React from 'react';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-100">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">20+</h3>
            <p className="text-neutral-500 uppercase tracking-wide text-xs">Anos de Experiência</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">100+</h3>
            <p className="text-neutral-500 uppercase tracking-wide text-xs">Famílias Atendidas</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">XP</h3>
            <p className="text-neutral-500 uppercase tracking-wide text-xs">Anos em Bancos</p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">10k+</h3>
            <p className="text-neutral-500 uppercase tracking-wide text-xs">Leitores Mensais</p>
          </div>
        </div>
        
        {/* Placeholder Logos */}
        <div className="mt-16 pt-10 border-t border-neutral-100">
           <p className="text-center text-neutral-400 text-sm mb-6">EXPERIÊNCIA PRÉVIA EM GRANDES INSTITUIÇÕES</p>
           <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale">
              {/* Using simple text placeholders designed to look like logos for generic representation */}
              <div className="text-2xl font-black font-serif tracking-tighter">BANCO <span className="text-neutral-400">ALPHA</span></div>
              <div className="text-2xl font-bold tracking-widest">INVEST<span className="font-light">CORP</span></div>
              <div className="text-2xl font-extrabold italic">GLOBAL<span className="not-italic font-normal">FINANCE</span></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;