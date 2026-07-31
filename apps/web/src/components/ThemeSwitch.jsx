import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeSwitch() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('kore-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('kore-theme', nextTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative w-20 h-10 rounded-full bg-base-900 border border-base-800 p-1 flex items-center transition-colors duration-500 cursor-pointer group"
      aria-label="Toggle theme"
    >
      <div 
        className={`w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center text-base-950 shadow-md transform transition-transform duration-500 ease-in-out ${
          theme === 'dark' ? 'translate-x-0' : 'translate-x-10'
        }`}
      >
        {theme === 'dark' ? (
          <Moon className="w-3.5 h-3.5 transition-transform duration-300 rotate-0" />
        ) : (
          <Sun className="w-3.5 h-3.5 transition-transform duration-300 rotate-90" />
        )}
      </div>
    </button>
  );
}