import { useState } from 'react';
import { Download, Search } from 'lucide-react';

export function Fabric() {
  const [craft, setCraft] = useState('kesi');

  const crafts = [
    { id: 'kesi', name: '缂丝', en: 'Kesi' },
    { id: 'yunjin', name: '云锦', en: 'Yunjin' },
    { id: 'cixiu', name: '刺绣', en: 'Embroidery' },
    { id: 'zhijin', name: '织锦', en: 'Brocade' },
    { id: 'laran', name: '蜡染', en: 'Batik' },
    { id: 'zharan', name: '扎染', en: 'Tie-dye' },
    { id: 'jiaxie', name: '夹缬', en: 'Jiaxie' },
    { id: 'suxiu', name: '苏绣', en: 'Su Embroidery' },
  ];

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col overflow-hidden bg-bg relative">
      {/* Top Craft Selection */}
      <div className="h-[72px] border-b border-white/10 bg-bg/80 backdrop-blur-md flex items-center px-6 overflow-x-auto shrink-0 custom-scrollbar z-20">
        <div className="flex gap-8">
          {crafts.map(c => (
            <button
              key={c.id}
              onClick={() => setCraft(c.id)}
              className={`flex flex-col items-center justify-center h-[72px] px-4 relative transition-all duration-300 ${
                craft === c.id ? 'scale-105' : 'opacity-50 hover:opacity-100'
              }`}
            >
              <span className={`text-[14px] font-semibold tracking-[0.1em] transition-colors ${craft === c.id ? 'text-gold' : 'text-pearl'}`}>
                {c.name}
              </span>
              <span className="font-display italic text-[10px] text-pearl/40 mt-1">
                {c.en}
              </span>
              {craft === c.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold shadow-[0_0_10px_rgba(184,148,63,0.5)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative z-10">
        {/* Left Panel: Parameters */}
        <div className="w-[280px] flex flex-col border-r border-white/10 bg-bg/60 backdrop-blur-xl overflow-y-auto shrink-0 p-6 gap-8 custom-scrollbar">
          {/* Color Theme */}
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-semibold text-pearl tracking-wider">颜色主题</span>
            <div className="grid grid-cols-4 gap-2">
              {['#C84B31', '#2C5F5D', '#8B6914', '#4A3D7A', '#1A4A2E', '#F7F3EC'].map(color => (
                <button key={color} className="w-full aspect-square border border-white/10 hover:border-gold hover:shadow-[0_0_10px_rgba(184,148,63,0.3)] transition-all duration-300 rounded-md" style={{ backgroundColor: color }} />
              ))}
              <button className="w-full aspect-square border border-dashed border-white/20 flex items-center justify-center text-pearl/40 hover:text-gold hover:border-gold/50 transition-all duration-300 rounded-md bg-white/5 hover:bg-gold/5">
                +
              </button>
            </div>
          </div>

          {/* Sliders */}
          {[
            { label: '线密度', val: 80 },
            { label: '光泽度', val: 60 },
            { label: '凹凸深度', val: 40 },
            { label: '颜色饱和度', val: 75 },
          ].map(slider => (
            <div key={slider.label} className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-pearl/70 tracking-wider">{slider.label}</span>
                <span className="font-display italic text-[11px] text-gold">{slider.val}</span>
              </div>
              <input type="range" min="0" max="100" defaultValue={slider.val} className="w-full h-1 bg-white/10 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(184,148,63,0.5)] cursor-pointer" />
            </div>
          ))}

          <button className="relative overflow-hidden w-full py-4 bg-gold/10 border border-gold/30 text-gold font-semibold tracking-[0.2em] text-[15px] rounded-xl group hover:bg-gold hover:text-ink transition-all duration-500 shadow-[0_0_15px_rgba(184,148,63,0.1)] hover:shadow-[0_0_30px_rgba(184,148,63,0.3)] mt-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">生成面料</span>
          </button>
        </div>

        {/* Center: 3D Preview */}
        <div className="flex-1 relative bg-bg/50 flex flex-col">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(var(--gold),transparent_60%)] opacity-[0.05] blur-[100px] pointer-events-none" />

          <div className="flex-1 relative flex items-center justify-center overflow-hidden">
            {/* Placeholder for 3D Sphere */}
            <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-white/5 to-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative flex items-center justify-center backdrop-blur-sm">
              <span className="font-brush text-[80px] text-pearl opacity-[0.05]">丝</span>
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-gold/20 opacity-50 pointer-events-none mix-blend-overlay" />
            </div>

            {/* Controls */}
            <div className="absolute bottom-6 right-6 flex gap-2">
              <button className="w-10 h-10 bg-black/40 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-pearl/50 hover:text-gold hover:border-gold/50 transition-all duration-300 shadow-lg">
                <Search className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Bottom Export Area */}
          <div className="h-[88px] border-t border-white/10 bg-bg/80 backdrop-blur-md px-6 flex items-center justify-between shrink-0 relative z-10">
            <div className="flex flex-col">
              <span className="text-[13px] text-pearl font-semibold tracking-wider">兼容软件</span>
              <span className="text-[11px] text-pearl/40 mt-1">Style3D / CLO3D / Blender / Cinema4D</span>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2.5 border border-white/20 text-[13px] text-pearl hover:border-gold hover:text-gold transition-all duration-300 flex items-center gap-2 rounded-full bg-white/5">
                导出单张贴图
              </button>
              <button className="px-6 py-2.5 bg-pearl text-ink text-[13px] flex items-center gap-2 rounded-full font-semibold hover:bg-gold transition-colors duration-300">
                <Download className="w-4 h-4" />
                导出 PBR 材质包 (.zip)
              </button>
            </div>
          </div>
        </div>

        {/* Right Panel: Textures */}
        <div className="w-[320px] flex flex-col border-l border-white/10 bg-bg/60 backdrop-blur-xl overflow-y-auto shrink-0 p-6 custom-scrollbar">
          <h3 className="text-[13px] font-semibold text-pearl mb-6 tracking-wider">生成贴图</h3>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: 'base', name: '漫反射贴图', en: 'Base Color' },
              { id: 'roughness', name: '粗糙度贴图', en: 'Roughness' },
              { id: 'normal', name: '法线贴图', en: 'Normal Map' },
              { id: 'displacement', name: '位移贴图', en: 'Displacement' },
            ].map(tex => (
              <div key={tex.id} className="flex flex-col gap-3">
                <div className="aspect-square bg-black/40 border border-white/10 rounded-xl relative group cursor-pointer overflow-hidden hover:border-gold/50 transition-colors duration-300">
                  <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
                    <Search className="w-5 h-5 text-gold" />
                  </div>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-[11px] tracking-[0.2em] text-pearl/80 group-hover:text-gold transition-colors">{tex.name}</span>
                  <span className="font-display italic text-[9px] text-pearl/40">{tex.en}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
