import React, { useState } from 'react';
import { generateFinancialInsight } from '../services/geminiService';
import { Sparkles, Loader2 } from 'lucide-react';
import Button from './Button';

const InsightGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [insight, setInsight] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    const result = await generateFinancialInsight(topic);
    setInsight(result);
    setLoading(false);
  };

  return (
    <section className="py-16 bg-white border-y border-neutral-100">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="text-[#F8C300]" size={24} />
          <h3 className="text-2xl font-bold">Reflexão Rápida</h3>
        </div>
        
        <p className="text-neutral-600 mb-8">
          Digite um tema (ex: "poupança", "gastos", "futuro") e receba um insight filosófico e prático.
        </p>

        <form onSubmit={handleGenerate} className="flex flex-col sm:flex-row gap-4 mb-8">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Sobre o que você quer pensar hoje?"
            className="flex-1 p-4 border-2 border-neutral-200 rounded-lg focus:outline-none focus:border-black transition-colors bg-neutral-50"
          />
          <Button type="submit" disabled={loading} className="min-w-[140px]">
            {loading ? <Loader2 className="animate-spin" /> : "Gerar Insight"}
          </Button>
        </form>

        {insight && (
          <div className="bg-[#F8C300] bg-opacity-10 border border-[#F8C300] p-6 rounded-xl animate-fade-in text-left">
            <p className="text-xl font-medium text-neutral-800 italic">
              "{insight}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InsightGenerator;