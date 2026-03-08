import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '../lib/utils';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center border border-white/10 bg-white/5 transition-all duration-500 hover:border-gold hover:shadow-[0_0_15px_rgba(184,148,63,0.3)] group",
      )}
      aria-label="Toggle theme"
    >
      <div className="relative w-4 h-4 overflow-hidden">
        <div className={cn(
          "absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex flex-col",
          theme === 'dark' ? "translate-y-[-100%]" : "translate-y-0"
        )}>
          <Moon className="w-4 h-4 text-pearl/50 group-hover:text-gold transition-colors shrink-0" strokeWidth={1.5} />
          <Sun className="w-4 h-4 text-pearl/50 group-hover:text-gold transition-colors shrink-0 mt-4" strokeWidth={1.5} />
        </div>
      </div>
    </button>
  );
}
