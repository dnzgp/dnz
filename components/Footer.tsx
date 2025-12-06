import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-[#F8C300] mb-2">Clareza.</h3>
            <p className="text-neutral-400 text-sm max-w-xs">
              Organização financeira para uma vida com mais propósito e liberdade.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm text-neutral-300">
            <a href="#" className="hover:text-[#F8C300] transition-colors">Sobre</a>
            <a href="#" className="hover:text-[#F8C300] transition-colors">Serviços</a>
            <a href="#" className="hover:text-[#F8C300] transition-colors">Blog</a>
            <a href="#" className="hover:text-[#F8C300] transition-colors">Contato</a>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-xs text-neutral-500 flex flex-col md:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} Todos os direitos reservados.</p>
          <p className="max-w-lg text-justify md:text-right">
            <strong>Aviso Legal:</strong> Conteúdos com foco estritamente educativo e informativo. 
            Não realizo recomendações personalizadas de compra ou venda de ativos mobiliários (CNPI). 
            Rentabilidade passada não é garantia de rentabilidade futura.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;