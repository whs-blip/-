import { PromptPanel } from '../components/studio/PromptPanel';
import { LoraSelector } from '../components/studio/LoraSelector';
import { GeneratePanelBasic, GeneratePanelAdvanced } from '../components/studio/GeneratePanel';
import { CanvasArea } from '../components/studio/CanvasArea';
import { Loader2, History, Download, Share2 } from 'lucide-react';

export function Studio() {
  return (
    <div className="h-[calc(100vh-64px)] flex flex-col overflow-hidden bg-bg relative">
      {/* Top Toolbar */}
      <div className="h-16 border-b border-white/10 flex items-center justify-between px-6 shrink-0 bg-bg/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-3 text-[13px] text-pearl/50 tracking-wider">
          <span className="hover:text-pearl cursor-pointer transition-colors">华服·创想</span>
          <span className="text-pearl/30">/</span>
          <span className="text-pearl font-semibold">创作工作台</span>
        </div>

        <div className="flex items-center gap-3 text-[13px] text-gold/80 bg-gold/5 px-4 py-1.5 rounded-full border border-gold/20">
          <Loader2 className="w-4 h-4 animate-spin text-gold" />
          <span className="tracking-widest">空闲中</span>
        </div>

        <div className="flex items-center gap-6">
          <button className="flex items-center gap-2 text-[13px] text-pearl/50 hover:text-pearl transition-colors tracking-wider group">
            <History className="w-4 h-4 group-hover:text-gold transition-colors" strokeWidth={1.5} />
            历史
          </button>
          <div className="w-[1px] h-4 bg-white/10" />
          <button className="flex items-center gap-2 text-[13px] text-pearl/50 hover:text-pearl transition-colors tracking-wider group">
            <Download className="w-4 h-4 group-hover:text-gold transition-colors" strokeWidth={1.5} />
            下载
          </button>
          <button className="flex items-center gap-2 text-[13px] text-pearl/50 hover:text-pearl transition-colors tracking-wider group">
            <Share2 className="w-4 h-4 group-hover:text-gold transition-colors" strokeWidth={1.5} />
            分享
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative z-10">
        {/* Left Panel */}
        <div className="w-[320px] flex flex-col border-r border-white/10 bg-bg/60 backdrop-blur-xl overflow-y-auto shrink-0 shadow-[20px_0_40px_rgba(0,0,0,0.3)] z-20 custom-scrollbar">
          <PromptPanel />
          <LoraSelector />
          <GeneratePanelBasic />
        </div>

        {/* Center Canvas */}
        <CanvasArea />

        {/* Right Panel */}
        <div className="w-[320px] flex flex-col border-l border-white/10 bg-bg/60 backdrop-blur-xl overflow-y-auto shrink-0 shadow-[-20px_0_40px_rgba(0,0,0,0.3)] z-20 custom-scrollbar">
          <div className="border-b border-white/10 p-6 bg-bg/50">
            <h3 className="font-display italic text-[12px] tracking-[0.3em] text-pearl/50 uppercase flex items-center gap-3">
              <span className="w-4 h-[1px] bg-gold/50" />
              Advanced Settings
            </h3>
          </div>
          <GeneratePanelAdvanced />
        </div>
      </div>
    </div>
  );
}
