import { useState } from 'react';
import { Loader2, Lock } from 'lucide-react';

export function GeneratePanelBasic() {
  const [ratio, setRatio] = useState('3:4');
  const [count, setCount] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);

  const ratios = ['1:1', '3:4', '4:3', '9:16', '16:9'];

  return (
    <div className="flex flex-col p-6 flex-1 justify-between bg-bg/50">
      <div className="flex flex-col gap-8">
        {/* Aspect Ratio */}
        <div className="flex flex-col gap-4">
          <span className="text-[13px] text-pearl/70 tracking-wider">画面比例</span>
          <div className="flex gap-2">
            {ratios.map((r) => (
              <button
                key={r}
                onClick={() => setRatio(r)}
                className={`flex-1 py-2.5 text-[12px] font-mono border rounded-lg transition-all duration-300 ${
                  ratio === r
                    ? 'bg-gold/10 text-gold border-gold/50 shadow-[0_0_10px_rgba(184,148,63,0.2)]'
                    : 'border-white/10 text-pearl/50 hover:border-gold/30 hover:text-pearl/80 bg-white/5'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div className="flex flex-col gap-4">
          <span className="text-[13px] text-pearl/70 tracking-wider">生成数量</span>
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((c) => (
              <button
                key={c}
                onClick={() => setCount(c)}
                className={`w-10 h-10 flex items-center justify-center text-[14px] font-mono border rounded-lg transition-all duration-300 ${
                  count === c
                    ? 'bg-gold/10 text-gold border-gold/50 shadow-[0_0_10px_rgba(184,148,63,0.2)]'
                    : 'border-white/10 text-pearl/50 hover:border-gold/30 hover:text-pearl/80 bg-white/5'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-10 flex flex-col gap-3">
        <div className="text-right text-[12px] text-pearl/40 font-mono tracking-wider">
          剩余次数：7/10
        </div>
        <button
          disabled={isGenerating}
          onClick={() => setIsGenerating(true)}
          className="relative overflow-hidden w-full py-4 rounded-xl bg-gold/10 border border-gold/30 text-gold flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gold hover:text-bg transition-all duration-500 group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin relative z-10" />
              <span className="text-[16px] tracking-[0.2em] font-medium relative z-10">生成中…</span>
            </>
          ) : (
            <span className="text-[16px] tracking-[0.2em] font-medium relative z-10">开始生成</span>
          )}
        </button>
      </div>
    </div>
  );
}

export function GeneratePanelAdvanced() {
  return (
    <div className="flex flex-col p-6 gap-8 bg-bg/50">
      {/* Steps */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-[13px] text-pearl/70 tracking-wider">生成步数 (Steps)</span>
          <span className="font-display italic text-[13px] text-gold">30</span>
        </div>
        <input type="range" min="20" max="50" defaultValue="30" className="w-full accent-gold h-1 bg-white/10 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full cursor-pointer" />
      </div>

      {/* CFG Scale */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <span className="text-[13px] text-pearl/70 tracking-wider">引导系数 (CFG Scale)</span>
          <span className="font-display italic text-[13px] text-gold">7.5</span>
        </div>
        <input type="range" min="1" max="15" step="0.5" defaultValue="7.5" className="w-full accent-gold h-1 bg-white/10 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full cursor-pointer" />
      </div>

      {/* Sampler */}
      <div className="flex flex-col gap-4">
        <span className="text-[13px] text-pearl/70 tracking-wider">采样器</span>
        <select className="w-full bg-transparent border-b border-white/10 pb-3 text-[14px] text-pearl outline-none focus:border-gold/50 transition-colors appearance-none rounded-none cursor-pointer">
          <option className="bg-bg text-pearl">DPM++ 2M Karras</option>
          <option className="bg-bg text-pearl">Euler A</option>
          <option className="bg-bg text-pearl">DDIM</option>
          <option className="bg-bg text-pearl">UniPC</option>
        </select>
      </div>

      {/* Resolution */}
      <div className="flex flex-col gap-5 mt-2">
        <span className="text-[13px] text-pearl/70 tracking-wider">分辨率预设</span>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-4 cursor-pointer group">
            <div className="w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center bg-gold/10 shadow-[0_0_10px_rgba(184,148,63,0.2)]">
              <div className="w-2.5 h-2.5 rounded-full bg-gold" />
            </div>
            <span className="text-[14px] text-pearl group-hover:text-gold transition-colors">标准 (768px)</span>
          </label>
          <label className="flex items-center gap-4 cursor-not-allowed opacity-40">
            <div className="w-5 h-5 rounded-full border border-white/20 bg-white/5" />
            <span className="text-[14px] text-pearl/50 flex items-center gap-2">
              高清 (1536px) <Lock className="w-3.5 h-3.5" />
            </span>
          </label>
          <label className="flex items-center gap-4 cursor-not-allowed opacity-40">
            <div className="w-5 h-5 rounded-full border border-white/20 bg-white/5" />
            <span className="text-[14px] text-pearl/50 flex items-center gap-2">
              超高清 (4096px) <Lock className="w-3.5 h-3.5" />
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
