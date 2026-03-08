import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=2000&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30 scale-105 animate-[drift_30s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/80 via-bg/90 to-bg" />
      </div>

      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(var(--qing),transparent_60%)] opacity-[0.1] blur-[80px] drift" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-[-100px] right-[10%] w-[400px] h-[400px] bg-[radial-gradient(var(--gold),transparent_60%)] opacity-[0.1] blur-[80px] drift" style={{ animationDelay: '-6s' }} />
        <div className="absolute top-[20%] left-[-100px] w-[500px] h-[300px] bg-[radial-gradient(var(--zhu),transparent_60%)] opacity-[0.08] blur-[80px] drift" style={{ animationDelay: '-12s' }} />
      </div>

      {/* Large Character Shadow */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute right-[10%] top-1/2 -translate-y-1/2 font-brush text-[35vw] pointer-events-none text-pearl"
      >
        華
      </motion.div>

      {/* Vertical Line Decoration */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 h-[400px] w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden lg:block z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border border-gold bg-bg rotate-45" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 border border-gold bg-bg rotate-45" />
      </div>

      {/* Vertical Text */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] font-display italic text-[12px] tracking-[0.2em] text-gold/60 hidden lg:block z-10">
        AI Creative Studio for Traditional Chinese Fashion
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[800px] w-full px-6 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-12 h-[1px] bg-gold/60" />
          <span className="font-display italic text-[12px] tracking-[0.4em] text-gold uppercase">
            AI Creative Studio · create.huafu.ai
          </span>
          <div className="w-12 h-[1px] bg-gold/60" />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif font-bold text-[clamp(64px,10vw,110px)] tracking-[0.04em] text-pearl leading-[1.1] mb-6 drop-shadow-2xl"
        >
          华服<span className="text-zhu">·</span>创想
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display italic text-[clamp(18px,3vw,32px)] text-gold/80 mb-12 tracking-wide"
        >
          Where Heritage Meets Intelligence
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[18px] leading-[2] tracking-[0.06em] text-pearl/80 max-w-[560px] mb-14"
        >
          以<strong className="text-pearl font-semibold">东方美学</strong>为经，以<strong className="text-pearl font-semibold">生成式 AI</strong>为纬。<br />
          为服装设计师打造的智能 2D 创作工作站——<br />
          从文物纹样到完整设计稿，一触即达。
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row items-center gap-8"
        >
          <Link to="/studio" className="relative overflow-hidden px-12 py-5 bg-gold/10 border border-gold/30 text-gold font-semibold tracking-[0.2em] text-[16px] rounded-full group hover:bg-gold hover:text-ink transition-all duration-500 shadow-[0_0_20px_rgba(184,148,63,0.15)] hover:shadow-[0_0_40px_rgba(184,148,63,0.4)]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 flex items-center gap-2">
              开始创作 <span className="text-[18px] group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
            </span>
          </Link>
          <a href="#features" className="inline-flex items-center text-pearl/50 border-b border-pearl/20 pb-1 transition-all duration-300 hover:text-gold hover:border-gold tracking-[0.1em] text-[15px]">
            探索功能 &darr;
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-28 pt-12 border-t border-white/10 w-full flex flex-wrap justify-center gap-x-16 gap-y-10"
        >
          {[
            { num: '6+', unit: '朝代风格', label: 'LoRA 模型' },
            { num: '4096', unit: 'px', label: '最高生成分辨率' },
            { num: 'SVG', unit: '/ EPS', label: '矢量纹样导出' },
            { num: 'PBR', unit: '材质', label: '全套面料材质包' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="flex items-baseline gap-2">
                <span className="font-serif font-bold text-[36px] text-pearl">{stat.num}</span>
                <span className="font-display text-[16px] text-gold">{stat.unit}</span>
              </div>
              <span className="text-[13px] tracking-[0.1em] text-pearl/50 mt-2">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
