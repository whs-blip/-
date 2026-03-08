import { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function PromptPanel() {
  const [mode, setMode] = useState<'text' | 'image' | 'sketch'>('text');
  const [prompt, setPrompt] = useState('');

  return (
    <div className="flex flex-col border-b border-white/10 bg-bg/50">
      {/* Tabs */}
      <div className="flex px-6 pt-6 gap-8 border-b border-white/10 relative">
        {[
          { id: 'text', label: '文生图' },
          { id: 'image', label: '图生图' },
          { id: 'sketch', label: '草图重绘' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setMode(tab.id as any)}
            className={`pb-4 text-[14px] tracking-[0.1em] transition-all duration-300 relative ${
              mode === tab.id 
                ? 'text-gold font-semibold' 
                : 'text-pearl/50 hover:text-pearl'
            }`}
          >
            {tab.label}
            {mode === tab.id && (
              <motion.div 
                layoutId="promptMode"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" 
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-8">
        {mode === 'text' ? (
          <div className="relative group">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="描述你的华服设计，例如：唐代风格广袖上衣，淡青色锦缎面料，领口绣如意云纹…"
              className="w-full min-h-[140px] bg-transparent border-b border-white/10 focus:border-gold/80 outline-none resize-y text-[14px] text-pearl placeholder:text-pearl/30 pb-8 transition-colors leading-[1.8]"
            />
            <div className="absolute bottom-3 right-0 font-display italic text-[12px] text-gold/60 group-focus-within:text-gold transition-colors">
              {prompt.length} / 500
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            <div className="border border-dashed border-white/20 hover:border-gold/50 bg-white/5 hover:bg-gold/5 transition-all duration-300 rounded-xl h-[180px] flex flex-col items-center justify-center cursor-pointer group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
              <Upload className="w-8 h-8 text-pearl/40 group-hover:text-gold mb-4 transition-colors relative z-10" strokeWidth={1.5} />
              <span className="text-[14px] text-pearl/80 mb-2 relative z-10">拖拽或点击上传参考图</span>
              <span className="text-[12px] text-pearl/40 font-mono tracking-wider relative z-10">PNG / JPG / WEBP</span>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-pearl/70 tracking-wider">重绘强度</span>
                <span className="font-display italic text-[13px] text-gold">0.7</span>
              </div>
              <input type="range" min="0" max="1" step="0.05" defaultValue="0.7" className="w-full accent-gold h-1 bg-white/10 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full cursor-pointer" />
            </div>
          </div>
        )}

        {/* Negative Prompt (Collapsible) */}
        <details className="group">
          <summary className="text-[13px] text-pearl/60 hover:text-pearl cursor-pointer list-none flex items-center gap-3 transition-colors">
            <div className="w-2 h-2 border border-pearl/40 rotate-45 group-open:bg-gold group-open:border-gold transition-colors" />
            <span className="tracking-wider">负向提示词</span>
          </summary>
          <div className="mt-4">
            <textarea
              placeholder="不想出现在画面中的元素…"
              className="w-full min-h-[80px] bg-black/20 rounded-lg p-3 border border-white/5 focus:border-gold/50 outline-none resize-y text-[13px] text-pearl placeholder:text-pearl/30 transition-colors leading-[1.6]"
            />
          </div>
        </details>
      </div>
    </div>
  );
}
