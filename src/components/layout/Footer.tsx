import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="pt-24 px-12 pb-12 border-t border-white/10 bg-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(var(--gold),transparent_70%)] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          {/* Left Column */}
          <div className="md:col-span-5 flex flex-col gap-8">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-10 h-10 border-[1.5px] border-gold/80 flex items-center justify-center relative group-hover:border-gold transition-colors duration-500">
                <div className="absolute inset-[3px] border-[0.5px] border-gold/40 group-hover:border-gold/60 transition-colors duration-500"></div>
                <span className="font-brush text-gold text-2xl relative z-10 group-hover:scale-110 transition-transform duration-500">华</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-[16px] font-semibold tracking-[0.2em] text-pearl group-hover:text-white transition-colors duration-500">华服·创想</span>
                <span className="font-display italic text-[11px] tracking-[0.1em] text-gold/60 group-hover:text-gold/80 transition-colors duration-500">Huafu Create</span>
              </div>
            </Link>
            <p className="text-[14px] text-pearl/60 leading-[2] max-w-sm tracking-[0.02em]">
              以东方美学为魂，以生成式 AI 为笔。让每一位服装设计师都能轻松创作出根植于历史文化的精美华服设计。
            </p>
          </div>

          {/* Right Columns */}
          <div className="md:col-span-7 grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-6">
              <h4 className="text-[12px] tracking-[0.4em] font-display text-gold/80 uppercase">功能</h4>
              <div className="flex flex-col gap-4">
                {['创作工作台', '智能纹样工坊', '面料实验室', '灵感看板', 'LoRA 模型库'].map((item) => (
                  <Link key={item} to="#" className="text-[14px] text-pearl/50 hover:text-pearl transition-colors duration-300">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-[12px] tracking-[0.4em] font-display text-gold/80 uppercase">资源</h4>
              <div className="flex flex-col gap-4">
                {['使用文档', 'API 参考', '朝代风格指南', '华服·智库', '更新日志'].map((item) => (
                  <Link key={item} to="#" className="text-[14px] text-pearl/50 hover:text-pearl transition-colors duration-300">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="text-[12px] tracking-[0.4em] font-display text-gold/80 uppercase">关于</h4>
              <div className="flex flex-col gap-4">
                {['关于我们', '商业合作', '隐私政策', '服务条款', '联系我们'].map((item) => (
                  <Link key={item} to="#" className="text-[14px] text-pearl/50 hover:text-pearl transition-colors duration-300">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-white/10 w-full mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] text-pearl/40 tracking-[0.05em]">
            © 2025 <span className="text-gold/80">Huafu Create</span> · create.huafu.ai · 以 AI 传承东方服饰美学
          </p>
          <span className="font-brush text-[20px] text-pearl/20">华服·创想</span>
        </div>
      </div>
    </footer>
  );
}
