import { useState } from 'react';
import { Search, Filter, Star, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function Models() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: '全部模型' },
    { id: 'dynasty', label: '朝代风格' },
    { id: 'pattern', label: '传统纹样' },
    { id: 'fabric', label: '面料材质' },
    { id: 'accessory', label: '配饰妆容' },
  ];

  const models = [
    { id: 1, name: '盛唐广袖 Lora', category: 'dynasty', author: 'HuaFu_Official', downloads: '12.5k', rating: 4.9, image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop' },
    { id: 2, name: '宋制褙子 Lora', category: 'dynasty', author: 'HuaFu_Official', downloads: '9.8k', rating: 4.8, image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop' },
    { id: 3, name: '明制圆领袍 Lora', category: 'dynasty', author: 'HuaFu_Official', downloads: '15.2k', rating: 4.9, image: 'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=800&auto=format&fit=crop' },
    { id: 4, name: '清代氅衣 Lora', category: 'dynasty', author: 'HuaFu_Official', downloads: '8.4k', rating: 4.7, image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop' },
    { id: 5, name: '汉制曲裾 Lora', category: 'dynasty', author: 'HuaFu_Official', downloads: '11.1k', rating: 4.8, image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop' },
    { id: 6, name: '元代辫线袍 Lora', category: 'dynasty', author: 'HuaFu_Official', downloads: '6.2k', rating: 4.6, image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&auto=format&fit=crop' },
    { id: 7, name: '如意云纹 Pattern', category: 'pattern', author: 'Design_Master', downloads: '5.5k', rating: 4.9, image: 'https://images.unsplash.com/photo-1544813545-4827b64fcacb?q=80&w=800&auto=format&fit=crop' },
    { id: 8, name: '蜀锦面料 Fabric', category: 'fabric', author: 'Texture_Pro', downloads: '7.8k', rating: 4.8, image: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-bg pt-24 px-6 pb-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[radial-gradient(var(--gold),transparent_60%)] opacity-[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6"
        >
          <div>
            <h1 className="font-serif font-semibold text-[32px] text-pearl tracking-[0.1em] mb-2">模型库 <span className="font-display italic text-[16px] text-gold/60 ml-4">Models</span></h1>
            <p className="text-[14px] text-pearl/50 tracking-wider">探索高质量的华服生成模型、纹样和面料材质</p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-pearl/40" />
            <input 
              type="text" 
              placeholder="搜索模型名称、作者..." 
              className="w-full bg-transparent border-b border-white/10 focus:border-gold outline-none text-[14px] text-pearl placeholder:text-pearl/30 py-2 pl-8 transition-colors"
            />
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full text-[14px] tracking-[0.1em] transition-all duration-300 border ${
                activeCategory === category.id 
                  ? 'bg-gold/10 text-gold border-gold/50 shadow-[0_0_15px_rgba(184,148,63,0.2)]' 
                  : 'bg-white/5 text-pearl/60 border-white/10 hover:border-gold/30 hover:text-pearl'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {models.map((model, index) => (
            <motion.div 
              key={model.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index % 4) }}
              className="group glass-panel rounded-2xl overflow-hidden relative border border-white/5 hover:border-gold/30 transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden bg-ink relative">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-90" />
                
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-[11px] text-pearl font-mono">{model.rating}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col gap-4 relative z-10 -mt-8">
                <div>
                  <h3 className="font-serif text-[18px] text-pearl tracking-wider mb-1 group-hover:text-gold transition-colors">{model.name}</h3>
                  <p className="text-[12px] text-pearl/50 tracking-wider">by {model.author}</p>
                </div>
                
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2 text-[12px] text-pearl/40 font-mono">
                    <Download className="w-3.5 h-3.5" />
                    {model.downloads}
                  </div>
                  <button className="px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[12px] text-pearl hover:bg-gold hover:border-gold hover:text-bg transition-all duration-300 tracking-wider">
                    使用
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
