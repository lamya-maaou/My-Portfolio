import React from "react";
import { useLanguage } from "../LanguageContext";
import { useTheme } from "../ThemeContext";

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 transition-colors duration-300 dark:bg-transparent bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="text-2xl font-bold">
        <span className="text-blue-400">L</span><span className="text-purple-400">M</span> <span className="dark:text-white text-gray-800">Portfolio</span>
      </div>
      <ul className="flex space-x-8 dark:text-white text-gray-800 font-medium">
        <li><a href="#about" className="hover:text-blue-400">{t.nav.about}</a></li>
        <li><a href="#projects" className="hover:text-blue-400">{t.nav.projects}</a></li>
        <li><a href="#skills" className="hover:text-blue-400">{t.nav.skills}</a></li>
        <li><a href="#contact" className="hover:text-blue-400">{t.nav.contact}</a></li>
      </ul>
      <div className="flex items-center space-x-4">
        <select 
          className="dark:bg-gray-800 bg-gray-100 dark:text-white text-gray-800 rounded px-2 py-1"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">EN</option>
          <option value="fr">FR</option>
        </select>
        <button 
          onClick={toggleTheme}
          className="dark:bg-gray-700 bg-gray-200 p-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
        >
          <span role="img" aria-label="theme">
            {isDarkMode ? '☀️' : '🌙'}
          </span>
        </button>
      </div>
    </nav>
  );
} 