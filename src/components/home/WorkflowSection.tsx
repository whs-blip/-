import { motion } from 'framer-motion';

export function WorkflowSection() {
  const steps = [
    { num: '01', title: '采集文化灵感', en: 'MOODBOARD', desc: '在「灵感看板」浏览文物图像，建立主题采集板' },
    { num: '02', title: '选定朝代风格', en: 'LORA MODEL', desc: '从 LoRA 库选择目标朝代，每个模型经过文物图像专项训练' },
    { num: '03', title: '输入描述 / 上传草图', en: 'GENERATION', desc: '文生图、图生图、草图重绘三种模式' },
    { num: '04', title: '提取 & 重组纹样', en: 'PATTERN', desc: '智能纹样工坊，生成矢量连续纹样，SVG/EPS 导出' },
    { num: '05', title: '生成面料贴图', en: 'FABRIC PBR', desc: '选择工艺类型，导出完整 PBR 材质包' },
    { num: '06', title: '整理作品集 & 导出', en: 'EXPORT', desc: '高清无水印下载、商用授权、随时回溯' },
  ];

  return (
    <section id="workflow" className="section-padding px-6 bg-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(var(--qing),transparent_60%)] opacity-[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(var(--zhu),transparent_60%)] opacity-[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-[960px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-24 justify-center"
        >
          <div className="w-16 h-[1px] bg-gold/50" />
          <span className="font-display italic text-[13px] tracking-[0.4em] text-gold uppercase">
            Workflow · 创作流程
          </span>
          <div className="w-16 h-[1px] bg-gold/50" />
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[27px] top-0 w-[1px] bg-gradient-to-b from-gold/50 via-qing/50 to-zhu/50 opacity-40 hidden md:block" 
          />

          <div className="flex flex-col gap-6">
            {steps.map((step, i) => (
              <motion.div 
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-6 md:gap-12 py-10 px-8 rounded-3xl border border-transparent hover:border-white/10 hover:bg-white/[0.03] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)] relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Left Column */}
                <div className="w-[54px] flex flex-col items-center gap-6 shrink-0 relative z-10">
                  <div className="w-4 h-4 border-[1.5px] border-gold/40 rotate-45 bg-bg group-hover:bg-gold group-hover:border-gold group-hover:shadow-[0_0_20px_rgba(184,148,63,0.6)] transition-all duration-500 relative z-10" />
                  <span className="font-display italic text-[14px] text-gold/40 group-hover:text-gold transition-colors duration-500">
                    {step.num}
                  </span>
                </div>

                {/* Middle Column */}
                <div className="flex-1 relative z-10">
                  <h3 className="font-serif font-semibold text-[24px] tracking-[0.1em] text-pearl mb-4 group-hover:text-gold transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-[16px] text-pearl/50 leading-[1.8] group-hover:text-pearl/80 transition-colors duration-500 tracking-wider">
                    {step.desc}
                  </p>
                </div>

                {/* Right Column */}
                <div className="shrink-0 flex items-start md:items-center relative z-10">
                  <span className="px-5 py-2.5 border border-white/10 rounded-full text-[12px] tracking-[0.2em] text-pearl/40 uppercase group-hover:border-gold/40 group-hover:text-gold/90 group-hover:bg-gold/5 transition-all duration-500 bg-white/5 backdrop-blur-sm">
                    {step.en}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
