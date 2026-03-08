import { useState, useEffect } from 'react';
import { Download, Share2, Heart, RefreshCw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function CanvasArea() {
  const [status, setStatus] = useState<'idle' | 'generating' | 'done'>('idle');
  const [progress, setProgress] = useState(0);

  // Simulate generation for demo
  useEffect(() => {
    if (status === 'generating') {
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setStatus('done');
            return 100;
          }
          return p + 5;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [status]);

  return (
    <div className="flex-1 relative bg-bg flex items-center justify-center overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(var(--gold),transparent_70%)] opacity-[0.02] pointer-events-none" />

      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.div 
            key="idle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center relative z-10"
          >
            <span className="font-brush text-[160px] text-pearl/5 mb-6 pointer-events-none drop-shadow-2xl">
              華
            </span>
            <p className="text-[16px] text-pearl/60 mb-4 tracking-[0.05em]">
              在左侧输入描述，开始你的华服创作
            </p>
            <button className="text-[14px] text-gold/80 hover:text-gold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left">
              或浏览灵感看板
            </button>
            
            {/* Demo trigger */}
            <button 
              onClick={() => { setStatus('generating'); setProgress(0); }}
              className="mt-12 px-6 py-2.5 border border-white/10 rounded-full text-[13px] tracking-[0.1em] text-pearl/50 hover:border-gold/50 hover:text-gold transition-all duration-300 bg-white/5"
            >
              [Demo] 模拟生成
            </button>
          </motion.div>
        )}

        {status === 'generating' && (
          <motion.div 
            key="generating"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-10 relative z-10"
          >
            <div className="flex gap-4">
              {[0, 1, 2, 3].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    scale: (progress / 25) > i ? [1, 1.2, 1] : 1,
                    opacity: (progress / 25) > i ? 1 : 0.3
                  }}
                  transition={{ duration: 0.5 }}
                  className={`w-4 h-4 rotate-45 border border-gold/50 transition-colors duration-500 ${
                    (progress / 25) > i ? 'bg-gold shadow-[0_0_15px_rgba(184,148,63,0.5)]' : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
            <div className="flex flex-col items-center gap-3">
              <span className="font-serif text-[16px] text-pearl tracking-[0.15em] animate-pulse">
                正在生成第 1 张… (预计 12 秒)
              </span>
              <span className="font-display italic text-[14px] text-gold/80 tracking-[0.1em]">
                {progress}%
              </span>
            </div>
          </motion.div>
        )}

        {status === 'done' && (
          <motion.div 
            key="done"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full p-8 flex items-center justify-center relative z-10"
          >
            <div className="relative group max-w-[512px] w-full aspect-[3/4] bg-ink overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 hover:border-gold/30 transition-colors duration-500">
              <img 
                src="https://images.unsplash.com/photo-1544813545-4827b64fcacb?q=80&w=1024&auto=format&fit=crop" 
                alt="Generated Hanfu" 
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Top Right Label */}
              <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-pearl/80 text-[11px] font-mono tracking-wider">
                768x1024
              </div>

              {/* Bottom Left Label */}
              <div className="absolute bottom-6 left-6 font-display italic text-[12px] text-pearl/60 tracking-[0.1em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                Generated in 12.4s
              </div>

              {/* Action Bar */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg via-bg/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex justify-end gap-3">
                {[
                  { icon: Download, label: '下载' },
                  { icon: Share2, label: '分享' },
                  { icon: Heart, label: '收藏' },
                  { icon: RefreshCw, label: '以此图生图' },
                ].map((action, i) => (
                  <button 
                    key={i}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-gold hover:border-gold text-pearl transition-all duration-300 backdrop-blur-md hover:shadow-[0_0_20px_rgba(184,148,63,0.4)]"
                    title={action.label}
                  >
                    <action.icon className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Demo trigger */}
            <button 
              onClick={() => setStatus('idle')}
              className="absolute top-6 right-6 px-5 py-2.5 border border-white/10 rounded-full text-[12px] tracking-[0.1em] text-pearl/50 hover:border-gold hover:text-gold bg-black/40 backdrop-blur-md z-20 transition-all duration-300"
            >
              [Demo] 重置
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
