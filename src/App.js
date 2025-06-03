import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { LanguageProvider } from "./LanguageContext";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen transition-colors duration-300 dark:bg-gradient-to-b dark:from-[#1a2235] dark:to-[#232946] bg-gradient-to-b from-gray-50 to-gray-100">
          <Navbar />
          <div className="pt-16">
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
