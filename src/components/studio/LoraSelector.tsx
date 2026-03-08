import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function LoraSelector() {
  const [selected, setSelected] = useState('tang');

  const loras = [
    { id: 'tang', name: '唐', desc: '盛唐广袖', en: 'Tang', color: '#C84B31' },
    { id: 'song', name: '宋', desc: '宋制褙子', en: 'Song', color: '#2C5F5D' },
    { id: 'han', name: '汉', desc: '汉制曲裾', en: 'Han', color: '#8B6914' },
    { id: 'ming', name: '明', desc: '明制圆领袍', en: 'Ming', color: '#B8943F' },
    { id: 'qing', name: '清', desc: '清代氅衣', en: 'Qing', color: '#4A3D7A' },
    { id: 'yuan', name: '元', desc: '元代辫线袍', en: 'Yuan', color: '#2D5A3D' },
  ];

  return (
    <div className="flex flex-col border-b border-white/10 p-6 bg-bg/50">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[14px] font-semibold text-pearl tracking-[0.1em]">朝代风格</h3>
        <span className="font-serif text-[13px] text-gold/80">
          {loras.find(l => l.id === selected)?.desc}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        {loras.map((lora) => (
          <button
            key={lora.id}
            onClick={() => setSelected(lora.id)}
            className={`relative flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 text-left overflow-hidden group ${
              selected === lora.id
                ? 'border-gold/50 bg-gold/10 shadow-[0_0_15px_rgba(184,148,63,0.15)]'
                : 'border-white/5 bg-white/5 hover:border-gold/30 hover:bg-white/10'
            }`}
          >
            {selected === lora.id && (
              <motion.div 
                layoutId="activeLora"
                className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold shadow-[0_0_10px_rgba(184,148,63,0.8)]" 
              />
            )}
            
            {/* Background glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

            <span 
              className="font-brush text-[28px] drop-shadow-md transition-transform duration-300 group-hover:scale-110"
              style={{ color: lora.color }}
            >
              {lora.name}
            </span>
            <div className="flex flex-col z-10">
              <span className={`text-[13px] font-semibold transition-colors duration-300 ${selected === lora.id ? 'text-pearl' : 'text-pearl/70 group-hover:text-pearl'}`}>{lora.desc}</span>
              <span className={`font-display italic text-[11px] transition-colors duration-300 ${selected === lora.id ? 'text-gold/80' : 'text-pearl/40 group-hover:text-pearl/60'}`}>{lora.en}</span>
            </div>
          </button>
        ))}
      </div>

      <Link to="/models" className="text-[13px] text-pearl/50 hover:text-gold transition-colors text-right tracking-wider flex items-center justify-end gap-1 group">
        <span className="group-hover:-translate-x-1 transition-transform duration-300">更多风格</span>
        <span className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
      </Link>
    </div>
  );
}
