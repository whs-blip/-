import { Layers, Sun, Grid, LayoutDashboard } from 'lucide-react';
import { motion } from 'framer-motion';

export function FeaturesSection() {
  const features = [
    {
      num: '一',
      id: '01',
      icon: Layers,
      title: 'AI 华服生成工作台',
      desc: '输入中文描述，或上传草图与参考图，即可生成高精度华服设计图。内置六大朝代风格 LoRA 模型，一键切换唐风、宋制、明式、清代……让历史美学触手可及。',
      pills: ['文生图', '图生图', '草图重绘', '朝代 LoRA', '参数微调'],
    },
    {
      num: '二',
      id: '02',
      icon: Sun,
      title: '传统纹样的智能再生',
      desc: '从文物图片中 AI 提取纹样单元，自动生成二方连续、四方连续铺排，支持矢量化导出，直连纺织打印机。',
      pills: ['纹样提取', '四方连续', 'SVG 导出', '纹样融合'],
    },
    {
      num: '三',
      id: '03',
      icon: Grid,
      title: '工艺面料高清贴图生成',
      desc: '生成缂丝、云锦、刺绣等传统工艺的高清 PBR 材质包，包含漫反射、粗糙度、法线贴图，可直接导入 Style3D / CLO3D。',
      pills: ['缂丝·云锦', 'PBR 材质包', '法线贴图', '光泽参数'],
    },
    {
      num: '四',
      id: '04',
      icon: LayoutDashboard,
      title: '创意素材的智能枢纽',
      desc: '建立多主题采集板，从华服·智库直接拖拽文物图片与纹样。AI 根据收藏偏好推荐相似风格素材。',
      pills: ['采集板', '智库联动', 'AI 推荐', '一键转生成'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section id="features" className="bg-bg section-padding px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(var(--gold),transparent_60%)] opacity-[0.03] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-[1px] bg-gold/50" />
            <span className="font-display italic text-[13px] tracking-[0.4em] text-gold uppercase">
              Core Modules · 核心功能
            </span>
            <div className="w-16 h-[1px] bg-gold/50" />
          </div>
          <h2 className="font-serif font-bold text-[clamp(40px,6vw,64px)] text-pearl leading-[1.1] tracking-[0.04em] mb-8 drop-shadow-lg">
            四大创作模块<br />贯穿完整设计链路
          </h2>
          <p className="text-[16px] text-pearl/60 leading-[2] max-w-[600px] tracking-wider">
            从灵感采集到高精度资产导出，华服·创想为您提供一站式的智能设计体验。
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((f) => (
            <motion.div 
              key={f.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
              className="relative p-10 md:p-14 glass-panel rounded-3xl group overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(184,148,63,0.1)]"
            >
              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Background Number */}
              <div className="absolute -top-10 -right-10 font-display italic text-[200px] text-pearl opacity-[0.02] group-hover:opacity-[0.05] group-hover:text-gold transition-all duration-700 pointer-events-none leading-none select-none">
                {f.num}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl border border-gold/20 flex items-center justify-center relative mb-12 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500 bg-white/5 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                <f.icon className="w-7 h-7 text-gold/70 group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
              </div>

              <div className="font-display italic text-[12px] tracking-[0.3em] text-gold/80 uppercase mb-4">
                Module {f.id}
              </div>
              
              <h3 className="font-serif font-semibold text-[28px] tracking-[0.06em] text-pearl mb-6 group-hover:text-gold transition-colors duration-500">
                {f.title}
              </h3>
              
              <p className="text-[15px] text-pearl/60 leading-[2] tracking-[0.04em] mb-12 min-h-[90px] group-hover:text-pearl/80 transition-colors duration-500">
                {f.desc}
              </p>

              <div className="flex flex-wrap gap-3 relative z-10">
                {f.pills.map(pill => (
                  <span key={pill} className="px-4 py-1.5 rounded-full border border-white/10 text-[12px] tracking-[0.15em] text-pearl/50 bg-white/5 backdrop-blur-md group-hover:border-gold/30 group-hover:text-pearl/80 group-hover:bg-gold/5 transition-all duration-500">
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
