import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center transition-colors duration-300 dark:bg-gradient-to-b dark:from-[#1a2235] dark:to-[#232946] bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-2">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 dark:bg-gray-800 bg-white rounded-2xl p-8 shadow-lg">
        {/* Left text */}
        <div className="flex-1 flex flex-col items-start justify-center gap-6">
          <h1 className="text-3xl md:text-4xl font-bold dark:text-white text-gray-800 mb-2 leading-tight text-center md:text-left">{t.about.title}</h1>
          <p className="text-lg dark:text-gray-200 text-gray-600 mb-4 max-w-lg whitespace-pre-line">
            {t.about.description}
          </p>
          <div className="flex items-center gap-6 mt-4">
            <a href="https://www.linkedin.com/in/lamya-maaou-221a4632a/" className="dark:bg-white/10 bg-gray-100 backdrop-blur-sm p-4 rounded-full hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <FaLinkedin className="text-3xl dark:text-white text-gray-800" />
            </a>
            <a href="https://github.com/lamya-maaou" className="dark:bg-white/10 bg-gray-100 backdrop-blur-sm p-4 rounded-full hover:bg-gray-200 dark:hover:bg-white/20 transition-all duration-300 transform hover:scale-110">
              <FaGithub className="text-3xl dark:text-white text-gray-800" />
            </a>
            <a href="C:/npm stUsers/sa/Desktop/DOCS/Portfolio/portfolio/public/LAMYA_MAAOU.pdf" download className="bg-pink-500/90 backdrop-blur-sm px-6 py-3 rounded-full hover:bg-pink-600 transition-all duration-300 transform hover:scale-110">
              <span className="text-white font-semibold">{t.about.viewCV}</span>
            </a>
          </div>
        </div>
        {/* Right photo */}
        <div className="flex-1 flex flex-col items-center gap-6">
          <div className="relative group">
            <img
              src="/lamya.png"
              alt="Lamya Maaou"
              className="w-[500px] h-[600px] object-cover rounded-[100px] shadow-xl border-4 dark:border-white border-gray-200 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
} 