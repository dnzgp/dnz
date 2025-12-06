import React from 'react';
import Button from './Button';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="bg-neutral-900 rounded-2xl p-8 md:p-16 text-center shadow-[8px_8px_0px_0px_#F8C300] border-2 border-black relative overflow-hidden">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F8C300] opacity-5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Pronto para transformar sua relação com o dinheiro?
            </h2>
            <p className="text-neutral-400 text-lg mb-10">
              Sem fórmulas mágicas. Apenas organização, estratégia e paz mental.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button>
                Agendar Sessão de Diagnóstico
              </Button>
              <Button variant="outline" className="group">
                Seguir no TikTok <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
              <Button variant="outline" className="group">
                Acessar o Blog <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;