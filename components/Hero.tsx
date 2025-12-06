import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-10 overflow-hidden bg-white">
      {/* Abstract Background Elements */}
      <div className="absolute top-20 right-[-10%] w-[300px] h-[300px] rounded-full bg-[#F8C300] opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-[-5%] w-[400px] h-[400px] rounded-full bg-neutral-200 opacity-20 blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <div className="inline-block px-4 py-1.5 mb-6 border border-neutral-200 rounded-full bg-neutral-50">
          <span className="text-sm font-semibold tracking-wide text-neutral-600 uppercase">
            Consultoria & Educação Financeira
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight text-neutral-900">
          Organização financeira <br className="hidden md:block" />
          <span className="relative inline-block">
            sem complicação.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#F8C300] -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
            </svg>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-neutral-600 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Clareza. Estratégia. Liberdade.
          <br/>
          <span className="text-base md:text-lg mt-2 block opacity-80">
            Economista com 20 anos de experiência ajudando você a investir com inteligência.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Quero organizar minhas finanças
            <ArrowRight size={20} />
          </Button>
          <Button variant="secondary" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
            Conhecer meu método
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;