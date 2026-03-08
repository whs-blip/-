import { useState } from 'react';
import { Search, Plus, LayoutGrid, LayoutList, Heart, Send, ExternalLink, Info } from 'lucide-react';
import Masonry from 'react-masonry-css';

export function Mood() {
  const [activeBoard, setActiveBoard] = useState('all');

  const boards = [
    { id: 'all', name: '所有素材', count: 128 },
    { id: 'tang', name: '盛唐风华', count: 45 },
    { id: 'song', name: '宋韵雅集', count: 32 },
    { id: 'patterns', name: '传统纹样', count: 51 },
  ];

  const masonryBreakpoints = {
    default: 4,
    1200: 4,
    900: 3,
    600: 2,
  };

  // Generate some dummy images
  const images = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    url: `https://picsum.photos/seed/hanfu${i}/400/${300 + Math.floor(Math.random() * 300)}`,
    source: i % 3 === 0 ? '智库' : i % 2 === 0 ? 'AI生成' : '上传',
    style: i % 2 === 0 ? '唐风' : '宋制',
  }));

  return (
    <div className="h-[calc(100vh-64px)] flex flex-col overflow-hidden bg-bg relative">
      {/* Top Toolbar */}
      <div className="h-16 border-b border-white/10 bg-bg/80 backdrop-blur-md flex items-center justify-between px-6 shrink-0 z-20">
        <div className="flex items-center gap-4">
          <h2 className="font-serif font-semibold text-[16px] text-pearl tracking-[0.05em]">灵感看板</h2>
          <div className="w-[1px] h-4 bg-white/10" />
          <select className="bg-transparent text-[13px] text-pearl/50 outline-none cursor-pointer hover:text-pearl transition-colors appearance-none">
            {boards.map(b => (
              <option key={b.id} value={b.id} className="bg-bg text-pearl">{b.name}</option>
            ))}
          </select>
        </div>

        <div className="flex-1 max-w-md mx-8 relative">
          <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-pearl/40" />
          <input 
            type="text" 
            placeholder="搜索素材、风格、朝代..." 
            className="w-full bg-transparent border-b border-white/10 focus:border-gold outline-none text-[13px] text-pearl placeholder:text-pearl/30 py-2 pl-7 transition-colors"
          />
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-white/10 text-[12px] text-pearl hover:border-gold hover:text-gold transition-colors rounded-full bg-white/5">
            <Plus className="w-3.5 h-3.5" />
            新建采集板
          </button>
          <div className="flex border border-white/10 rounded-lg overflow-hidden">
            <button className="w-8 h-8 flex items-center justify-center bg-gold/20 text-gold">
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-pearl/50 hover:text-pearl hover:bg-white/5 transition-colors">
              <LayoutList className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden relative z-10">
        {/* Left Sidebar: Boards */}
        <div className="w-[240px] flex flex-col border-r border-white/10 bg-bg/60 backdrop-blur-xl overflow-y-auto shrink-0 p-4 custom-scrollbar">
          <div className="flex flex-col gap-2">
            {boards.map(board => (
              <button
                key={board.id}
                onClick={() => setActiveBoard(board.id)}
                className={`flex items-center gap-3 p-3 transition-all duration-300 text-left relative rounded-xl border ${
                  activeBoard === board.id 
                    ? 'bg-gold/10 border-gold/30 shadow-[0_0_15px_rgba(184,148,63,0.1)]' 
                    : 'border-transparent hover:bg-white/5 hover:border-white/10'
                }`}
              >
                {activeBoard === board.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-1/2 bg-gold rounded-r-full" />
                )}
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg shrink-0 flex flex-wrap overflow-hidden">
                  {/* Fake cover */}
                  <div className="w-full h-1/2 bg-white/5" />
                  <div className="w-1/2 h-1/2 bg-white/10" />
                  <div className="w-1/2 h-1/2 bg-white/20" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className={`text-[13px] truncate transition-colors ${activeBoard === board.id ? 'text-gold' : 'text-pearl'}`}>{board.name}</span>
                  <span className="font-display italic text-[10px] text-pearl/40">{board.count} items</span>
                </div>
              </button>
            ))}
          </div>
          
          <button className="mt-6 flex items-center justify-center gap-2 p-3 text-[13px] text-pearl/50 hover:text-gold hover:bg-gold/5 border border-dashed border-white/20 hover:border-gold/50 rounded-xl transition-all duration-300">
            <Plus className="w-4 h-4" />
            新建采集板
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="flex-1 overflow-y-auto p-6 bg-bg/50 custom-scrollbar relative">
          {/* Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[radial-gradient(var(--gold),transparent_60%)] opacity-[0.03] blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            {/* AI Recommendation Banner */}
            <div className="mb-8 p-4 border border-gold/30 bg-gold/5 rounded-xl flex items-center justify-between shadow-[0_0_20px_rgba(184,148,63,0.1)]">
              <span className="text-[13px] text-pearl/70 tracking-wider">根据你近期收藏，为你推荐 12 张相似风格素材</span>
              <button className="text-[13px] text-gold hover:underline underline-offset-4 tracking-wider">查看推荐</button>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-8 mb-8 text-[13px] text-pearl/50 border-b border-white/10 pb-4">
              <span className="text-gold font-semibold tracking-wider relative after:absolute after:bottom-[-17px] after:left-0 after:w-full after:h-[2px] after:bg-gold">所有</span>
              <span className="hover:text-pearl cursor-pointer transition-colors tracking-wider">智库文物</span>
              <span className="hover:text-pearl cursor-pointer transition-colors tracking-wider">AI 生成</span>
              <span className="hover:text-pearl cursor-pointer transition-colors tracking-wider">我的上传</span>
              <span className="hover:text-pearl cursor-pointer transition-colors tracking-wider">他人分享</span>
            </div>

            <Masonry
              breakpointCols={masonryBreakpoints}
              className="flex w-auto -ml-6"
              columnClassName="pl-6 bg-clip-padding"
            >
              {images.map(img => (
                <div key={img.id} className="mb-6 relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(184,148,63,0.15)]">
                  <img 
                    src={img.url} 
                    alt="Moodboard item" 
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Top Labels */}
                  <div className="absolute top-3 right-3 px-3 py-1 bg-black/60 backdrop-blur-md text-pearl text-[11px] rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.source}
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 border border-white/20 bg-black/40 backdrop-blur-md text-pearl text-[11px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {img.style}
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg via-bg/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex justify-end gap-2">
                    <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-gold text-pearl hover:text-bg transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-gold" title="保存到采集板">
                      <Heart className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-gold text-pearl hover:text-bg transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-gold" title="发送到生成工台">
                      <Send className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-gold text-pearl hover:text-bg transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-gold" title="查看详情">
                      <Info className="w-4 h-4" />
                    </button>
                    <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-gold text-pearl hover:text-bg transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-gold" title="来源链接">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </Masonry>
          </div>
        </div>
      </div>
    </div>
  );
}
