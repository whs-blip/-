import { useState } from 'react';
import { Search, Download, Share2, Trash2, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export function Gallery() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: '全部' },
    { id: 'generation', label: '华服生成' },
    { id: 'pattern', label: '纹样' },
    { id: 'fabric', label: '面料贴图' },
    { id: 'favorites', label: '收藏' },
  ];

  const works = Array.from({ length: 12 }).map((_, i) => ({
    id: i,
    url: `https://images.unsplash.com/photo-${1580000000000 + i * 100000}?q=80&w=800&auto=format&fit=crop`, // Using a placeholder pattern
    time: '2025-03-07 14:30',
    lora: i % 2 === 0 ? '唐风' : '宋制',
    resolution: '1024x1536',
  }));

  // Using better images for the gallery
  const galleryImages = [
    'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544813545-4827b64fcacb?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552689486-f6773047d19f?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-bg pt-24 px-6 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(var(--gold),transparent_60%)] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-between mb-12"
        >
          <h1 className="font-serif font-semibold text-[32px] text-pearl tracking-[0.1em]">作品集 <span className="font-display italic text-[16px] text-gold/60 ml-4">Gallery</span></h1>
        </motion.div>

        {/* Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex gap-10 border-b border-white/10 mb-10"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 text-[15px] tracking-[0.1em] transition-all duration-300 relative ${
                activeTab === tab.id ? 'text-gold font-semibold' : 'text-pearl/50 hover:text-pearl'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold" 
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6"
        >
          <div className="flex items-center gap-8">
            <select className="bg-transparent text-[14px] text-pearl/70 outline-none cursor-pointer border-b border-white/10 pb-2 hover:border-gold/50 transition-colors">
              <option className="bg-bg text-pearl">最近 7 天</option>
              <option className="bg-bg text-pearl">最近 30 天</option>
              <option className="bg-bg text-pearl">全部时间</option>
            </select>
            <select className="bg-transparent text-[14px] text-pearl/70 outline-none cursor-pointer border-b border-white/10 pb-2 hover:border-gold/50 transition-colors">
              <option className="bg-bg text-pearl">最新生成</option>
              <option className="bg-bg text-pearl">最早生成</option>
              <option className="bg-bg text-pearl">最多下载</option>
              <option className="bg-bg text-pearl">最多收藏</option>
            </select>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-pearl/40" />
            <input 
              type="text" 
              placeholder="搜索提示词、参数..." 
              className="w-full bg-transparent border-b border-white/10 focus:border-gold outline-none text-[14px] text-pearl placeholder:text-pearl/30 py-2 pl-8 transition-colors"
            />
          </div>
        </motion.div>

        {/* Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {works.map((work, index) => (
            <motion.div 
              key={work.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 4) }}
              className="group glass-panel rounded-2xl overflow-hidden relative border border-white/5 hover:border-gold/30 transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden bg-ink relative">
                <img 
                  src={galleryImages[index]} 
                  alt="Generated work" 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-80" />
              </div>

              {/* Hover Actions */}
              <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                {[
                  { icon: Download, label: '下载' },
                  { icon: Share2, label: '分享' },
                  { icon: RefreshCw, label: '再次生成' },
                  { icon: Trash2, label: '删除' },
                ].map((action, i) => (
                  <button 
                    key={i}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-gold hover:border-gold text-pearl transition-all duration-300"
                    title={action.label}
                  >
                    <action.icon className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                ))}
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="text-[12px] tracking-wider text-pearl/50">{work.time}</span>
                  <span className="font-display italic text-[11px] text-gold/70">{work.resolution}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full border border-gold/30 text-[11px] tracking-[0.1em] text-gold bg-gold/10 backdrop-blur-sm">
                    {work.lora}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
