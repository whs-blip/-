import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../ThemeToggle';
import { cn } from '../../lib/utils';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-500 border-b",
        scrolled 
          ? "bg-bg/80 backdrop-blur-xl border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" 
          : "bg-transparent border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
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

        {/* Links */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: '功能模块', path: '/#features', isHash: true },
            { name: '创作流程', path: '/#workflow', isHash: true },
            { name: '朝代图库', path: '/gallery', isHash: false },
            { name: '模型库', path: '/models', isHash: false },
            { name: '定价', path: '/#pricing', isHash: true },
          ].map((link) => (
            link.isHash ? (
              <a
                key={link.name}
                href={link.path}
                className="text-[14px] tracking-[0.15em] text-pearl/70 hover:text-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-[14px] tracking-[0.15em] text-pearl/70 hover:text-gold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[1px] after:bg-gold after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
              >
                {link.name}
              </Link>
            )
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <Link
            to="/studio"
            className="px-6 py-2.5 bg-white/5 border border-white/20 text-pearl font-serif text-[14px] tracking-[0.1em] transition-all duration-500 hover:bg-gold hover:border-gold hover:text-ink hover:shadow-[0_0_20px_rgba(184,148,63,0.4)] rounded-full"
          >
            免费试用
          </Link>
        </div>
      </div>
    </nav>
  );
}
