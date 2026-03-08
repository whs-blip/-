import { motion } from 'framer-motion';

export function MarqueeBand() {
  const items = [
    { zh: '文/图生华服', en: 'Text/Image to Fashion' },
    { zh: '纹样工坊', en: 'Pattern Studio' },
    { zh: '面料 AI 实验室', en: 'Fabric AI Lab' },
    { zh: '灵感看板', en: 'Moodboard' },
    { zh: '朝代 LoRA 库', en: 'Dynasty LoRA Library' },
  ];

  return (
    <div className="bg-bg py-8 overflow-hidden border-y border-white/5 relative">
      <div className="absolute inset-0 bg-[radial-gradient(var(--gold),transparent_80%)] opacity-[0.03] pointer-events-none" />
      <div className="flex w-max slide-infinite relative z-10">
        {[...Array(2)].map((_, trackIndex) => (
          <div key={trackIndex} className="flex items-center">
            {items.map((item, i) => (
              <div key={i} className="flex items-center group">
                <span className="font-serif text-[15px] tracking-[0.3em] text-pearl/80 uppercase whitespace-nowrap px-12 group-hover:text-gold transition-colors duration-500">
                  {item.zh}
                </span>
                <div className="w-2 h-2 border-[0.5px] border-gold/50 rotate-45 shrink-0 group-hover:bg-gold group-hover:shadow-[0_0_10px_rgba(184,148,63,0.5)] transition-all duration-500" />
                <span className="font-display italic text-[15px] tracking-[0.3em] text-gold/60 uppercase whitespace-nowrap px-12 group-hover:text-gold transition-colors duration-500">
                  {item.en}
                </span>
                <div className="w-2 h-2 border-[0.5px] border-gold/50 rotate-45 shrink-0 group-hover:bg-gold group-hover:shadow-[0_0_10px_rgba(184,148,63,0.5)] transition-all duration-500" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
