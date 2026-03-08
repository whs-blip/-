import { useState } from 'react';
import { Upload, Download, Maximize2, Layers } from 'lucide-react';

export function Pattern() {
  const [layoutType, setLayoutType] = useState('single');
  const [previewTab, setPreviewTab] = useState('original');

  return (
    <div className="h-[calc(100vh-64px)] flex overflow-hidden bg-bg relative">
      {/* Left Panel: Input Area */}
      <div className="w-[400px] flex flex-col border-r border-white/10 bg-bg/60 backdrop-blur-xl overflow-y-auto shrink-0 custom-scrollbar z-20">
        <div className="p-6 border-b border-white/10">
          <h2 className="font-serif font-semibold text-[18px] text-pearl tracking-[0.08em] mb-2">智能纹样工坊</h2>
          <p className="text-[13px] text-pearl/50">从文物图片提取纹样单元，生成连续铺排</p>
        </div>

        <div className="p-6 flex flex-col gap-8">
          {/* Upload */}
          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-semibold text-pearl tracking-wider">源图上传</span>
            <div className="border-2 border-dashed border-white/20 hover:border-gold/50 transition-all duration-300 h-[200px] flex flex-col items-center justify-center cursor-pointer group bg-black/20 rounded-xl hover:bg-gold/5">
              <Upload className="w-8 h-8 text-pearl/40 group-hover:text-gold mb-4 transition-colors duration-300" strokeWidth={1.5} />
              <span className="text-[14px] text-pearl/70 mb-2 group-hover:text-pearl transition-colors">拖拽或点击上传源图</span>
              <span className="text-[11px] text-pearl/40 text-center px-4">支持文物照片、印花面料扫描图、自绘纹样</span>
            </div>
          </div>

          {/* Extraction Settings */}
          <div className="flex flex-col gap-6">
            <span className="text-[13px] font-semibold text-pearl tracking-wider">提取设置</span>
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-[13px] text-pearl/70">提取精度</span>
                <span className="text-[11px] text-gold">精细</span>
              </div>
              <input type="range" min="0" max="100" defaultValue="80" className="w-full h-1 bg-white/10 rounded-full appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-gold [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(184,148,63,0.5)] cursor-pointer" />
              <div className="flex justify-between text-[10px] text-pearl/40">
                <span>粗略</span>
                <span>精细</span>
              </div>
            </div>

            <label className="flex items-center justify-between cursor-pointer group">
              <span className="text-[13px] text-pearl/70 group-hover:text-pearl transition-colors">自动去除背景</span>
              <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer" defaultChecked />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-gold cursor-pointer shadow-[0_0_10px_rgba(184,148,63,0.3)]"></label>
              </div>
            </label>
          </div>

          {/* Layout Type */}
          <div className="flex flex-col gap-4">
            <span className="text-[13px] font-semibold text-pearl tracking-wider">铺排类型</span>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'single', label: '单独纹样' },
                { id: 'two', label: '二方连续' },
                { id: 'four', label: '四方连续' },
              ].map(type => (
                <button
                  key={type.id}
                  onClick={() => setLayoutType(type.id)}
                  className={`flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${
                    layoutType === type.id
                      ? 'border-gold bg-gold/10 shadow-[0_0_15px_rgba(184,148,63,0.15)]'
                      : 'border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-8 h-8 border flex items-center justify-center rounded-md transition-colors ${layoutType === type.id ? 'border-gold/50 bg-gold/20' : 'border-white/20 bg-black/20'}`}>
                    {/* Placeholder for SVG icon */}
                    <div className={`w-4 h-4 rounded-sm ${layoutType === type.id ? 'bg-gold' : 'bg-pearl/40'}`} />
                  </div>
                  <span className={`text-[11px] transition-colors ${layoutType === type.id ? 'text-gold' : 'text-pearl/70'}`}>{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button className="relative overflow-hidden w-full py-4 bg-gold/10 border border-gold/30 text-gold font-semibold tracking-[0.2em] text-[15px] rounded-xl group hover:bg-gold hover:text-ink transition-all duration-500 shadow-[0_0_15px_rgba(184,148,63,0.1)] hover:shadow-[0_0_30px_rgba(184,148,63,0.3)] mt-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10">开始提取</span>
          </button>
        </div>
      </div>

      {/* Right Panel: Preview & Export */}
      <div className="flex-1 flex flex-col bg-bg/50 relative z-10">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(var(--gold),transparent_60%)] opacity-[0.03] blur-[120px] pointer-events-none" />

        {/* Top Bar */}
        <div className="h-16 border-b border-white/10 bg-bg/80 backdrop-blur-md flex items-center justify-between px-6 shrink-0 relative z-20">
          <div className="flex gap-8 h-full">
            {[
              { id: 'original', label: '原始纹样' },
              { id: 'layout', label: '铺排预览' },
              { id: 'vector', label: '矢量化预览' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setPreviewTab(tab.id)}
                className={`relative h-full flex items-center text-[13px] tracking-[0.05em] transition-colors ${
                  previewTab === tab.id ? 'text-gold font-semibold' : 'text-pearl/50 hover:text-pearl'
                }`}
              >
                {tab.label}
                {previewTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold shadow-[0_0_10px_rgba(184,148,63,0.5)]" />
                )}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="px-5 py-2 border border-white/20 text-[12px] text-pearl hover:border-gold hover:text-gold transition-all duration-300 flex items-center gap-2 rounded-full bg-white/5">
              <Download className="w-3.5 h-3.5" />
              导出 PNG
            </button>
            <button className="px-5 py-2 bg-pearl text-ink text-[12px] font-semibold hover:bg-gold transition-colors duration-300 flex items-center gap-2 rounded-full">
              <Download className="w-3.5 h-3.5" />
              导出 SVG
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 relative flex items-center justify-center p-8 overflow-hidden">
          <div className="w-[600px] h-[600px] bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center">
            <span className="font-brush text-[80px] text-pearl opacity-[0.05]">纹</span>
            
            {/* Controls Overlay */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="w-10 h-10 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-pearl/50 hover:text-gold hover:border-gold/50 transition-all duration-300 shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Fusion Area (Bottom) */}
        <div className="h-[200px] border-t border-white/10 bg-bg/80 backdrop-blur-md p-6 flex flex-col shrink-0 relative z-20">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-gold" />
            <h3 className="text-[13px] font-semibold text-pearl tracking-wider">纹样融合</h3>
            <span className="text-[11px] text-pearl/40 ml-2">拖入 2-3 个纹样，AI 融合生成新纹样</span>
          </div>
          
          <div className="flex-1 flex gap-6">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-24 h-24 border border-dashed border-white/20 rounded-xl flex items-center justify-center text-[24px] text-pearl/20 bg-white/5 hover:border-gold/50 hover:text-gold/50 transition-all duration-300 cursor-pointer">
                +
              </div>
            ))}
            <div className="flex-1 flex items-center justify-center px-8">
              <button className="px-8 py-3 border border-gold/50 text-gold text-[13px] tracking-wider hover:bg-gold hover:text-ink transition-all duration-300 rounded-full shadow-[0_0_15px_rgba(184,148,63,0.1)] hover:shadow-[0_0_30px_rgba(184,148,63,0.3)] font-semibold">
                融合生成
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
