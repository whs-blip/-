import { motion } from 'framer-motion';

export function PricingSection() {
  const plans = [
    {
      name: '免费版',
      desc: '适合个人爱好者体验',
      price: '¥0',
      unit: '/ 永久免费',
      features: [
        '每日 10 次生成',
        '基础分辨率（最高 1024px）',
        '含水印下载',
        '3 个朝代 LoRA',
        '1 个采集板',
      ],
      btnText: '免费注册',
      featured: false,
    },
    {
      name: '专业版',
      desc: '适合独立设计师与工作室',
      price: '¥199',
      unit: '/ 月',
      features: [
        '无限次生成',
        '高清 4096px',
        '无水印+商用授权',
        '全部 6+ LoRA',
        '完整纹样工坊',
        'PBR 导出',
        '批量 8 张',
      ],
      btnText: '立即订阅',
      featured: true,
    },
    {
      name: '工作室版',
      desc: '适合企业级团队协作',
      price: '¥999',
      unit: '/ 月起',
      features: [
        '全部专业版功能',
        'API 10万次/月',
        '团队 10 席位',
        '优先队列',
        '自定义 LoRA 训练',
        '专属客户经理',
      ],
      btnText: '联系我们',
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding px-6 bg-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[radial-gradient(var(--gold),transparent_60%)] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-24"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-gold/50" />
            <span className="font-display italic text-[13px] tracking-[0.4em] text-gold uppercase">
              Pricing · 定价方案
            </span>
            <div className="w-16 h-[1px] bg-gold/50" />
          </div>
          <h2 className="font-serif font-bold text-[clamp(40px,6vw,64px)] text-pearl leading-[1.1] tracking-[0.04em] drop-shadow-lg">
            选择适合您的创作方案
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className={`relative p-12 rounded-[2rem] transition-all duration-500 overflow-hidden group ${
                plan.featured 
                  ? 'bg-ink text-pearl shadow-[0_20px_80px_rgba(184,148,63,0.15)] border border-gold/40' 
                  : 'glass-panel text-pearl border border-white/10 hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(184,148,63,0.1)]'
              }`}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {plan.featured && (
                <div className="absolute top-8 right-8 bg-gold/10 border border-gold/50 text-gold px-5 py-2 rounded-full font-display italic text-[12px] tracking-[0.3em] shadow-[0_0_15px_rgba(184,148,63,0.2)]">
                  推荐
                </div>
              )}

              <div className="font-display italic text-[13px] tracking-[0.3em] text-gold/80 uppercase mb-6 relative z-10">
                Tier 0{i + 1}
              </div>
              
              <h3 className={`font-serif font-semibold text-[32px] tracking-[0.05em] mb-4 relative z-10 text-pearl`}>
                {plan.name}
              </h3>
              
              <p className={`text-[15px] leading-[1.8] mb-12 relative z-10 ${plan.featured ? 'text-pearl/70' : 'text-pearl/50'}`}>
                {plan.desc}
              </p>

              <div className="flex items-baseline gap-2 mb-12 relative z-10">
                <span className={`font-serif font-bold text-[56px] ${plan.featured ? 'text-gold' : 'text-pearl'}`}>
                  {plan.price}
                </span>
                <span className={`text-[15px] tracking-wider ${plan.featured ? 'text-pearl/50' : 'text-pearl/40'}`}>
                  {plan.unit}
                </span>
              </div>

              <div className={`h-[1px] w-full mb-12 relative z-10 ${plan.featured ? 'bg-gold/20' : 'bg-white/10'}`} />

              <ul className="flex flex-col gap-5 mb-14 relative z-10">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-4">
                    <div className={`w-1.5 h-1.5 rotate-45 shrink-0 ${plan.featured ? 'bg-gold' : 'bg-white/40 group-hover:bg-gold/60 transition-colors'}`} />
                    <span className={`text-[15px] tracking-[0.04em] ${plan.featured ? 'text-pearl/90' : 'text-pearl/70 group-hover:text-pearl/90 transition-colors'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-5 rounded-full font-serif text-[16px] tracking-[0.2em] transition-all duration-500 relative z-10 overflow-hidden group/btn ${
                  plan.featured
                    ? 'bg-gold text-ink font-semibold hover:bg-white hover:shadow-[0_0_30px_rgba(184,148,63,0.4)]'
                    : 'border border-white/20 text-pearl hover:border-gold hover:text-gold bg-white/5 hover:bg-gold/5'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
                <span className="relative z-10">{plan.btnText}</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
