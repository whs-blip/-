import { motion } from 'framer-motion';

export function DynastyGallery() {
  const dynasties = [
    { name: '唐', desc: '盛唐广袖', en: 'Tang Dynasty · Ruqun', image: 'https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=800&auto=format&fit=crop' },
    { name: '宋', desc: '宋制褙子', en: 'Song Dynasty · Beizi', image: 'https://images.unsplash.com/photo-1583324113626-70df0f4deaab?q=80&w=800&auto=format&fit=crop' },
    { name: '明', desc: '明制圆领袍', en: 'Ming Dynasty · Yuanling', image: 'https://images.unsplash.com/photo-1611651338412-8403fa6e3599?q=80&w=800&auto=format&fit=crop' },
    { name: '清', desc: '清代氅衣', en: 'Qing Dynasty · Changyi', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop' },
    { name: '汉', desc: '汉制曲裾', en: 'Han Dynasty · Quju', image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=800&auto=format&fit=crop' },
    { name: '元', desc: '元代辫线袍', en: 'Yuan Dynasty · Zhisun', image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=800&auto=format&fit=crop' },
  ];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-bg py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(var(--gold),transparent_70%)] opacity-[0.02] pointer-events-none" />
      
      <div className="flex w-max slide-infinite hover:[animation-play-state:paused] gap-8 px-8 relative z-10">
        {[...Array(2)].map((_, trackIndex) => (
          <div key={trackIndex} className="flex gap-8">
            {dynasties.map((d, i) => (
              <motion.div 
                key={i} 
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-[340px] h-[500px] shrink-0 overflow-hidden rounded-3xl cursor-pointer group border border-white/10 hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(184,148,63,0.15)]"
              >
                {/* Background Image */}
                <img 
                  src={d.image} 
                  alt={d.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Large Character */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-brush text-[140px] text-pearl/5 pointer-events-none transition-all duration-700 ease-out group-hover:scale-110 group-hover:text-gold/10 group-hover:-translate-y-4">
                    {d.name}
                  </span>
                </div>

                {/* Labels */}
                <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-3 transform transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="font-serif text-[22px] tracking-[0.15em] text-pearl group-hover:text-gold transition-colors duration-500">
                    {d.desc}
                  </span>
                  <div className="w-10 h-[1px] bg-gold/50 mb-1 group-hover:bg-gold transition-colors duration-500" />
                  <span className="font-display italic text-[13px] text-pearl/60 tracking-[0.1em] group-hover:text-pearl/90 transition-colors duration-500">
                    {d.en}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
